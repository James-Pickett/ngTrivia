import { ApiService } from './../shared/services/api.service';
import { QuestionService } from './../shared/services/question.service';
import { Result } from './../shared/models/result';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})

@Injectable()
export class QuestionComponent implements OnInit {

  questions: Result[];

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.questionService.get().subscribe( (data) => {
      this.questions = data;
      }
    );
  }
}
