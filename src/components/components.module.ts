import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { FlashCardComponent } from './flash-card/flash-card';
import { IonicModule } from "ionic-angular";
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [FlashCardComponent],
	imports: [ CommonModule, IonicModule ],
	exports: [FlashCardComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]	
})
export class ComponentsModule {}
