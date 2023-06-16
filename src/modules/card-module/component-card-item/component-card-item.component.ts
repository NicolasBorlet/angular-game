import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './component-card-item.component.html',
  styleUrls: [],
})
export class ComponentCardItemComponent {
  @Input() item: any;
}
