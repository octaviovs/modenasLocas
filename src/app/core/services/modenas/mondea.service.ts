


import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, filter } from 'rxjs/operators';

import {API_MONEDA} from '../../../../environments/environment'
import { ArrayMondenaList } from '../../interfaces/monedas/interfaceMoneda';

@Injectable({
  providedIn: 'root'
})
export class MondeasService {

  constructor( public http: HttpClient ) { 

  }

  getListaMonenda() {
    return this.http.get(API_MONEDA+"listings/").pipe(
      map( resp  => resp['data'].
      filter(
        (moneda)=>{
          if(moneda.id % 2 == 0)
            return moneda
        }  
      ))
    );
  }
  getMoneda(id) {
    return this.http.get(API_MONEDA+"listings/").pipe(
      map( resp  => resp['data'].
      filter(
        (moneda)=>{
          if(moneda.id % 2 == 0)
            return moneda
        }  
      ))
    );
  }


}
