import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { BoaGiraComponent } from './components/boa-gira/boa-gira.component';

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
    path: 'servicos',
    component: ServicesComponent,
  },
  {
    path: 'galeria',
    component: GalleryComponent,
  },
  {
    path: 'boa&gira',
    component: BoaGiraComponent,
  },
];
