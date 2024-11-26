//hamburger
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Image slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-img');

function showSlide(index, direction) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'slide-left', 'slide-right');
        if (i === index) {
            slide.classList.add('active');
            // Add direction-based classes for animations
            if (direction === 'left') {
                slide.classList.add('slide-right'); // Previous slide slides out to the left
            } else if (direction === 'right') {
                slide.classList.add('slide-left'); // Next slide slides in from the right
            }
        }
    });
}

function nextImage() {
    const previousSlide = currentSlide; // Store current slide for animation
    currentSlide = (currentSlide + 1) % slides.length; // Move to next slide
    showSlide(currentSlide, 'left'); // Show the next slide with left animation
}

function prevImage() {
    const previousSlide = currentSlide; // Store current slide for animation
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Move to previous slide
    showSlide(currentSlide, 'right'); // Show the previous slide with right animation
}

// Attach event listeners for next and previous buttons
document.getElementById('next').addEventListener('click', nextImage);
document.getElementById('prev').addEventListener('click', prevImage);