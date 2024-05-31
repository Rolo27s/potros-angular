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
  private URL_BASE = 'http://127.0.0.1:8000';
  calendar!: Calendar;

  getURLBASE(): string {
    return this.URL_BASE;
  }

  calendarList: Calendar[] = [];
  selectedNews: Calendar | undefined;

  defaultNewsList: Calendar[] = [
    {
      id: 1,
      fecha: '2024-06-01',
      local: 'Equipo A',
      logo_local: 'imagenes/calendario/logo1.png',
      hora: '09:00',
      logo_visitante: 'imagenes/calendario/logo2.png',
      visitante: 'Equipo B',
      jornada: 'Jornada-1'
    },
    {
      id: 2,
      fecha: '2024-06-02',
      local: 'Equipo C',
      logo_local: 'imagenes/calendario/logo3.png',
      hora: '16:00',
      logo_visitante: 'imagenes/calendario/logo4.png',
      visitante: 'Equipo D',
      jornada: 'Jornada-2'
    }
  ];

  constructor(private route: ActivatedRoute, private calendarService: CalendarService) { }

  ngOnInit(): void {
    // Servicio completo
    this.calendarService.getCalendar().subscribe({
      next: (data: Calendar[]) => {
        this.calendarList = data;
      },
      error: error => {
        console.error('Error fetching news, using default data', error);
        this.calendarList = this.defaultNewsList;
      }
    });

  }

  getImageUrl(imagePath: string): string {
    return `${this.URL_BASE}${imagePath}`;
  }

}
