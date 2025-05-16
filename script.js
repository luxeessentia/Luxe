// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('active');
});

// Cart functionality
let cart = [];
const cartCountEl = document.getElementById('cart-count');

function addToCart(name, price) {
  const item = cart.find(i => i.name === name);
  if (item) {
    item.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  updateCartCount();
}

function updateCartCount() {
  const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
  cartCountEl.textContent = totalQty;
}

// Bind all buttons
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.previousElementSibling?.alt || 'Item';
    const price = parseFloat(btn.getAttribute('data-price') || '0');
    addToCart(name, price);
  });
});
