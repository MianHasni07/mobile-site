const cartTable = document.querySelector("#cart-table tbody");
const subtotalElem = document.getElementById("subtotal");
const shippingElem = document.getElementById("shipping");
const totalElem = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartTable.innerHTML = "";
  let subtotal = 0;

  cart.forEach((item, index) => {
    const total = item.price * item.quantity;
    subtotal += total;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="${item.img}" width="60"></td>
      <td>${item.name}</td>
      <td>₹${item.price}</td>
      <td>
        <input type="number" min="1" value="${item.quantity}" class="qty" data-index="${index}" />
      </td>
      <td>₹${total}</td>
      <td><button class="delete" data-index="${index}">❌</button></td>
    `;
    cartTable.appendChild(row);
  });

  const shipping = cart.length > 0 ? 100 : 0;
  subtotalElem.textContent = subtotal;
  shippingElem.textContent = shipping;
  totalElem.textContent = subtotal + shipping;

  localStorage.setItem("cart", JSON.stringify(cart));
}

// Quantity update
cartTable.addEventListener("change", e => {
  if (e.target.classList.contains("qty")) {
    const index = e.target.dataset.index;
    cart[index].quantity = parseInt(e.target.value);
    renderCart();
  }
});

// Delete item
cartTable.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    const index = e.target.dataset.index;
    cart.splice(index, 1);
    renderCart();
  }
});

renderCart();
