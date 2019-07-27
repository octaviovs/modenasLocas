
import { RouterModule, Routes } from '@angular/router';
import { MonedaInfoComponent } from './paginas/monedas/moneda-info/moneda-info.component';
import { MonedaListaComponent } from './paginas/monedas/moneda-lista/moneda-lista.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: MonedaListaComponent },
  { path: 'listar', component: MonedaInfoComponent },
  { path: 'listar/:id', component:  MonedaInfoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
