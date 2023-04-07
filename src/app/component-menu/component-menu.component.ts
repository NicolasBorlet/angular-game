import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-component-menu',
  templateUrl: './component-menu.component.html',
  styleUrls: ['./component-menu.component.scss'],
})
export class ComponentMenuComponent {
  token: string | null = localStorage.getItem('token');

  disconnect() {
    localStorage.removeItem('token');
    this.token = null;
  }
}
