import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface Card {
  id: string;
  name: string;
  value: number;
}

@Component({
  selector: 'app-component-add-deck',
  templateUrl: './component-add-deck.component.html',
})
export class ComponentAddDeckComponent {
  data: any[] = [];
  card: Card | undefined;
  token: string | null = null;
  selectedCard: Card[] = [];
  deckName: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.token = localStorage.getItem('token');

    if (this.token) {
      this.http
        .get<any[]>('http://localhost:3000/api/cards')
        .subscribe((response) => {
          this.data = response;
          console.log('Cartes liste', this.data);
        });
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  addToDeck(id: string) {
    const selectedCard = this.data.find((card) => card.id === id);

    if (selectedCard && !this.selectedCard.includes(selectedCard)) {
      if (this.selectedCard.length >= 6) {
        console.log('Le deck ne peut pas contenir plus de 6 cartes.');
        return;
      }

      this.selectedCard.push(selectedCard);
      console.log('Cartes sélectionnées', this.selectedCard);
    } else {
      console.log('La carte est déjà présente dans le deck.');
    }
  }

  removeFromDeck(id: string) {
    const selectedCard = this.data.find((card) => card.id === id);

    if (selectedCard) {
      this.selectedCard = this.selectedCard.filter(
        (card) => card.id !== selectedCard.id
      );
      console.log('Cartes sélectionnées', this.selectedCard);
    } else {
      console.log("La carte n'est pas présente dans le deck.");
    }
  }

addDeck(deckName: string) {
  if (this.token) {
    if (this.selectedCard.length > 6) {
      alert('Le deck ne peut pas contenir plus de 6 cartes.');
      return;
    }
    if (this.selectedCard.length < 4) {
      alert('Le deck doit contenir 5 cartes !')
      return
    }

    // Créer un objet deck avec la structure souhaitée
    const deck = {
      name: deckName,
      cards: this.selectedCard.map(card => card.id)
    };

    this.http
      .put('http://localhost:3000/api/decks', deck)
      .subscribe((response) => {
        this.data.push(response);
        this.selectedCard = [];
        window.location.reload();
      });
  } else {
    this.router.navigateByUrl('/login');
  }
}
}
