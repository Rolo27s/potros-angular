// campo.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-campo',
  standalone: true,
  templateUrl: './campo.component.html',
  styleUrls: ['./campo.component.css'],
  imports: [CommonModule]
})
export class CampoComponent {
  modalActive: boolean = false;
  modalImageUrl: string = '';

  showImage(imageUrl: string): void {
    this.modalImageUrl = imageUrl;
    this.modalActive = true;
  }

  hideImage(): void {
    this.modalActive = false;
  }
}
