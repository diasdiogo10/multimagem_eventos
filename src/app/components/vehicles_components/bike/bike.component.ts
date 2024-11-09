import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-bike',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './bike.component.html',
  styleUrl: './bike.component.scss',
})
export class BikeComponent {}
