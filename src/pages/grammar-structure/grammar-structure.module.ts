import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrammarStructurePage } from './grammar-structure';

@NgModule({
  declarations: [
    GrammarStructurePage,
  ],
  imports: [
    IonicPageModule.forChild(GrammarStructurePage),
  ],
})
export class GrammarStructurePageModule {}
