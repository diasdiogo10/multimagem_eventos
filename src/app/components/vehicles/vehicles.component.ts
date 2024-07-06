import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgOptimizedImage],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class VehiclesComponent {}
