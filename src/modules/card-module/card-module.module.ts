import { CardModuleRootingModule } from './card-module-rooting.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentCardComponent } from './component-card/component-card.component';
import { ComponentCardListComponent } from './component-card-list/component-card-list.component';
import { ComponentCardDetailComponent } from './component-card-detail/component-card-detail.component';
// import { ComponentCardListComponent } from './component-card-list/component-card-list.component';
import { ComponentCardItemComponent } from './component-card-item/component-card-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ComponentCardComponent,
    ComponentCardItemComponent,
    ComponentCardListComponent,
    ComponentCardDetailComponent
  ],
  imports: [
    CommonModule,
    CardModuleRootingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ComponentCardComponent]
})
export class CardModuleModule { }
