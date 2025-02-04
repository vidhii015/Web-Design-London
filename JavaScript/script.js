// header js

const sidebar = document.getElementById("sidebar");
const nav = document.getElementsByTagName("nav")[0];
const a = document.querySelectorAll("nav a");
console.log(a);

sidebar.addEventListener("click", () => {
  // Change sidebar icon color
  sidebar.classList.toggle("text-transparent");

  // Toggling opacity
  nav.classList.toggle("opacity-0");
});

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

// our services js

const icons = document.querySelectorAll(".our-services .icons .icon");
const webDesign = document.querySelector(".our-services .web-design");
const eCommerce = document.querySelector(".our-services .e-commerce");
const seo = document.querySelector(".our-services .SEO");
const hosting = document.querySelector(".our-services .hosting");
const graphicDesign = document.querySelector(".our-services .graphic-design");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    // Remove 'icon-active' class from all icons
    icons.forEach((i) => i.classList.remove("icon-active"));

    // Add 'icon-active' class to the clicked icon
    icon.classList.add("icon-active");
    // Remove 'hidden' class from all
    webDesign.classList.add("hidden");
    eCommerce.classList.add("hidden");
    seo.classList.add("hidden");
    hosting.classList.add("hidden");
    graphicDesign.classList.add("hidden");
  });
});

icons[0].addEventListener("click", () => webDesign.classList.toggle("hidden"));
icons[1].addEventListener("click", () => eCommerce.classList.toggle("hidden"));
icons[2].addEventListener("click", () => seo.classList.toggle("hidden"));
icons[3].addEventListener("click", () => hosting.classList.toggle("hidden"));
icons[4].addEventListener("click", () =>
  graphicDesign.classList.toggle("hidden")
);

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

// our bespoke websites slider js

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
