import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizVocabularyPage } from './quiz-vocabulary';

@NgModule({
  declarations: [
    QuizVocabularyPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizVocabularyPage),
  ],
})
export class QuizVocabularyPageModule {}
