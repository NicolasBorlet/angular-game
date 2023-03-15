import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

const f = FormGroup;

@Component({
  selector: 'app-component-card-list',
  templateUrl: './component-card-list.component.html',
  styleUrls: ['./component-card-list.component.scss']
})

export class ComponentCardListComponent implements OnInit {
  data: any[] = [];
  newCard: any = {};
  cards: any[] = [];
  selectedCard: any;

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