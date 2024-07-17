import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-boa-gira',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './boa-gira.component.html',
  styleUrl: './boa-gira.component.scss',
})
export class BoaGiraComponent {}
