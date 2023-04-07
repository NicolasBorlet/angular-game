import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-card-list',
  templateUrl: './component-card-list.component.html',
  styleUrls: [],
})
export class ComponentCardListComponent implements OnInit {
  data: any[] = [];
  newCard: any = {};
  cards: any[] = [];
  selectedCard: any;
  token: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.token = localStorage.getItem('token');

    if (this.token) {
      this.http
        .get<any[]>('http://localhost:3000/api/cards')
        .subscribe((response) => {
          this.data = response;
          console.log(this.data);
        });
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  onSubmit() {
    if (this.token) {
      this.http
        .put('http://localhost:3000/api/cards', this.newCard)
        .subscribe((response) => {
          this.data.push(response);
          this.newCard = {};
          window.location.reload();
        });
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  deleteCard(id: string) {
    if (this.token) {
      const url = `http://localhost:3000/api/cards/${id}`;
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
      this.router.navigateByUrl(`/card/${id}`);
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
