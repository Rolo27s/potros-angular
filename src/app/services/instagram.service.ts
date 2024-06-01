import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Instagram {
  id: number;
  imagen: string;
  fecha: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  private URL_BASE = 'http://127.0.0.1:8000'
  private apiUrl = this.URL_BASE + '/instagram/'; // url local. Modificar para producción.

  constructor(private http: HttpClient) { }

  getInstagram(): Observable<Instagram[]> {
    return this.http.get<Instagram[]>(this.apiUrl);
  }
}
