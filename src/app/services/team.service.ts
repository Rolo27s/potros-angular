import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Team {
  id: number;
  foto_jugador: string;
  nombre_jugador: string;
  dorsal: string;
  posicion: string;
  estadistica1: string;
  estadistica2: string;
  edad: number;
  experiencia: number;
  pais: string;
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private URL_BASE = 'https://fuengirolapotros.up.railway.app/home'
  private apiUrl = this.URL_BASE + '/equipo/';

  constructor(private http: HttpClient) { }

  getTeam(): Observable<Team[]> {
    return this.http.get<Team[]>(this.apiUrl);
  }

}
