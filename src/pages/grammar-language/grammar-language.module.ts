import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrammarLanguagePage } from './grammar-language';

@NgModule({
  declarations: [
    GrammarLanguagePage,
  ],
  imports: [
    IonicPageModule.forChild(GrammarLanguagePage),
  ],
})
export class GrammarLanguagePageModule {}
