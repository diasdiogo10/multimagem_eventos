import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss',
})
export class VehiclesComponent {}
