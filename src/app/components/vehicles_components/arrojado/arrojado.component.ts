import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-arrojado',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './arrojado.component.html',
  styleUrl: './arrojado.component.scss',
})
export class ArrojadoComponent {}
