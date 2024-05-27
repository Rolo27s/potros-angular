import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-privacidad',
  standalone: true,
  imports: [],
  templateUrl: './privacidad.component.html',
  styleUrl: './privacidad.component.css'
})
export class PrivacidadComponent implements OnInit {
  // Estados de las cookies
  cookies = [
    { categoria: 'Cookies Esenciales', estado: 'Aceptadas' },
    { categoria: 'Cookies de Rendimiento', estado: 'Denegadas' },
    { categoria: 'Cookies de Publicidad', estado: 'Permitidas' },
    { categoria: 'Cookies de Redes Sociales', estado: 'Aceptadas' }
  ];

  ngOnInit(): void {
    this.cookies = [
      { categoria: 'Cookies Esenciales', estado: 'Aceptadas' },
      { categoria: 'Cookies de Rendimiento', estado: 'Denegadas' },
      { categoria: 'Cookies de Publicidad', estado: 'Permitidas' },
      { categoria: 'Cookies de Redes Sociales', estado: 'Aceptadas' }
    ];
    // Aquí puedes agregar lógica para establecer los valores de las cookies al inicio
    // Por ejemplo, puedes recuperar valores de cookies existentes y actualizar el estado
    // o puedes definir valores predeterminados para las cookies.
  }

  // Método para cambiar el estado de una cookie
  cambiarEstado(categoria: string, nuevoEstado: string): void {
    const cookie = this.cookies.find(c => c.categoria === categoria);
    if (cookie) {
      cookie.estado = nuevoEstado;
    }
  }
}