import { ComponentsModule } from './../../components/components.module';
import { FlashCardComponent } from './../../components/flash-card/flash-card';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizIdiomsPage } from './quiz-idioms';

@NgModule({
  declarations: [
    QuizIdiomsPage,
    
  ],
  imports: [
    IonicPageModule.forChild(QuizIdiomsPage),
    ComponentsModule
  ],
})
export class QuizIdiomsPageModule {}
