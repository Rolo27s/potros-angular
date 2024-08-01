import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  images: string[] = [
    'carousel1.jpg',
    'carousel2.jpg',
    'carousel3.jpg',
    'carousel4.jpg',
    'carousel5.jpg',
    'carousel6.jpg',
  ];
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // Cambio de imagen cada 5 segundos
  }

  getImagePath(imageName: string): string {
    return `assets/images/${imageName}`;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateCarouselTransform();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateCarouselTransform();
  }

  updateCarouselTransform() {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    carousel.style.transform = `translateX(${-this.currentIndex * 100}%)`;
  }
}
