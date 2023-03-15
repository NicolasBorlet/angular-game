import { Component, Input, OnInit } from '@angular/core';

interface Card {
  id: string;
  name: string;
  value: string;
}
@Component({
  selector: 'app-component-card-detail',
  templateUrl: './component-card-detail.component.html',
  styleUrls: ['./component-card-detail.component.scss']
})
export class ComponentCardDetailComponent implements OnInit {
  @Input()
  selectedCard!: Card;

  constructor() {}

  cardSelectedSubscription: any;
  componentCardList: any;

  ngOnInit() {

  }
}
