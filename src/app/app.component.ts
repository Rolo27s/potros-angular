import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, provideRouter, RouterModule } from '@angular/router';
import { routes } from './app.routes';

// Import your components
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { CookieModalComponent } from './components/cookie-modal/cookie-modal.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CookieModalComponent,
    // Add RouterOutlet for routing
    RouterOutlet,
    RouterLink,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CookieService]
})
export class AppComponent {
  title = 'potros-angular';

  // Configure routing outside the component class (recommended)
  static readonly bootstrap = [provideRouter(routes)]; // Removed `export default`
}
