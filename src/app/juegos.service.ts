import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Juego } from './_Interface/juego';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  configUrl = 'https://api-mi-Liga.now.sh/api/juegos'

  constructor( private http : HttpClient ) { }

  getJugadores() {

    return this.http.get<Juego>(this.configUrl)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  private handleError (error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent){
      console.error ('An error occurred:' , error.error.message);
    } else {
      console.error (
        'Backend returned code $(error.status), ' + 'body was: ${error.error}'
      );
    }
      return throwError(
        'something bad happened ; please try again later.');

  };
}
