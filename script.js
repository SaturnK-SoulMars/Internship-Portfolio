
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  const isOpen = navbar.classList.toggle("show");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link
navbar.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.textContent = "☰";
  });
});


const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light-mode");

  themeToggle.textContent = isLight ? "🌙" : "☀️";

  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark mode" : "Switch to light mode"
  );
});


const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1
  }
);

revealElements.forEach(element => {
  observer.observe(element);
});


const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", event => {
  event.preventDefault();

  formStatus.textContent =
    "The form is ready! Connect a backend or form service to send messages.";

  contactForm.reset();
});
