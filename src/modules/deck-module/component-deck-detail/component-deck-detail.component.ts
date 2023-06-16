import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Deck {
  id: string;
  cards: string[];
  name: string;
}

@Component({
  selector: 'app-component-deck-detail',
  templateUrl: './component-deck-detail.component.html',
  styleUrls: [],
})
export class ComponentDeckDetailComponent implements OnInit {
  data: any = {};
  selectedDeckId: string = '';
  selectedDeck: Deck | undefined;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.selectedDeckId = params.get('id')!;
      this.http
        .get<Deck>(`http://localhost:3000/api/decks/${this.selectedDeckId}`)
        .subscribe((response) => {
          this.selectedDeck = response;
          console.log('Item', this.selectedDeck);
        });
    });
  }
}
