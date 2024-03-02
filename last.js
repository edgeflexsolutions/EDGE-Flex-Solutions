let slides = document.querySelectorAll('.slide-container');
let index = 0;
let interval;

// Function to show the next slide
function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

// Function to show the previous slide
function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

// Start automatic slide show
function startAutoSlide() {
    interval = setInterval(next, 3000); // Change 5000 to the desired interval in milliseconds (e.g., 5000 for 5 seconds)
}

// Stop automatic slide show
function stopAutoSlide() {
    clearInterval(interval);
}

// Start automatic slide show when the page loads
window.onload = startAutoSlide;

// Stop automatic slide show when the user interacts with the slides
slides.forEach(slide => {
    slide.addEventListener('mouseover', stopAutoSlide);
    slide.addEventListener('touchstart', stopAutoSlide);
});

// Continue automatic slide show when the user stops interacting with the slides
slides.forEach(slide => {
    slide.addEventListener('mouseout', startAutoSlide);
    slide.addEventListener('touchend', startAutoSlide);
});

// Continue automatic slide show if the user clicks on the arrow buttons
document.getElementById('prev').addEventListener('click', startAutoSlide);
document.getElementById('next').addEventListener('click', startAutoSlide);
