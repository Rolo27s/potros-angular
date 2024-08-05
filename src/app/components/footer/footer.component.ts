import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';

import { ClubComponent } from './club/club.component';
import { EquiposComponent } from './equipos/equipos.component';
import { FefaComponent } from './fefa/fefa.component';

// Parte legal
import { LegalComponent } from './legal/legal.component';


import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    ClubComponent, 
    EquiposComponent, 
    FefaComponent, 
    LegalComponent,
    RouterLink,
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterViewInit {
  @ViewChild('contenedorComponentes', { read: ViewContainerRef }) contenedorComponentes: ViewContainerRef | null = null;

  footerStyles: { [key: string]: string } = {
    'border-bottom': 'none' // Default: no border
  };

  constructor(private router: Router) { }

  ngOnInit() {
    // On init things. Empty by the moment.
  }

  ngAfterViewInit() {
    // contenedorComponentes is guaranteed to be initialized after view init
    this.cargarComponente(ClubComponent);
    this.updateSelectedLi(ClubComponent);
  }

  cargarComponente1() {
    this.cargarComponente(ClubComponent);
  }

  cargarComponente2() {
    this.cargarComponente(EquiposComponent);
  }

  cargarComponente3() {
    this.cargarComponente(FefaComponent);
  }

  private cargarComponente(componente: any) {
    if (this.contenedorComponentes) { // Check if ViewContainerRef is initialized
      this.contenedorComponentes.clear(); // Clear any existing component
      this.contenedorComponentes.createComponent(componente);

      // Update class on selected li element
      this.updateSelectedLi(componente);
    }
  }

  private updateSelectedLi(componente: any) {
    const selectedClass = 'footer-container-1-selected'; // Class for selected li

    // Remove selected class from all li elements
    const allLiElements = document.querySelectorAll('.footer-container-1 li');
    allLiElements.forEach(li => li?.classList?.remove(selectedClass));

    // Add selected class to the appropriate li based on component
    switch (componente) {
      case ClubComponent:
        document.querySelector('.footer-container-1-CLUB')?.classList?.add(selectedClass);
        break;
      case EquiposComponent:
        document.querySelector('.footer-container-1-EQUIPOS')?.classList?.add(selectedClass);
        break;
      case FefaComponent:
        document.querySelector('.footer-container-1-FEFA')?.classList?.add(selectedClass);
        break;
      default:
        document.querySelector('.footer-container-1-CLUB')?.classList?.add(selectedClass);
        break;
    }
  }

  // Metodo para scroll al header
  scrollToTop(): void {
    const headerElement = document.querySelector('app-header');
    if (headerElement) {
      headerElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}