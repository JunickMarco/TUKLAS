import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IdiomPage } from './idiom';

@NgModule({
  declarations: [
    IdiomPage,
  ],
  imports: [
    IonicPageModule.forChild(IdiomPage),
  ],
})
export class IdiomPageModule {}
