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

  question: Result;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.getQuestion();
  }

  onSelect(answer) {
    if (answer === this.question.correct_answer) {
      this.question.question = 'Correct!';
      window.location.reload();
    }
  }

  getQuestion() {

    this.questionService.get().subscribe( (data) => {

      this.question = data[0];
      this.question.question = decodeURIComponent(this.question.question);
      this.question.category = decodeURIComponent(this.question.category);
      this.question.difficulty = decodeURIComponent(this.question.difficulty);
      this.question.correct_answer = decodeURIComponent(this.question.correct_answer);
      this.question.allAnswers = this.question.incorrect_answers;
      this.question.allAnswers.push(this.question.correct_answer);

      for (let i: number = this.question.allAnswers.length - 1; i >= 0; i--) {
        const inputArray: string[] = this.question.allAnswers;
        let randomIndex: number = Math.floor(Math.random() * (i + 1));
        let itemAtIndex: string = inputArray[randomIndex];

        inputArray[randomIndex] = inputArray[i];
        inputArray[i] = itemAtIndex;
      }

      for (let i = 0; i < this.question.allAnswers.length; i++) {
        this.question.allAnswers[i] = decodeURIComponent(this.question.allAnswers[i]);
      }
    }
  );
  }
}
