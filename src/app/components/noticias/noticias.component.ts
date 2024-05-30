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
  private URL_BASE = 'http://127.0.0.1:8000';
  news!: News;

  getURLBASE(): string {
    return this.URL_BASE;
  }

  newsList: News[] = [];
  selectedNews: News | undefined;

  // En caso de fallo de conexion con API, se usará esta información (consistencia)
  defaultNewsList: News[] = [
    {
      id: 1,
      titulo: "TRIPLE CORONA",
      cuerpo1: "Segunda cita de altura en una semana para los Fuengirola Potros, que en esta ocasión visitaron el José Barnés de Murcia para medirse contra los locales Cobras. Los actuales subcampeones de España vencieron por 41-0 a unos Potros que fueron de menos a más y dieron mejores sensaciones que en su último compromiso ante LG OLED Las Rozas Black Demons. Los ajustes a un lado y otro del balón realizados durante la semana dieron frutos desde el inicio, cerrando bien la carrera interior murciana durante todo el partido y utilizando un buen balance de carrera y pase en ataque para moverse con mejor fluidez que en otras citas.",
      cuerpo2: "En el segundo cuarto los Potros, ayer de blanco por primera vez en su historia, transmitieron sus peores sensaciones de la tarde. A pesar de que el cuarto comenzó con la intercepción de Manu Carrizosa y anulando el juego de carrera de Cobras, los Potros encontraban dificultades para replicar en el marcador. Salvadori, ya fuera por vía aérea o improvisando con la carrera encontraba el hueco en la malla defensiva malagueña que lidera el panameño Eduardo Simon. En este cuarto el espigado quarterback encontraría la zona de anotación con dos carreras, y conectó con su compatriota Alex Holmes para otros siete puntos más (27-0).",
      fecha: "2018-02-22",
      imagen: "/media/imagenes/noticias/img1.png"
    },
    {
      id: 2,
      titulo: "TRIPLE CORONA",
      cuerpo1: "Los Fuengirola Potros renovaron su título de campeones de la Liga Andaluza de Fútbol Americano tras vencer este domingo a Mairena Blue Devils por 19-14.",
      cuerpo2: "El partido dio comienzo con posesión para locales. A pesar de mover las cadenas con cierta fluidez, no lograban materializar ese avance en puntos por errores y pérdidas en la entrega del balón. Fueron los Blue Devils quienes inauguraron el marcador: un pase a la zona de anotación de Manu Ramírez voló por encima de la secundaria verdinegra para touchdown de José Luis Muñoz. El propio Muñoz acertó con la patada posterior a palos para poner el 0-7.",
      fecha: "2022-04-12",
      imagen: "/media/imagenes/noticias/img2.png"
    }
  ];

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit(): void {
    // Servicio completo
    this.newsService.getNews().subscribe({
      next: (data: News[]) => {
        this.newsList = data;
      },
      error: error => {
        console.error('Error fetching news, using default data', error);
        this.newsList = this.defaultNewsList;
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
          this.newsList = this.defaultNewsList;
        }
      });
      
      
    });

  }

  getImageUrl(imagePath: string): string {
    return `${this.URL_BASE}${imagePath}`;
  }

  // Se guarda el formato almacenado en la base de datos (saltos de linea)
  formatText(text: string): string {
    return text.replace(/\n/g, '<br>');
  }

}
