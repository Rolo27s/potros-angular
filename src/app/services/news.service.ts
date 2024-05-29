import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface News {
  id: number;
  titulo: string;
  cuerpo: string;
  fecha: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = 'http://127.0.0.1:8000/noticias/'; // url local. Modificar para producción.

  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.apiUrl);
  }
}
