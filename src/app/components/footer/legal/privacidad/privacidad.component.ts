import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-privacidad',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './privacidad.component.html',
  styleUrl: './privacidad.component.css'
})

export class PrivacidadComponent implements OnInit {

  cookies = [
    { categoria: 'cookies-esenciales', estado: 'aceptadas' },
    { categoria: 'cookies-de-rendimiento', estado: 'denegadas' },
    { categoria: 'cookies-de-publicidad', estado: 'permitidas' },
    { categoria: 'cookies-de-redes-sociales', estado: 'aceptadas' }
  ];

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.setInitialCookies();
  }

  setInitialCookies() {
    this.setCookieIfNotExists('cookies-esenciales', 'aceptadas');
    this.setCookieIfNotExists('cookies-de-rendimiento', 'denegadas');
    this.setCookieIfNotExists('cookies-de-publicidad', 'permitidas');
    this.setCookieIfNotExists('cookies-de-redes-sociales', 'aceptadas');
  }

  setCookieIfNotExists(name: string, value: string) {
    if (!this.cookieService.check(name)) {
      this.cookieService.set(name, value);
    }
  }

  updateCookie(name: string, event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.cookieService.set(name, value);
  }

  submitForm(event: Event) {
    event.preventDefault(); // Prevenir la recarga de la página

    // No necesitamos eliminar todas las cookies aquí
    // Solo actualizamos las que han cambiado en el formulario

    const form = document.getElementById('cookie-form') as HTMLFormElement;
    if (form) {
      const formData = new FormData(form);

      formData.forEach((value: { toString: () => any; }, name: any) => {
        this.updateCookie.bind(this)(name, value.toString());
      });
    }
  }
}
