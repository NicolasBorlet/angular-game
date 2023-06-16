import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentDeckListComponent } from './component-deck-list/component-deck-list.component';
import { FormsModule } from '@angular/forms';
import { DeckComponent } from './deck.component';
import { DeckModuleRootingModule } from './deck-module-rooting.module';
import { ComponentDeckDetailComponent } from './component-deck-detail/component-deck-detail.component';
import { ComponentDeckItemComponent } from './component-deck-item/component-deck-item.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './deck-interceptor.interceptor';
import { ComponentAddDeckComponent } from './component-add-deck/component-add-deck.component';

@NgModule({
  declarations: [
    ComponentDeckListComponent,
    DeckComponent,
    ComponentDeckDetailComponent,
    ComponentDeckItemComponent,
    ComponentAddDeckComponent,
  ],
  imports: [CommonModule, FormsModule, CommonModule, DeckModuleRootingModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },
  ],
})
export class DeckModule {}
