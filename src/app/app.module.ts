import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//ruttas
import { APP_ROUTING } from './app.routes';

import { ServiceModule } from './core/services/service.module';
//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FechaComponent } from './componentes/fecha/fecha.component';
import { MonedaInfoComponent } from './paginas/monedas/moneda-info/moneda-info.component';
import { MonedaListaComponent } from './paginas/monedas/moneda-lista/moneda-lista.component';
import { EncabezadoComponent } from './shared/encabezado/encabezado.component';



@NgModule({
  declarations: [
    AppComponent,
    FechaComponent,
    MonedaInfoComponent,
    MonedaListaComponent,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
