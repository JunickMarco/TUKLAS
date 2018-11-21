import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BaybayinIntroPage } from './baybayin-intro';

@NgModule({
  declarations: [
    BaybayinIntroPage,
  ],
  imports: [
    IonicPageModule.forChild(BaybayinIntroPage),
  ],
})
export class BaybayinIntroPageModule {}
