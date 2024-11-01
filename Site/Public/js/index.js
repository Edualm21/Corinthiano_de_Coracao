let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.card');
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Volta para o último slide
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0; // Volta para o primeiro slide
    }

    const sliderContainer = document.querySelector('.slider-container');
    const offset = -currentIndex * 100; // Calcula o deslocamento
    sliderContainer.style.transform = `translateX(${offset}%)`;
}
