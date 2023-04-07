import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentDeckListComponent } from './component-deck-list/component-deck-list.component';
import { FormsModule } from '@angular/forms';
import { DeckComponent } from './deck.component';
import { DeckModuleRootingModule } from './deck-module-rooting.module';

@NgModule({
  declarations: [ComponentDeckListComponent, DeckComponent],
  imports: [CommonModule, FormsModule, CommonModule, DeckModuleRootingModule],
})
export class DeckModule {}
