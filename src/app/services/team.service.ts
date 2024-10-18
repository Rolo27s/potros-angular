import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Team {
  id: number;
  foto_jugador: string;
  nombre_jugador: string;
  dorsal: string;
  posicion: string;
  altura: string;
  peso: string;
  edad: number;
  experiencia: number;
  pais: string;
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private readonly jsonUrl = 'assets/data/equipo.json';

  constructor(private readonly http: HttpClient) { }

  getTeam(): Observable<Team[]> {
    return this.http.get<Team[]>(this.jsonUrl);
  }

}
