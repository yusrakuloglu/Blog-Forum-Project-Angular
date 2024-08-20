import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionService extends BaseService {
  public user: any;
  constructor(private base: BaseService) {
    super(base.http);
  }

  public postQuestion(questionObj: any) {
    return this.base.postReq('http://localhost:3000/questions', questionObj);
  }

  public getQuestion() {
    return this.base.getReq('http://localhost:3000/questions');
  }
  public getQuestionId(id: any) {
    return this.base.getReq('http://localhost:3000/questions/' + id);
  }
  public updateQuestion(newObj: any) {
    return this.base.putReq(
      'http://localhost:3000/questions/' + newObj.id,
      newObj,
    );
  }
}
