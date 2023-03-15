import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './component-card-item.component.html',
  styleUrls: ['./component-card-item.component.scss']
})
export class ComponentCardItemComponent {
  @Input() item: any;
}