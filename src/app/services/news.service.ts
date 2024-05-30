import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface News {
  id: number;
  titulo: string;
  cuerpo1: string;
  cuerpo2: string;
  fecha: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private URL_BASE = 'http://127.0.0.1:8000'
  private apiUrl = this.URL_BASE + '/noticias/'; // url local. Modificar para producción.

  

  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.apiUrl);
  }

}