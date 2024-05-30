import { Component, OnInit } from '@angular/core';
import { NewsService, News } from '../../services/news.service';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from '../noticias/noticias.component';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-noticias-to-main',
  standalone: true,
  templateUrl: './noticiasToMain.component.html',
  styleUrls: ['./noticiasToMain.component.css'],
  imports: [CommonModule, RouterModule, NoticiasComponent]
})
export class NoticiasToMainComponent implements OnInit {
  private URL_BASE = 'http://127.0.0.1:8000';

  getURLBASE(): string {
    return this.URL_BASE;
  }

  newsList: News[] = [];

  // En caso de fallo de conexion con API, se usará esta información (consistencia)
  defaultNewsList: News[] = [
    {
      id: 1,
      titulo: "TRIPLE CORONA",
      cuerpo1: "Segunda cita de altura en una semana para los Fuengirola Potros ...",
      cuerpo2: "En el segundo cuarto los Potros, ayer de blanco por primera vez en su historia ...",
      fecha: "2018-02-22",
      imagen: "/media/imagenes/noticias/img1.png"
    },
    {
      id: 2,
      titulo: "TRIPLE CORONA",
      cuerpo1: "Los Fuengirola Potros renovaron su título de campeones de la Liga Andaluza de Fútbol Americano ...",
      cuerpo2: "El partido dio comienzo con posesión para los locales ...",
      fecha: "2022-04-12",
      imagen: "/media/imagenes/noticias/img2.png"
    }
  ];

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe({
      next: (data: News[]) => {
        this.newsList = data;
      },
      error: error => {
        console.error('Error fetching news, using default data', error);
        this.newsList = this.defaultNewsList;
      }
    });
  }

  getImageUrl(imagePath: string): string {
    return `${this.URL_BASE}${imagePath}`;
  }

  // Se guarda el formato almacenado en la base de datos (saltos de linea)
  formatText(text: string): string {
    return text.replace(/\n/g, '<br>');
  }

  // navegacion hasta la noticia seleccionada
  onSelectNews(id: number): void {
    this.router.navigate(['/noticia', id]);
  }

}
