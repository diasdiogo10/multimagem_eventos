import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-ligeirinho',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './ligeirinho.component.html',
  styleUrl: './ligeirinho.component.scss'
})
export class LigeirinhoComponent {

}
