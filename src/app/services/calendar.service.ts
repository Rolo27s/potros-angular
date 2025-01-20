import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Calendar {
  id: number;
  fecha: string;
  local: string;
  logo_local: string;
  marcador_local: number;
  hora: string;
  marcador_visitante: number;
  logo_visitante: string;
  visitante: string;
  jornada: string;
}

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private readonly jsonUrl = 'assets/data/calendario.json';

  constructor(private readonly http: HttpClient) { }

  getCalendar(): Observable<Calendar[]> {
    return this.http.get<Calendar[]>(this.jsonUrl);
  }

}
