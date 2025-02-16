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
        // Agregar la propiedad edad calculada a cada jugador
        this.teamList = data.map(jugador => ({
          ...jugador,
          edad: this.calcularEdad(jugador.fecha_nacimiento)
        }));
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

  calcularEdad(fecha_nacimiento: string): number {
    // Convertir la fecha de nacimiento a un objeto Date
    const fechaNac = new Date(fecha_nacimiento);
    const fechaActual = new Date(); // Obtener la fecha actual
  
    // Calcular la diferencia de años
    let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
  
    // Ajustar si aún no ha cumplido años en el año actual
    const mesActual = fechaActual.getMonth();
    const diaActual = fechaActual.getDate();
    const mesNacimiento = fechaNac.getMonth();
    const diaNacimiento = fechaNac.getDate();
  
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
      edad--;
    }
  
    return edad;
  }
}

