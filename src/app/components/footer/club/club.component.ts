import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-club',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './club.component.html',
  styleUrl: './club.component.css'
})
export class ClubComponent {

}
