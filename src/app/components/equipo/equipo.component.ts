import { Component, OnInit } from '@angular/core';
import { TeamService, Team } from '../../services/team.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css'
})
export class EquipoComponent implements OnInit {
  team!: Team;

  teamList: Team[] = [];

  constructor(private readonly teamService: TeamService) { }

  ngOnInit(): void {
    // Servicio completo
    this.teamService.getTeam().subscribe({
      next: (data: Team[]) => {
        this.teamList = data;
      },
      error: error => {
        console.error('Error fetching team, using default data', error);
      }
    });

  }

  // Las imágenes ahora estarán en la carpeta assets
  getImageUrl(imagePath: string): string {
    return `assets/images/equipo/${imagePath}`;  // Nueva ruta para las imágenes locales
  }

}
