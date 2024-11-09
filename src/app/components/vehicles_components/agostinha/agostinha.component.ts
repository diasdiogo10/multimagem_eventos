import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-agostinha',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './agostinha.component.html',
  styleUrl: './agostinha.component.scss'
})
export class AgostinhaComponent {

}
