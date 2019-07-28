import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//ruttas
import { APP_ROUTING } from './app.routes';

import { ServiceModule } from './core/services/service.module';
//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonedaInfoComponent } from './paginas/monedas/moneda-info/moneda-info.component';
import { MonedaListaComponent } from './paginas/monedas/moneda-lista/moneda-lista.component';




@NgModule({
  declarations: [
    AppComponent,
    MonedaInfoComponent,
    MonedaListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    ServiceModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
