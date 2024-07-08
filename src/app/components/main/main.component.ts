import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { NoticiasToMainComponent } from '../noticiasToMain/noticiasToMain.component';
import { NoticiasComponent } from '../noticias/noticias.component';
import { FotosComponent } from '../fotos/fotos.component';
import { CalendarioComponent } from '../calendario/calendario.component';
import { CalendarService, Calendar } from '../../services/calendar.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CarouselComponent, NoticiasToMainComponent, NoticiasComponent, FotosComponent, CalendarioComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'] // corrected from styleUrl to styleUrls
})

export class MainComponent implements OnInit {
  private URL_BASE = 'https://fuengirolapotros.up.railway.app';
  calendar!: Calendar;

  calendarList: Calendar[] = [];

  defaultCalendarList: Calendar[] = [
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

  next_fecha!: string;
  next_local!: string;
  next_logo_local!: string;
  next_hora!: string;
  next_logo_visitante!: string;
  next_visitante!: string;
  next_jornada!: string;
  // Variable que representa si existe o no proximo partido. Por defecto no.
  next_existe: boolean = false;

  constructor(private calendarService: CalendarService) { }

  ngOnInit(): void {
    this.calendarService.getCalendar().subscribe({
      next: (data: Calendar[]) => {
        this.calendarList = data;
        this.setNextMatch();
      },
      error: error => {
        console.error('Error fetching calendar, using default data', error);
        this.calendarList = this.defaultCalendarList;
        this.setNextMatch();
      }
    });
  }

  getURLBASE(): string {
    return this.URL_BASE;
  }

  getImageUrl(imagePath: string): string {
    return `${this.URL_BASE}${imagePath}`;
  }

  setNextMatch(): void {
    const today = new Date();
    const upcomingMatch = this.calendarList
      .map(match => ({
        ...match,
        fecha: new Date(match.fecha)
      }))
      .filter(match => match.fecha >= today)
      .sort((a, b) => a.fecha.getTime() - b.fecha.getTime())[0];

    if (upcomingMatch) {
      this.next_existe = true;
      this.next_fecha = this.formatDate(upcomingMatch.fecha);
      this.next_local = upcomingMatch.local;
      this.next_logo_local = this.getImageUrl(upcomingMatch.logo_local);
      this.next_hora = upcomingMatch.hora;
      this.next_logo_visitante = this.getImageUrl(upcomingMatch.logo_visitante);
      this.next_visitante = upcomingMatch.visitante;
      this.next_jornada = upcomingMatch.jornada;
    } else {
      this.next_existe = false;
    }
  }

  formatDate(date: Date): string {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    let month_word = '';
    const spanish_months: string[] = ['', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    switch (month) {
      case '01':
        month_word = spanish_months[1];
        break;
      case '02':
        month_word = spanish_months[2];
        break;
      case '03':
        month_word = spanish_months[3];
        break;
      case '04':
        month_word = spanish_months[4];
        break;
      case '05':
        month_word = spanish_months[5];
        break;
      case '06':
        month_word = spanish_months[6];
        break;
      case '07':
        month_word = spanish_months[3];
        break;
      case '08':
        month_word = spanish_months[8];
        break;
      case '09':
        month_word = spanish_months[9];
        break;
      case '10':
        month_word = spanish_months[10];
        break;
      case '11':
        month_word = spanish_months[11];
        break;
      case '12':
        month_word = spanish_months[12];
        break;
      default:
        break;
    }

    const day = String(date.getDate()).padStart(2, '0');
    return `${day} de ${month_word}`;
  }
}
