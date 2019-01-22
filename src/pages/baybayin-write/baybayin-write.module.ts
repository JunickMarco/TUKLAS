import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BaybayinWritePage } from './baybayin-write';

@NgModule({
  declarations: [
    BaybayinWritePage,
  ],
  imports: [
    IonicPageModule.forChild(BaybayinWritePage),
  ],
})
export class BaybayinWritePageModule {}
