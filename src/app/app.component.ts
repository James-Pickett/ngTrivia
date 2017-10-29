import { QuestionComponent } from './question/question.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-question></app-question>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
