import { ComponentsModule } from './../../components/components.module';
import { FlashCardComponent } from './../../components/flash-card/flash-card';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizGrammarPage } from './quiz-grammar';

@NgModule({
  declarations: [
    QuizGrammarPage,
    
  ],
  imports: [
    IonicPageModule.forChild(QuizGrammarPage),
    ComponentsModule
  ],
})
export class QuizGrammarPageModule {}
