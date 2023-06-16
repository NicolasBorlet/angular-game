import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Deck {
  cards: string[];
  id: string;
  name: string;
}
@Component({
  selector: 'app-component-deck-list',
  templateUrl: './component-deck-list.component.html',
  styleUrls: [],
})
export class ComponentDeckListComponent {
  data: any[] = [];
  token: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.token = localStorage.getItem('token');

    if (this.token) {
      this.http
        .get<any[]>('http://localhost:3000/api/decks')
        .subscribe((response) => {
          this.data = response;
          console.log(this.data);
        });
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  deleteDeck(id: string) {
    if (this.token) {
      const url = `http://localhost:3000/api/decks/${id}`;
      return this.http.delete(url).subscribe(() => {
        // this.cards = this.cards.filter(card => card.id !== id);
        window.location.reload();
      });
    } else {
      this.router.navigateByUrl('/login');
      return undefined; // Ajouter une valeur de retour par défaut
    }
  }

  showDetails(id: string) {
    if (this.token) {
      const url = `http://localhost:3000/api/decks/${id}`;
      return this.http.get<Deck>(url).subscribe((response) => {
        this.router.navigateByUrl(`/decks/${id}`); // redirige l'utilisateur vers la page de détails
      });
    } else {
      this.router.navigateByUrl('/login');
      return undefined;
    }
  }
}
