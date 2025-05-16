// Cart sidebar toggle
const cartButton = document.getElementById('cart-button');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCartBtn = document.getElementById('close-cart');

cartButton.addEventListener('click', () => {
  cartSidebar.classList.add('active');
});

closeCartBtn.addEventListener('click', () => {
  cartSidebar.classList.remove('active');
});

// Hero sliding text logic
const slides = [
  "GET $5 OFF YOUR FIRST ORDER WHEN YOU SIGN UP!",
  "Handmade Bags & Purses",
  "Tech Accessories",
  "Trendy Phone Cases"
];

let slideIndex = 0;
const sliderText = document.querySelector('.slider-text');

function showSlide(index) {
  sliderText.style.opacity = 0;
  setTimeout(() => {
    sliderText.textContent = slides[index];
    sliderText.style.opacity = 1;
  }, 500);
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

setInterval(nextSlide, 3000); // slide every 3 seconds

// Initialize first slide on page load
showSlide(slideIndex);
