import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { ServicesComponent } from './components/services/services.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'sobre',
    component: AboutComponent,
  },
  {
    path: 'veiculos',
    component: VehiclesComponent,
  },
  {
    path: 'servicos',
    component: ServicesComponent,
  },
  {
    path: 'galeria',
    component: GalleryComponent,
  },
];
