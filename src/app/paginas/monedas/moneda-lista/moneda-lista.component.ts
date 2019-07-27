import { Component, OnInit } from '@angular/core';
import { MondeasService } from '../../../core/services/modenas/mondea.service';
import { ArrayMondenaData } from '../../../core/interfaces/monedas/interfaceArrayData';




@Component({
  selector: 'app-moneda-lista',
  templateUrl: './moneda-lista.component.html',
  styleUrls: ['./moneda-lista.component.css']
})
export class MonedaListaComponent implements OnInit {

  public dataArrayMondenaData: Array<ArrayMondenaData>;

  constructor(public _mondeasService: MondeasService) {
    this.initMonedas();
  }

  initMonedas() {
    this._mondeasService.getListaMonenda().subscribe((res: Array<ArrayMondenaData>) => {
      this.dataArrayMondenaData = res.sort(
        (a, b) => {
          let x = a.name.toLowerCase();
          let y = b.name.toLowerCase();
          if (x < y) { return -1 }
          if (x > y) { return 1 }
          return 0;
        }
      );
    }, error => {
      console.log("Error");
    });
  }

  ngOnInit() {
  }

}
