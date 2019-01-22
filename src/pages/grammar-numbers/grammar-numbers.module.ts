import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrammarNumbersPage } from './grammar-numbers';

@NgModule({
  declarations: [
    GrammarNumbersPage,
  ],
  imports: [
    IonicPageModule.forChild(GrammarNumbersPage),
  ],
})
export class GrammarNumbersPageModule {}
