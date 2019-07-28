


import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, filter } from 'rxjs/operators';
import { pipe } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MondeasService {
  API_MONEDA = 'https://api.coinmarketcap.com/v2/';
  constructor(public http: HttpClient) {


  }

  getListaMonenda() {
    return this.http.get(this.API_MONEDA + "listings/").pipe(
      map(resp => resp['data']
        .filter(
          (moneda) => {
            if (moneda.id % 2 == 0) return moneda
          }
        ))
    );
  }
  getMoneda(id: number) {

    return this.http.get(`${this.API_MONEDA}ticker/${id}/`).pipe(
      map(resp => resp['data'])
    );
  }

  getDollar() {
    //constante del dolar respecto al peso
    //return new Promise((resolve, reject) => {});
    /* return this.http.get(`https://api.exchangeratesapi.io/latest`).pipe(
       map( resp  => resp['data'])
     );
     */
    return 19.01;
  }

}
