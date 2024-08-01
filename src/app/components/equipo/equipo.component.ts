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
  private URL_BASE = 'https://fuengirolapotros.up.railway.app';
  team!: Team;

  getURLBASE(): string {
    return this.URL_BASE;
  }

  teamList: Team[] = [];

  defaultTeamList: Team[] = [
    {
      id: 1,
      foto_jugador: "/assets/perfil-vacio.jpg",
      nombre_jugador: "Jugador 1",
      dorsal: "Dorsal 1",
      posicion: "Posicion 1",
      estadistica1: "Stat 1",
      estadistica2: "Stat 2",
      edad: 24,
      experiencia: 2,
      pais: "España"
    },
    {      
      id: 2,
      foto_jugador: "/assets/perfil-vacio.jpg",
      nombre_jugador: "Jugador 2",
      dorsal: "Dorsal 2",
      posicion: "Posicion 2",
      estadistica1: "Stat 1",
      estadistica2: "Stat 2",
      edad: 24,
      experiencia: 2,
      pais: "España"
    }
  ];

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    // Servicio completo
    this.teamService.getTeam().subscribe({
      next: (data: Team[]) => {
        this.teamList = data;
      },
      error: error => {
        console.error('Error fetching team, using default data', error);
        this.teamList = this.defaultTeamList;
      }
    });

  }

  getImageUrl(imagePath: string): string {
    return `${this.URL_BASE}${imagePath}`;
  }

}
