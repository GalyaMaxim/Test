// Parallax
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    const leftImage = document.querySelector('.parallax-image.left');
    const rightImage = document.querySelector('.parallax-image.right');

    leftImage.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    rightImage.style.transform = `translateY(${scrollPosition * 0.3}px)`; 
});



// Slider
const dots = document.querySelectorAll('.dot');
const sliderContent = document.querySelector('.slider-content');
let currentSlide = 0;

function showSlide(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    
    sliderContent.style.transform = `translateX(-${index * 100}%)`;
    
    dots[index].classList.add('active');
}

function autoSlide() {
    currentSlide = (currentSlide + 1) % dots.length; 
    showSlide(currentSlide);
}

setInterval(autoSlide, 2000);




// Timer
let timeLeft = 600; 
    const timerDisplay = document.getElementById('timer');

    function updateTimer() {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;

        timerDisplay.textContent = 
            String(hours).padStart(2, '0') + ':' + 
            String(minutes).padStart(2, '0') + ':' + 
            String(seconds).padStart(2, '0');

        if (timeLeft > 0) {
            timeLeft--;
        } else {
            timeLeft = 600; 
        }
    }

    setInterval(updateTimer, 1000);