import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { NoticiasToMainComponent } from '../noticiasToMain/noticiasToMain.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CarouselComponent, NoticiasToMainComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {

}