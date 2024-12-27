// header js

const sidebar = document.getElementById("sidebar");
const nav = document.getElementsByTagName("nav")[0];

sidebar.addEventListener("click", () => {
  // Change sidebar icon color
  sidebar.classList.toggle("text-transparent");

  // Toggling right position, opacity, and visibility for smooth transition
  nav.classList.toggle("opacity-0");
});

// our services js

const i = document.querySelectorAll(".our-services .icons i");

function changeSlide() {
  i.forEach((icon) => {
    icon.classList.add(
      "bg-gradient-to-br",
      "from-[var(--gradient-color-1)]",
      " from-10%",
      "via-[var(--gradient-color-2)]",
      "via-40%",
      " to-[var(--gradient-color-4)]",
      "to-100%",
      "text-white"
    );
  });
}
