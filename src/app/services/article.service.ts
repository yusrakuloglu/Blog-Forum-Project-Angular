import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleService extends BaseService {
  constructor(private base: BaseService) {
    super(base.http);
  }
  public postArticle(data: any) {
    return this.base.postReq('http://localhost:3000/articles', data);
  }
  public getArticles() {
    return this.base.getReq('http://localhost:3000/articles');
  }
  public updateArticle(articleData: any) {
    return this.base.putReq(
      'http://localhost:3000/articles/' + articleData.id,
      articleData,
    );
  }
}
