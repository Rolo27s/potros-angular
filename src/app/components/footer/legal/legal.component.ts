import { Component } from '@angular/core';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [],
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.css'
})
export class LegalComponent {
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
