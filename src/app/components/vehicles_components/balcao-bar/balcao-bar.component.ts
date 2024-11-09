import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-balcao-bar',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './balcao-bar.component.html',
  styleUrl: './balcao-bar.component.scss',
})
export class BalcaoBarComponent {}
