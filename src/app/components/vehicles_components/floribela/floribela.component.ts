import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { RouterLink, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-floribela',
  standalone: true,
  imports: [RouterLink, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './floribela.component.html',
  styleUrl: './floribela.component.scss',
})
export class FloribelaComponent {}
