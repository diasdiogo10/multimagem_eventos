import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { RouterLink, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink, 
    RouterOutlet,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
