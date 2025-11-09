const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// hero section animation
const texts = ["Headphones", "Air Buds", "Mobile Covers", "Power Banks", "Chargers"];
let index = 0;

function changeText() {
  const textElement = document.getElementById("animated-text");
  index = (index + 1) % texts.length;
  textElement.style.opacity = 0;

  setTimeout(() => {
    textElement.textContent = texts[index];
    textElement.style.opacity = 1;
  }, 500);
}

setInterval(changeText, 3000);


// Animate logo on load
window.addEventListener("load", () => {
    const logo = document.getElementById("siteLogo");
    logo.style.opacity = "0";
    logo.style.transform = "translateY(-20px)";
    setTimeout(() => {
      logo.style.transition = "all 0.8s ease";
      logo.style.opacity = "1";
      logo.style.transform = "translateY(0)";
    }, 300);
  });
  
  // Action when logo clicked
  document.getElementById("siteLogo").addEventListener("click", () => {
    const icon = document.querySelector(".site-logo i");
    icon.style.transform = "rotate(720deg)";
    icon.style.color = "#ff3c00";
  
    // Option 1: Redirect to homepage after animation
    setTimeout(() => {
      window.location.href = "index.html";
    }, 700);
  
    // Option 2 (instead of redirect): Smooth scroll to top
    // window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  // Add effect when scrolling
  window.addEventListener("scroll", () => {
    const logo = document.getElementById("siteLogo");
    if (window.scrollY > 50) {
      logo.classList.add("scrolled");
    } else {
      logo.classList.remove("scrolled");
    }
  });
  

  // Animate About Section on Scroll
const aboutSection = document.querySelector('.about-content');

window.addEventListener('scroll', () => {
  const sectionPos = aboutSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;

  if(sectionPos < screenPos){
    aboutSection.style.animation = "fadeIn 1s forwards";
  }
});


// Fade in animation on scroll
const arrivals = document.querySelectorAll(".arrival-card");

window.addEventListener("scroll", () => {
  arrivals.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;
    if(cardTop < screenPos){
      card.style.transform = "translateY(0)";
      card.style.opacity = 1;
      card.style.transition = "all 0.6s ease";
    }
  });
});

// Initialize cards with hidden state
arrivals.forEach(card => {
  card.style.transform = "translateY(50px)";
  card.style.opacity = 0;
});

const cartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.getElementById('cart-count');

let cart = JSON.parse(localStorage.getItem('cart')) || [];
cartCount.textContent = cart.length;

cartButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const product = btn.parentElement;
    const id = product.dataset.id;
    const name = product.dataset.name;
    const price = parseFloat(product.dataset.price);
    const img = product.dataset.img;

    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ id, name, price, img, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    cartCount.textContent = cart.length;

    btn.textContent = "Added ✓";
    btn.style.background = "green";
    setTimeout(() => {
      btn.textContent = "Add to Cart";
      btn.style.background = "orangered";
    }, 1000);
  });
});
