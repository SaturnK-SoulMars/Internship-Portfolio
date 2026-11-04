// Lenis Smooth Scrolling
const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    wheelMultiplier: 1,
});

// Animation frame
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//  Navigation Menu
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("show");

  const isOpen = navbar.classList.contains("show");

  menuToggle.textContent = isOpen ? "✕" : "☰";
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close button
document.querySelectorAll("#navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("show");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Dark-Light theme
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  const isLight = document.body.classList.contains("light-mode");

  themeToggle.textContent = isLight ? "🌙" : "☀️";

  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Remember selected theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  themeToggle.textContent = "🌙";
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(section => {
    observer.observe(section);
});

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length < 2) {
    status.textContent = "Please enter a valid name.";
    status.style.color = "red";
    return;
  }

  if (!emailPattern.test(email)) {
    status.textContent = "Please enter a valid email address.";
    status.style.color = "red";
    return;
  }

  if (message.length < 10) {
    status.textContent = "Message must contain at least 10 characters.";
    status.style.color = "red";
    return;
  }

  status.textContent = "Your form is valid! Thank you, " + name + ".";
  status.style.color = "green";

  form.reset();
});
