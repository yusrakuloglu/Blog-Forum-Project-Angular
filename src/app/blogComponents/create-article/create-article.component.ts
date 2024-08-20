import { Component, ViewChild, viewChild } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ArticleService } from '../../services/article.service';
import { Router } from '@angular/router';
import { SnackbarComponent } from '../../snackbar/snackbar.component';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.css',
})
export class CreateArticleComponent {
  constructor(
    private articleService: ArticleService,
    private router: Router,
  ) {}
  @ViewChild(SnackbarComponent) snackbar?: SnackbarComponent;
  username: string = '';
  title: string = '';
  content: string = '';

  post() {
    if (!this.username || !this.title || !this.content) {
      this.snackbar?.showSnackbar('Please fill in all fields');
      return;
    }
    let articleObj = {
      author: this.username,
      title: this.title,
      content: this.content,
      comments: [],
    };
    this.articleService.postArticle(articleObj).subscribe((res) => {
      console.log(res);
    });
    this.router.navigateByUrl('/blog');
  }
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '300px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],
  };
}
