import { ComponentsModule } from './../../components/components.module';
import { FlashCardComponent } from './../../components/flash-card/flash-card';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizBaybayinPage } from './quiz-baybayin';

@NgModule({
  declarations: [
    QuizBaybayinPage,
    
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(QuizBaybayinPage),
  ],
})
export class QuizBaybayinPageModule {}
