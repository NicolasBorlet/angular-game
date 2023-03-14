import { CardModuleRootingModule } from './card-module-rooting.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentCardComponent } from './component-card/component-card.component';



@NgModule({
  declarations: [
    ComponentCardComponent
  ],
  imports: [
    CommonModule,
    CardModuleRootingModule
  ],
  providers: [],
  bootstrap: [ComponentCardComponent]
})
export class CardModuleModule { }
