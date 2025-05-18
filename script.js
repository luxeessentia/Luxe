// ====== Logo Shrink on Scroll ======
window.addEventListener('scroll', () => {
  const header = document.getElementById('logoHeader');
  if (window.scrollY > 50) {
    header.classList.add('shrunk');
  } else {
    header.classList.remove('shrunk');
  }
});

// ====== Simple Auto-Scroll for Carousels ======
// Each carousel div will auto-scroll by a small increment every 2 seconds
function autoScrollCarousel(carouselId, speed = 2, delay = 2000) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) return;

  setInterval(() => {
    // When near end, reset scroll to start
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
      carousel.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      carousel.scrollBy({ left: speed * carousel.clientWidth, behavior: 'smooth' });
    }
  }, delay);
}

window.addEventListener('DOMContentLoaded', () => {
  autoScrollCarousel('bagsCarousel', 1, 3000);
  autoScrollCarousel('techCarousel', 1, 3000);
  autoScrollCarousel('beautyCarousel', 1, 3000);
});

// ====== Hero Banner Text Rotation (optional fade effect) ======
const heroTexts = [
  '📦 GET $5 OFF YOUR FIRST ORDER WHEN YOU SIGN UP',
  'Handmade Bags',
  'Clothing',
  'Tech & Accessories',
  'Beauty/Makeup',
  'Jewelry & Accessories',
  'Footwear'
];
let heroIndex = 0;

function rotateHeroText() {
  const slider = document.getElementById('heroSlider');
  heroIndex = (heroIndex + 1) % heroTexts.length;
  slider.innerHTML = `<span>${heroTexts[heroIndex]}</span>`;
}

// If you prefer fading one phrase at a time (instead of marquee), uncomment below:
// setInterval(rotateHeroText, 4000);

// ====== Cart Icon Click (simple alert/demo) ======
document.getElementById('cartIcon').addEventListener('click', () => {
  alert('Cart icon clicked. (Cart functionality coming soon!)');
});