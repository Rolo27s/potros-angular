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
  newsList: News[] = [];

  constructor(private readonly newsService: NewsService, private readonly router: Router) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe({
      next: (data: News[]) => {
        this.newsList = data;
      },
      error: error => {
        console.error('Error fetching news, using default data', error);
      }
    });
  }

  // Las imágenes ahora estarán en la carpeta assets
  getImageUrl(imagePath: string): string {
    return `assets/images/noticias/${imagePath}`;  // Nueva ruta para las imágenes locales
  }

  // Se guarda el formato almacenado en la base de datos (saltos de linea)
  formatText(text: string): string {
    return text.replace(/\n/g, '<br>');
  }

  // Navegación hasta la noticia seleccionada
  onSelectNews(id: number): void {
    this.router.navigate(['/noticia', id]);
  }

}
