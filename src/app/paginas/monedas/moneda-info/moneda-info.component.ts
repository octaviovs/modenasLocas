import { Component, OnInit } from '@angular/core';
import { MondeasService } from '../../../core/services/modenas/mondea.service';
import { MonedaData } from '../../../core/interfaces/monedas/interfaceMonedaData';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moneda-info',
  templateUrl: './moneda-info.component.html',
  styleUrls: ['./moneda-info.component.css']
})
export class MonedaInfoComponent implements OnInit {

  moneda: MonedaData;
  fecha: Date;
  monedaValue;
  dollarValue: number = 0;
  mxn: number = 0;
  mxnNew: number = 0;
  constructor(public _mondeasService: MondeasService, public _activatedRoute:ActivatedRoute) {

    this.fecha = new Date();

    this._activatedRoute.params.subscribe((res)=>{
      this.getInitMoneda(res['id']);
    });


    this.setDollarValue();

  }

  getInitMoneda(id: number) {
    if (id > 0) {
      this._mondeasService.getMoneda(id).subscribe((data: MonedaData) => {
        this.moneda = data;
        this.monedaValue = data.quotes.USD.price;
      });
    }
  }
  setDollarValue() {
    this.dollarValue = this._mondeasService.getDollar();
  }

  setMxn() {
    if (this.mxn != null && this.mxn > 0) {
      this.mxnNew = (this.monedaValue * this.mxn) / this.dollarValue;
    } else {
      this.mxnNew = 0;
    }
  }


  ngOnInit() {
  }

}
