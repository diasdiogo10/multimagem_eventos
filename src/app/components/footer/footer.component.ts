import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, RouterOutlet],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}
