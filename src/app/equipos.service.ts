import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; 
import { Equipo } from './_Interface/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

    configUrl = 'https://api-mi-Liga.now.sh/api/equipos'
  
    constructor( private http : HttpClient ) { }

    arrEquipos: Array<Equipo>;
  
    getEquipos() {
  
      return this.http.get<Equipo>(this.configUrl)
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

    getNombreEquipo(key)   {

      return this.getEquipos()
            .subscribe(
              (data) => {
                let tmpData = {...data};

                for(let value in tmpData){
                  
                  if(tmpData[value].id  == key) {
                    
                    return tmpData[value].nombre;
                  }

                }
              }
            );
    }
}
