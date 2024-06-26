import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-privacidad',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './privacidad.component.html',
  styleUrls: ['./privacidad.component.css']
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

  getCookieValue(name: string): string {
    return this.cookieService.get(name) ?? this.cookies.find(c => c.categoria === name)?.estado ?? '';
  }

  updateCookie(name: string, event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.cookieService.set(name, value);
  }

  submitForm(event: Event) {
    event.preventDefault(); // Prevenir la recarga de la página

    const form = document.getElementById('cookie-form') as HTMLFormElement;
    if (form) {
      const formData = new FormData(form);
      formData.forEach((value, name) => {
        this.updateCookie(name, { target: { value: String(value) } } as unknown as Event);
      });
    }
  }
}
