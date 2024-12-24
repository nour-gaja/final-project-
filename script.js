const increaseBtn = document.querySelector('.increase-btn');
const decreaseBtn = document.querySelector('.decrease-btn');
const quantitySpan = document.querySelector('.quantity');
const priceElement = document.querySelector('.product-price');
const articleCount = document.querySelector('.article-count');
const totalPriceElement = document.querySelector('.total-price');

let quantity = 1;
let price = 50000; 


function updateCartSummary() {
  articleCount.textContent = quantity + " article";

  const totalPrice = quantity * price;
  totalPriceElement.textContent = totalPrice + " TND";
}


increaseBtn.addEventListener('click', () => {
  quantity++;
  quantitySpan.textContent = quantity;
  updateCartSummary();
});

decreaseBtn.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    quantitySpan.textContent = quantity;
    updateCartSummary();
  }
});


updateCartSummary();