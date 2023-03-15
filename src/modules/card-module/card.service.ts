import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private apiUrl = 'http://localhost:3000/api/cards';

  constructor(private http: HttpClient) { }

  getData(): Observable <any> {
    return this.http.get(this.apiUrl);
  }

  putData(data: any): Observable <any> {
    return this.http.post(this.apiUrl, data);
  }

  deleteCard(id: string): Observable<any> {
    const url = `http://localhost:3000/api/cards/${id}`;
    return this.http.delete(url);
  }

  updateCard(id: string, data: any): Observable<any> {
    const url = `http://localhost:3000/api/cards/${id}`;
    return this.http.put(url, data);
  }
}
