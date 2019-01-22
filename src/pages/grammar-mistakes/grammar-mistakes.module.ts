import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrammarMistakesPage } from './grammar-mistakes';

@NgModule({
  declarations: [
    GrammarMistakesPage,
  ],
  imports: [
    IonicPageModule.forChild(GrammarMistakesPage),
  ],
})
export class GrammarMistakesPageModule {}
