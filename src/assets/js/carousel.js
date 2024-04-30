document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  const dots = document.querySelectorAll('.dot');

  let currentIndex = 0;

  function updateCarousel() {
    carousel.style.transform = `translateX(${-currentIndex * 25}%)`; // 100% / 4 slides = 25%

    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
      dot.style.backgroundColor = index === currentIndex ? '#FAB41E' : '#bbb';
    });
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % dots.length;
    updateCarousel();
  }

  function showPrevious() {
    currentIndex = (currentIndex - 1 + dots.length) % dots.length;
    updateCarousel();
  }

  function autoSlide() {
    showNext();
  }

  leftArrow.addEventListener('click', showPrevious);
  rightArrow.addEventListener('click', showNext);

  // Add click event listeners to dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  // Auto slide every 5 seconds
  setInterval(autoSlide, 5000);
});
