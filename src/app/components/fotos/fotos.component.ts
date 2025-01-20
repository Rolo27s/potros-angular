import { Component, OnInit } from '@angular/core';
import { InstagramService, Instagram } from '../../services/instagram.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fotos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
  private URL_BASE = '';
  instagramList: Instagram[] = [];
  defaultInstagramList: Instagram[] = [
    {
      id: 1,
      imagen: "/assets/images/instagram/calendarJ120250120.png",
      fecha: "2025-01-12",
      descripcion: "Calendario Jornada 1"
    }
  ];

  modalActive: boolean = false;
  modalImageUrl: string = '';

  constructor(private instagramService: InstagramService) { }

  ngOnInit(): void {
    this.instagramService.getInstagram().subscribe({
      next: (data: Instagram[]) => {
        this.instagramList = data;
      },
      error: error => {
        console.error('Error fetching Instagram data, using default data', error);
        this.instagramList = this.defaultInstagramList;
      }
    });
  }

  getURLBASE(): string {
    return this.URL_BASE;
  }

  getImageUrl(imagePath: string): string {
    return `${this.URL_BASE}${imagePath}`;
  }

  showImage(imageUrl: string): void {
    this.modalImageUrl = imageUrl;
    this.modalActive = true;
  }

  hideImage(): void {
    this.modalActive = false;
  }
}
