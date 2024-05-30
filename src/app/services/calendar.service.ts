import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Calendar {
  id: number;
  fecha: string;
  local: string;
  logo_local: string;
  hora: string;
  logo_visitante: string;
  visitante: string;
  jornada: string;
}

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private URL_BASE = 'http://127.0.0.1:8000'
  private apiUrl = this.URL_BASE + '/calendario/'; // url local. Modificar para producción.

  constructor(private http: HttpClient) { }

  getCalendar(): Observable<Calendar[]> {
    return this.http.get<Calendar[]>(this.apiUrl);
  }

}
