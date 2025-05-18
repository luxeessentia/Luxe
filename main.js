// Header Shrink Effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

// Mobile Menu Toggle
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('active');
});

// Product Carousel
const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
    let currentIndex = 0;
    const items = carousel.querySelectorAll('.product-item');
    const itemCount = items.length;
    
    function showItem(index) {
        items.forEach((item, i) => {
            item.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }
    
    // Auto-rotate every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % itemCount;
        showItem(currentIndex);
    }, 5000);
});

// Sample product data
const products = {
    "Handmade Bags": [
        { name: "Cozy Woven Tote", price: 60, image: "images/tote.jpg" },
        // Add more products
    ],
    // Other categories
}