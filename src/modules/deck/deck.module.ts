import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentDeckListComponent } from './component-deck-list/component-deck-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ComponentDeckListComponent],
  imports: [CommonModule, FormsModule, CommonModule],
})
export class DeckModule {}
