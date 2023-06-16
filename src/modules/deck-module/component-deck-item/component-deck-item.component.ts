import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-deck-item',
  templateUrl: './component-deck-item.component.html',
  styleUrls: [],
})
export class ComponentDeckItemComponent {
  @Input() item: any;
}
