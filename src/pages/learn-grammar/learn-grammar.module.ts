import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LearnGrammarPage } from './learn-grammar';

@NgModule({
  declarations: [
    LearnGrammarPage,
  ],
  imports: [
    IonicPageModule.forChild(LearnGrammarPage),
  ],
})
export class LearnGrammarPageModule {}
