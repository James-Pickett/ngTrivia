import { ApiService } from './shared/services/api.service';
import { QuestionService } from './shared/services/question.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent
],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ QuestionService, ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
