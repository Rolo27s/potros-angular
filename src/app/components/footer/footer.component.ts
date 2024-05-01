import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { ClubComponent } from './club/club.component';
import { EquiposComponent } from './equipos/equipos.component';
import { FefaComponent } from './fefa/fefa.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ClubComponent, EquiposComponent, FefaComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}