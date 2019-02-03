import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizGrammarPage } from './quiz-grammar';

@NgModule({
  declarations: [
    QuizGrammarPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizGrammarPage),
  ],
})
export class QuizGrammarPageModule {}
