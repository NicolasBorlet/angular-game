import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentCardComponent } from './component-add-card/component-add-card.component';
import { ComponentCardListComponent } from './component-card-list/component-card-list.component';
import { ComponentCardDetailComponent } from './component-card-detail/component-card-detail.component';
import { ComponentCardItemComponent } from './component-card-item/component-card-item.component';
import { FormsModule } from '@angular/forms';
import { CardModuleRootingModule } from './card-module-rooting.module';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [
    CardComponent,
    ComponentCardComponent,
    ComponentCardItemComponent,
    ComponentCardListComponent,
    ComponentCardDetailComponent,
  ],
  imports: [CardModuleRootingModule, CommonModule, FormsModule],
  providers: [],
})
export class CardModule {}
