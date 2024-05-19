import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent implements OnInit {
  currentIndex = 0;

  ngOnInit() {
    this.initializeCarousel();
  }

  initializeCarousel() {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    const leftArrow = document.querySelector('.left-arrow') as HTMLElement;
    const rightArrow = document.querySelector('.right-arrow') as HTMLElement;
    const dots = document.querySelectorAll('.dot');

    const updateCarousel = () => {
      carousel.style.transform = `translateX(${-this.currentIndex * 25}%)`; // 100% / 4 slides = 25%

      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === this.currentIndex);
        (dot as HTMLElement).style.backgroundColor = index === this.currentIndex ? '#FAB41E' : '#bbb';
      });
    };

    const showNext = () => {
      this.currentIndex = (this.currentIndex + 1) % dots.length;
      updateCarousel();
    };

    const showPrevious = () => {
      this.currentIndex = (this.currentIndex - 1 + dots.length) % dots.length;
      updateCarousel();
    };

    const autoSlide = () => {
      showNext();
    };

    leftArrow.addEventListener('click', showPrevious);
    rightArrow.addEventListener('click', showNext);

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.currentIndex = index;
        updateCarousel();
      });
    });

    setInterval(autoSlide, 5000);
  }
}