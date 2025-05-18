// Shrink logo on scroll
window.addEventListener("scroll", function () {
  const header = document.getElementById("logoHeader");
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});