import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WotdPage } from './wotd';

@NgModule({
  declarations: [
    WotdPage,
  ],
  imports: [
    IonicPageModule.forChild(WotdPage),
  ],
})
export class WotdPageModule {}
