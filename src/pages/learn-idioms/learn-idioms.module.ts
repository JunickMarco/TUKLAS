import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LearnIdiomsPage } from './learn-idioms';

@NgModule({
  declarations: [
    LearnIdiomsPage,
  ],
  imports: [
    IonicPageModule.forChild(LearnIdiomsPage),
  ],
})
export class LearnIdiomsPageModule {}
