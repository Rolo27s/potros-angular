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
  private URL_BASE = 'http://127.0.0.1:8000';
  team!: Team;

  getURLBASE(): string {
    return this.URL_BASE;
  }

  teamList: Team[] = [];

  defaultTeamList: Team[] = [
    {
      id: 1,
      foto_jugador: "/media/imagenes/equipo/jugador1_UUQTUpn.png",
      nombre_jugador: "Jayden Reed",
      dorsal: "11",
      posicion: "WR",
      estadistica1: "5-11",
      estadistica2: "187",
      edad: 24,
      experiencia: 2,
      estado: "Michigan State"
    },
    {      
      id: 2,
      foto_jugador: "/media/imagenes/equipo/jugador2_lAn9S0H.png",
      nombre_jugador: "Carrington Valentine",
      dorsal: "37",
      posicion: "CB",
      estadistica1: "6-0",
      estadistica2: "189",
      edad: 22,
      experiencia: 2,
      estado: "Kentucky"
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
