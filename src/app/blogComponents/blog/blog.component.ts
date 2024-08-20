import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  articlesData: Array<any> = [];
  constructor(private articleService: ArticleService) {}
  ngOnInit(): void {
    this.articleService.getArticles().subscribe((res) => {
      this.articlesData = res;
    });
  }
}
