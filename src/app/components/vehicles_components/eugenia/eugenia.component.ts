import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-eugenia',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './eugenia.component.html',
  styleUrl: './eugenia.component.scss',
})
export class EugeniaComponent {}
