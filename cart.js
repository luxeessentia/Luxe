document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.getElementById('cartItems');
  const cartTotalElem = document.querySelector('.cart-summary h2');

  function updateTotal() {
    let total = 0;
    const cartItems = cartItemsContainer.querySelectorAll('.cart-item');
    cartItems.forEach(item => {
      const priceText = item.querySelector('p').textContent.replace('$', '');
      const price = parseFloat(priceText);
      const qty = parseInt(item.querySelector('.quantity').value);
      total += price * qty;
    });
    cartTotalElem.textContent = `Cart Total: $${total.toFixed(2)}`;
  }

  cartItemsContainer.addEventListener('click', e => {
    const target = e.target;
    const cartItem = target.closest('.cart-item');
    if (!cartItem) return;

    const qtyInput = cartItem.querySelector('.quantity');

    if (target.classList.contains('increase')) {
      let qty = parseInt(qtyInput.value);
      qtyInput.value = qty + 1;
      updateTotal();
    }

    if (target.classList.contains('decrease')) {
      let qty = parseInt(qtyInput.value);
      if (qty > 1) {
        qtyInput.value = qty - 1;
        updateTotal();
      }
    }

    if (target.classList.contains('remove-item')) {
      cartItem.remove();
      updateTotal();
    }
  });

  // Initialize total on page load
  updateTotal();
});
