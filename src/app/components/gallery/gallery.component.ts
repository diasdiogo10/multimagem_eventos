import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NgOptimizedImage } from '@angular/common'


@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgOptimizedImage],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GalleryComponent {}
