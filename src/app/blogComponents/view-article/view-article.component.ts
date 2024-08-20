import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrl: './view-article.component.css',
})
export class ViewArticleComponent implements OnInit {
  articlesData: Array<any> = [];
  articleIndex: any;
  username: string = '';
  comment: string = '';
  constructor(
    private articleService: ArticleService,
    private router: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.articleIndex = this.router.snapshot.paramMap.get('articleIndex');
    this.articleService.getArticles().subscribe((res) => {
      this.articlesData = res;
    });
  }
  addComment() {
    let obj = {
      username: this.username,
      comment: this.comment,
    };
    this.articlesData[this.articleIndex].comments.push(obj);
    this.articleService
      .updateArticle(this.articlesData[this.articleIndex])
      .subscribe((res) => {
        console.log(res);
        (this.username = ''), (this.comment = '');
      });
  }
}
