import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cookie-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie-modal.component.html',
  styleUrls: ['./cookie-modal.component.css']
})
export class CookieModalComponent implements OnInit {
  showModal: boolean = true; // Mostrar el modal al cargar

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.checkInitialCookies();
  }

  checkInitialCookies() {
    const essentialCookie = this.cookieService.get('cookies-esenciales');
    const performanceCookie = this.cookieService.get('cookies-de-rendimiento');
    const advertisingCookie = this.cookieService.get('cookies-de-publicidad');
    const socialMediaCookie = this.cookieService.get('cookies-de-redes-sociales');

    if (!essentialCookie || !performanceCookie || !advertisingCookie || !socialMediaCookie) {
      this.showModal = true;
    } else {
      this.showModal = false;
    }
  }

  acceptAllCookies() {
    const cookieCategories = ['cookies-esenciales', 'cookies-de-rendimiento', 'cookies-de-publicidad', 'cookies-de-redes-sociales'];
    cookieCategories.forEach(category => this.cookieService.set(category, 'aceptadas'));
    this.showModal = false;
  }

  acceptEssentialCookies() {
    this.cookieService.set('cookies-esenciales', 'aceptadas');
    this.cookieService.set('cookies-de-rendimiento', 'denegadas');
    this.cookieService.set('cookies-de-publicidad', 'denegadas');
    this.cookieService.set('cookies-de-redes-sociales', 'denegadas');
    this.showModal = false;
  }

  reviewCookies() {
    this.showModal = false;
    this.router.navigate(['/privacidad']); // Redirigir al componente de configuración de privacidad
  }
}
