// campo.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaComponent } from '../footer/legal/mapa/mapa.component';

@Component({
  selector: 'app-campo',
  standalone: true,
  templateUrl: './campo.component.html',
  styleUrls: ['./campo.component.css'],
  imports: [CommonModule, MapaComponent]
})
export class CampoComponent implements OnInit {
  modalActive: boolean = false;
  modalImageUrl: string = '';

  showImage(imageUrl: string): void {
    this.modalImageUrl = imageUrl;
    this.modalActive = true;
  }

  hideImage(): void {
    this.modalActive = false;
  }

  constructor() { }

  ngOnInit(): void {
    this.cargarMapa();
    window.onresize = () => this.cargarMapa();
  }

  cargarMapa(): void {
    const mapContainer = document.getElementById("map");
    const width = window.innerWidth;

    // Para un uso correcto de este componente es necesario registrar en google un API_KEY (Deuda técnica)
    // const mapaURL_KEY = `https://www.google.com/maps/embed/v1/place?key=TU_API_KEY&q=Complejo+Polideportivo+Municipal+Elola`;

    const mapaURL_BASE = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.354783249824!2d-4.632524326443683!3d36.54555764827135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72e23ee9e1dd6d%3A0x79acdd9fc024eb95!2sComplejo%20Polideportivo%20Municipal%20Elola!5e0!3m2!1ses!2ses!4v1708000287468!5m2!1ses!2ses`;

    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", mapaURL_BASE);
    iframe.setAttribute("width", width <= 600 ? "350" : "450");
    iframe.setAttribute("height", width <= 600 ? "350" : "450");
    iframe.setAttribute("style", "border:0;");
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");

    if (mapContainer) {
      mapContainer.innerHTML = "";
      mapContainer.appendChild(iframe);
    }
  }
}
