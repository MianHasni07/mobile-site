// jsPDF import
const { jsPDF } = window.jspdf;

const form = document.getElementById("orderForm");
const successMsg = document.getElementById("successMessage");
const downloadBtn = document.getElementById("downloadReceipt");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Collect data
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value.trim();
  const payment = document.getElementById("payment").value;

  if (!name || !email || !address || !payment) {
    alert("Please fill in all fields!");
    return;
  }

  // Hide form, show success message
  form.style.display = "none";
  successMsg.style.display = "block";
});


// Download PDF receipt
downloadBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const Phone = document.getElementById("Phone").value;
  const address = document.getElementById("address").value;
  const payment = document.getElementById("payment").value;
  const Date = document.getElementById("date").value;
  const ProductName = document.getElementById("p-name").value;
  const ProductPrice = document.getElementById("p-price").value;
  const Quantity= document.getElementById("p-quantity").value;
  const ShippingCharges= document.getElementById("s-charges").value;
  const Total= document.getElementById("total").value;

  

  const pdf = new jsPDF();
  pdf.setFontSize(16);
  pdf.text("MobileX - Order Receipt", 70, 20);
  pdf.setFontSize(12);
  pdf.text(`Customer Name: ${name}`, 20, 40);
  pdf.text(`Email: ${email}`, 20, 50);
  pdf.text(`Phone no: ${Phone}`, 20, 60);
  pdf.text(`Product Name: ${ProductName}`, 20, 70);
  pdf.text(`Product Price: ${ProductPrice}`, 20, 80);
  pdf.text(`Quantity: ${Quantity}`, 20, 90);
  pdf.text(`Shipping Charges: ${ShippingCharges}`, 20, 100);
  pdf.text(`Total Amount: ${Total}`, 20, 110);
  pdf.text(`Date: ${Date}`, 20, 120);
  pdf.text(`Address: ${address}`, 20, 130);
  pdf.text(`Payment Method: ${payment}`, 20, 140);
  // pdf.text("Subtotal: $95.00", 20, 130);
  // pdf.text("Shipping: $5.00", 20, 150);
  // pdf.text("Total: $100.00", 20, 115);
  pdf.text("Thank you for your purchase!", 20, 150);

  pdf.save("MobileX_Receipt.pdf");
});


const placeBtn = document.querySelector(".place-order-btn");

placeBtn.addEventListener("click", (e) => {
  placeBtn.style.transform = "scale(0.95)";
  setTimeout(() => {
    placeBtn.style.transform = "scale(1)";
  }, 150);
});
