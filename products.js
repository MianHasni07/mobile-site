// Update cart count
const cartCount = document.getElementById("cart-count");

// Load cart from localStorage or initialize
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count display
function updateCartCount() {
  cartCount.textContent = cart.length;
}
updateCartCount();

// Add to Cart Button
const addButtons = document.querySelectorAll(".add-cart-btn");

addButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    const id = card.dataset.id;
    const name = card.querySelector("h3").innerText;
    const price = parseFloat(card.querySelector(".price").innerText.replace('$',''));
    const img = card.querySelector("img").src;

    // Add product to cart
    const product = { id, name, price, img, quantity: 1 };

    // Check if product exists, increment quantity
    const existing = cart.find(item => item.id === id);
    if(existing){
      existing.quantity += 1;
    } else {
      cart.push(product);
    }

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update cart count
    updateCartCount();

    // Animate button feedback
    btn.innerText = "Added ✔";
    setTimeout(() => { btn.innerHTML = 'Add to Cart <i class="fas fa-cart-plus"></i>' }, 1000);
  });
});
