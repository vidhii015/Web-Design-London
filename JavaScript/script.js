// header js

const sidebar = document.getElementById("sidebar");
const nav = document.getElementsByTagName("nav")[0];
const a = document.querySelectorAll("nav a");
console.log(a);

sidebar.addEventListener("click", () => {
  sidebar.classList.toggle("text-transparent");

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
    icons.forEach((i) => i.classList.remove("icon-active"));

    icon.classList.add("icon-active");

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

function showSlide(index) {
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

  slides[currentSlide].classList.add("active");
  circles[currentSlide].classList.add("active-circle");
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

showSlide(currentSlide);

setInterval(() => {
  nextSlide();
}, 3000);

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);
