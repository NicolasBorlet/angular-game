import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
data: any = {};
selectedCardId: string = '';
selectedCard: Card | undefined;

constructor(private http: HttpClient, private route: ActivatedRoute) { }

ngOnInit() {
  this.route.paramMap.subscribe(params => {
  this.selectedCardId = params.get('id')!;
  this.http.get<Card>(`http://localhost:3000/api/cards/${this.selectedCardId}`)
  .subscribe(response => {
    this.selectedCard = response;
    console.log("Item", this.selectedCard);
    });
  });
}
}