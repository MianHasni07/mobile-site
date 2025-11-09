// Animate heading text (typing effect)
const title = document.querySelector('.animated-title');
const text = "Get in Touch";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    title.innerHTML = `Get in <span>${text.substring(7, i)}</span>`;
    i++;
    setTimeout(typeEffect, 150);
  }
}
typeEffect();

// Fake form submission animation
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.classList.add('sent');
  form.innerHTML = "<h3 style='text-align:center;color:#ff3c00;'>✅ Message Sent Successfully!</h3>";
  setTimeout(() => window.location.reload(), 2500);
});
