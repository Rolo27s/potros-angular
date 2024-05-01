import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Assuming your routes are defined here

// Import your components
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NoticiasComponent,
    CalendarioComponent,
    // Add RouterOutlet for routing
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'potros-angular';

  // Configure routing outside the component class (recommended)
  static readonly bootstrap = [provideRouter(routes)]; // Removed `export default`
}
