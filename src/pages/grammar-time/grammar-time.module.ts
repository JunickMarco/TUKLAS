import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrammarTimePage } from './grammar-time';

@NgModule({
  declarations: [
    GrammarTimePage,
  ],
  imports: [
    IonicPageModule.forChild(GrammarTimePage),
  ],
})
export class GrammarTimePageModule {}
