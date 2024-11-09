import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { SmoothScrollService } from '../../smooth-scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private smoothScrollService: SmoothScrollService) {}

  scrollToContactForm(): void {
    this.smoothScrollService.scrollToAnchor('contactForm');
  }

  scrollToAboutSection(): void {
    this.smoothScrollService.scrollToAnchor('about_section');
  }

  scrollToVehiclesSection(): void {
    this.smoothScrollService.scrollToAnchor('vehicles_section');
  }

  scrollToGallerySection(): void {
    this.smoothScrollService.scrollToAnchor('gallery_section');
  }
  scrollToFooter(): void {
    this.smoothScrollService.scrollToAnchor('footer');
  }
  scrollToServicesSection(): void {
    this.smoothScrollService.scrollToAnchor('services_section');
  }
  scrollToHeroSection(): void {
    this.smoothScrollService.scrollToAnchor('hero_section');
  }
  scrollToVehicleHeroSection(): void {
    this.smoothScrollService.scrollToAnchor('vehicle_hero_section');
  }
}
