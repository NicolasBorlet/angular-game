import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ComponentCardItemComponent } from '../component-card-item/component-card-item.component'

const f = FormGroup;

@Component({
  selector: 'app-component-card',
  templateUrl: './component-card.component.html',
  styleUrls: ['./component-card.component.scss']
})
export class ComponentCardComponent implements OnInit {
  data: any[] = [];
  newCard: any = {};
  cards: any[] = [];
  selectedCard: any = null;

  constructor(private http: HttpClient) { }

ngOnInit() {
  this.http.get<any[]>('http://localhost:3000/api/cards')
  .subscribe(response => {
  this.data = response;
  console.log(this.data);
  });
}

onSubmit() {
  this.http.put('http://localhost:3000/api/cards', this.newCard)
  .subscribe(response => {
  this.data.push(response);
  this.newCard = {};
  });
}

deleteCard(id: string) {
  const url = `http://localhost:3000/api/cards/${id}`;
  return this.http.delete(url).subscribe(() => {
    console.log(id);
  // this.cards = this.cards.filter(card => card.id !== id);
  // window.location.reload();
  });
}

showDetails(card: any) {
  this.selectedCard = card;
  }
}
