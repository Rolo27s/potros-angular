import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacidad',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './privacidad.component.html',
  styleUrls: ['./privacidad.component.css']
})
export class PrivacidadComponent implements OnInit {
  privacyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cookieService: CookieService,
    private router: Router
  ) {
    this.privacyForm = this.fb.group({
      'cookies-esenciales': [''],
      'cookies-de-rendimiento': [''],
      'cookies-de-publicidad': [''],
      'cookies-de-redes-sociales': ['']
    });
  }

  ngOnInit(): void {
    this.setInitialCookies();
    this.loadCookiesIntoForm();
  }

  setInitialCookies() {
    this.setCookieIfNotExists('cookies-esenciales', 'aceptadas');
    this.setCookieIfNotExists('cookies-de-rendimiento', 'denegadas');
    this.setCookieIfNotExists('cookies-de-publicidad', 'permitidas');
    this.setCookieIfNotExists('cookies-de-redes-sociales', 'aceptadas');
  }

  loadCookiesIntoForm() {
    this.privacyForm.patchValue({
      'cookies-esenciales': this.getCookieValue('cookies-esenciales'),
      'cookies-de-rendimiento': this.getCookieValue('cookies-de-rendimiento'),
      'cookies-de-publicidad': this.getCookieValue('cookies-de-publicidad'),
      'cookies-de-redes-sociales': this.getCookieValue('cookies-de-redes-sociales')
    });
  }

  setCookieIfNotExists(name: string, value: string) {
    if (!this.cookieService.check(name)) {
      this.cookieService.set(name, value);
    }
  }

  getCookieValue(name: string): string {
    return this.cookieService.get(name) ?? '';
  }

  updateCookie(name: string, value: string) {
    this.cookieService.set(name, value);
  }

  submitForm() {
    // Update cookies based on form values
    Object.keys(this.privacyForm.value).forEach((key) => {
      this.updateCookie(key, this.privacyForm.value[key]);
    });

    // Redirigir a la página principal
    this.router.navigate(['/']).then(() => {
      console.log("Form de cookies enviado y redirigido a la página principal");
    }).catch((error) => {
      console.error("Error al redirigir:", error);
    });
  }
}
