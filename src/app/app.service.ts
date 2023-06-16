import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  login(email: string, password: string): boolean {
    // Vérifier si les informations de connexion sont valides
    // Si oui, stocker le token dans le local storage et retourner true
    // Sinon, retourner false
    if (email === 'test@test.com' && password === 'test') {
      localStorage.setItem('token', 'my-token');
      return true;
    } else {
      return false;
    }
  }
}
