const slides = document.getElementsByClassName("slide"); // Get all the slide elements
const circles = document.getElementsByClassName("circle"); // Get all the circle elements
let currentSlide = 0; // Start from the first slide

// Function to show a specific slide based on the index
function showSlide(index) {
  // Reset all slides and circles by removing active classes
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    circles[i].classList.remove("active-circle");
  }

  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  // Add the 'active' class to the current slide and the 'active-circle' class to the corresponding circle
  slides[currentSlide].classList.add("active");
  circles[currentSlide].classList.add("active-circle");
}

// Function to move to the next slide
function nextSlide() {
  showSlide(currentSlide + 1);
}

// Function to move to the previous slide
function prevSlide() {
  showSlide(currentSlide - 1);
}

// Initially show the first slide
showSlide(currentSlide);

// Set up an interval to automatically move to the next slide every 3 seconds (3000ms)
setInterval(() => {
  nextSlide();
}, 3000);

// Attach event listeners to the buttons (optional if not using `onclick` in HTML)
document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);
