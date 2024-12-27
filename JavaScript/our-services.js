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
