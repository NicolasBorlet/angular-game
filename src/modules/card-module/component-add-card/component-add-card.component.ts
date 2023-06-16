import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

const f = FormGroup;

@Component({
  selector: 'app-component-add-card',
  templateUrl: './component-add-card.component.html',
})
export class ComponentCardComponent implements OnInit {
  data: any[] = [];
  newCard: any = {};
  cards: any[] = [];
  selectedCard: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<any[]>('http://localhost:3000/api/cards')
      .subscribe((response) => {
        this.data = response;
        console.log(this.data);
      });
  }

  onSubmit() {
    if (this.newCard.value <= 10 && this.newCard.value > 0) {
      this.http
        .put('http://localhost:3000/api/cards', this.newCard)
        .subscribe((response) => {
          this.data.push(response);
          this.newCard = {};
        });
    } else {
      alert('La valeur doit être inférieure ou égale à 10');
    }
  }

  deleteCard(id: string) {
    const url = `http://localhost:3000/api/cards/${id}`;
    return this.http.delete(url).subscribe(() => {
      console.log(id);
      // this.cards = this.cards.filter(card => card.id !== id);
      // window.location.reload();
    });
  }
}
