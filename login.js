// Toggle password visibility
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  togglePassword.classList.toggle("fa-eye-slash");
});

// Form animation on submit
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  form.classList.add("submitted");
  form.innerHTML = `
    <h2 style="color:#ff3c00; font-size:1.5rem;">✅ Login Successful!</h2>
    <p style="color:#ccc;">Redirecting...</p>
  `;

  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
});
