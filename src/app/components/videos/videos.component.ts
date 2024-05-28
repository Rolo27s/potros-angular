import { Component, HostListener, OnInit } from '@angular/core';
import { YouTubeService } from '../../services/youtube.service';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos: { url: SafeResourceUrl }[] = [];
  nextPageToken: string = '';
  loading: boolean = false;
  query: string = 'fefa spain'; // Palabras clave para la búsqueda

  // Acotamos el numero máximo de recarga de contenido a 4 veces para evitar scroll infinito
  maxReloads: number = 4;
  reloadCount: number = 0;

  // URL's de videos en caso de fallo de consumo de API de YT
  backupVideos: string[] = [
    'PPqHv6Zbj_M',
    'a1zo7Nnhu6g',
    'P3_UE3Gr8mc',
    'LfbUPKlNQso',
    'dCWIWNkw9Os',
    'BMl5kCs8wfw',
    'M5AdGMxbE_0',
    'A9CvL9GvGYk'
  ];

  constructor(private youTubeService: YouTubeService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // Intentar cargar videos desde la API de YouTube
    this.loadVideos();
  }

  loadVideos() {
    if (this.loading && this.backupVideos.length > 0 && this.reloadCount < this.maxReloads) {
      return;
    }
    this.loading = true;
    this.youTubeService.searchVideos(this.query, this.nextPageToken, 4).subscribe({
      next: data => {
        const sanitizedVideos = data.videos.map((video: any) => ({
          url: this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video.id.videoId}`)
        }));
        this.videos.push(...sanitizedVideos);
        this.nextPageToken = data.nextPageToken;

        // Incrementar el contador de recargas
        this.reloadCount++;

        this.loading = false;
      },
      error: error => {
        console.error('Error loading videos from YouTube API:', error);

        if (this.backupVideos.length > 0 && this.reloadCount < this.maxReloads) {
          // Si ocurre un error al cargar desde la API de YouTube, cargar videos de respaldo
          this.loadBackupVideos();
  
          // Incrementar el contador de recargas
          this.reloadCount++;
        }

        this.loading = false;
      }
    });
  }

  loadBackupVideos() {
    // Lista de videos de respaldo en caso de error
    const backupVideos = [
      'PPqHv6Zbj_M',
      'a1zo7Nnhu6g',
      'P3_UE3Gr8mc',
      'LfbUPKlNQso',
      'dCWIWNkw9Os',
      'BMl5kCs8wfw',
      'M5AdGMxbE_0',
      'A9CvL9GvGYk'
    ];
    // Convertir los IDs de los videos de respaldo en URLs seguras
    const sanitizedBackupVideos = backupVideos.map(videoId => ({
      url: this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`)
    }));
    // Agregar los videos de respaldo a la lista de videos
    this.videos.push(...sanitizedBackupVideos);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    // Verificar si el usuario ha llegado al final de la página
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // Cargar más videos al hacer scroll down
      this.loadVideos();
    }
  }
}
