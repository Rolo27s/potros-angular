import { Component, OnInit } from '@angular/core';
import { NewsService, News } from '../../services/news.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticias',
  standalone: true,
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
  imports: [CommonModule]
})
export class NoticiasComponent implements OnInit {
  news!: News;



  newsList: News[] = [];
  selectedNews: News | undefined;

  constructor(private readonly route: ActivatedRoute, private readonly newsService: NewsService) { }

  ngOnInit(): void {
    // Servicio completo
    this.newsService.getNews().subscribe({
      next: (data: News[]) => {
        this.newsList = data;
      },
      error: error => {
        console.error('Error fetching news, using default data', error);
      }
    });

    // Serivico local con filtro por id
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.newsService.getNews().subscribe({
        next: (data: News[]) => {
          this.newsList = data;

          if (id) {
            // Filtrar la lista de noticias para encontrar la que coincida con el ID
            this.selectedNews = this.newsList.find(news => news.id === +id);
            // Hacer scroll hacia la noticia seleccionada
            if (this.selectedNews) {
              const element = document.getElementById(`news-${this.selectedNews.id}`);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }
          }
        },
        error: error => {
          console.error('Error fetching news, using default data', error);
        }
      });
      
      
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

}
