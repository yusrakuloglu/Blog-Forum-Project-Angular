import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
  question: any = '';
  questionList: Array<any> = [];
  constructor(
    public questionService: QuestionService,
    public userService: UserService,
  ) {}
  ngOnInit(): void {
    this.questionService.getQuestion().subscribe((res) => {
      this.questionList = res;
    });
  }
  post() {
    this.questionService
      .postQuestion({
        username: this.userService.user.username,
        question: this.question,
        solutions: [],
      })
      .subscribe((res) => {
        this.questionList.push(res);
      });
  }
}
