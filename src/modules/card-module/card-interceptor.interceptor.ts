import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // Gérer la réponse ici
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          switch (error.status) {
            case 400:
              errorMessage = `Erreur 400: Requête incorrecte`;
              break;
            case 401:
              errorMessage = `Erreur 401: Non autorisé`;
              break;
            case 404:
              errorMessage = `Erreur 404: Ressource non trouvée`;
              break;
            default:
              errorMessage = `Erreur inattendue: ${error.message}`;
              break;
          }
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}
