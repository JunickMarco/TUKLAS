import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizIdiomsPage } from './quiz-idioms';

@NgModule({
  declarations: [
    QuizIdiomsPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizIdiomsPage),
  ],
})
export class QuizIdiomsPageModule {}
