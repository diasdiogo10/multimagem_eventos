import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FloribelaComponent } from './components/vehicles_components/floribela/floribela.component';
import { AgostinhaComponent } from './components/vehicles_components/agostinha/agostinha.component';
import { BalcaoBarComponent } from './components/vehicles_components/balcao-bar/balcao-bar.component';
import { BikeComponent } from './components/vehicles_components/bike/bike.component';
import { BoaGiraComponent } from './components/vehicles_components/boa-gira/boa-gira.component';
import { EugeniaComponent } from './components/vehicles_components/eugenia/eugenia.component';
import { LigeirinhoComponent } from './components/vehicles_components/ligeirinho/ligeirinho.component';
import { ArrojadoComponent } from './components/vehicles_components/arrojado/arrojado.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'floribela',
    component: FloribelaComponent,
  },
  {
    path: 'agostinha',
    component: AgostinhaComponent,
  },
  {
    path: 'balcao-bar',
    component: BalcaoBarComponent,
  },
  {
    path: 'bike',
    component: BikeComponent,
  },
  {
    path: 'boa&gira',
    component: BoaGiraComponent,
  },
  {
    path: 'eugenia',
    component: EugeniaComponent,
  },
  {
    path: 'ligeirinho',
    component: LigeirinhoComponent,
  },
  {
    path: 'arrojado',
    component: ArrojadoComponent,
  },
];
