import { Component, OnInit } from '@angular/core';
import { CalendarService, Calendar } from '../../services/calendar.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css'
})
export class CalendarioComponent implements OnInit {
  calendar!: Calendar;
  calendarList: Calendar[] = [];
  selectedCalendar: Calendar | undefined;

  constructor(private readonly route: ActivatedRoute, private readonly calendarService: CalendarService) { }

  ngOnInit(): void {
    // Servicio completo
    this.calendarService.getCalendar().subscribe({
      next: (data: Calendar[]) => {
        this.calendarList = data;
      },
      error: error => {
        console.error('Error fetching calendar, using default data', error);
      }
    });

    // Creo que esto no hace falta porque es la navegacion por ID
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.calendarService.getCalendar().subscribe({
        next: (data: Calendar[]) => {
          this.calendarList = data;

          if (id) {
            // Filtrar la lista de noticias para encontrar la que coincida con el ID
            this.selectedCalendar = this.calendarList.find(calendar => calendar.id === +id);
            // Hacer scroll hacia la noticia seleccionada
            if (this.selectedCalendar) {
              const element = document.getElementById(`news-${this.selectedCalendar.id}`);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }
          }
        },
        error: error => {
          console.error('Error fetching calendar, using default data', error);
        }
      });
      
      
    });
  }

  getImageUrl(imagePath: string): string {
    return `${imagePath}`;  // Nueva ruta para las imágenes locales
  }

}
