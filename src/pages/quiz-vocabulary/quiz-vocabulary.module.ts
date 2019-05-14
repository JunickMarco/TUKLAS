import { ComponentsModule } from './../../components/components.module';
import { FlashCardComponent } from './../../components/flash-card/flash-card';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizVocabularyPage } from './quiz-vocabulary';

@NgModule({
  declarations: [
    QuizVocabularyPage,
    

  ],
  imports: [
    IonicPageModule.forChild(QuizVocabularyPage),
    ComponentsModule
  ],
})
export class QuizVocabularyPageModule {}
