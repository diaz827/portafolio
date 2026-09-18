const header = document.querySelector(".site-header");
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i * 45, 250)}ms`;
  observer.observe(el);
});

document.getElementById("year").textContent = new Date().getFullYear();

const themeToggle = document.getElementById("themeToggle");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

function applyTheme(isLight) {
  document.body.classList.toggle("light", isLight);
  themeToggle?.setAttribute("aria-pressed", String(isLight));
  themeColorMeta?.setAttribute("content", isLight ? "#f5f6f2" : "#0b0d12");
}

let savedTheme;
try {
  savedTheme = localStorage.getItem("theme");
} catch (e) {}

applyTheme(savedTheme === "light");

themeToggle?.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light");
  try {
    localStorage.setItem("theme", isLight ? "light" : "dark");
  } catch (e) {}
  applyTheme(isLight);
});

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.getAttribute("data-filter");

    projectCards.forEach(card => {
      const category = card.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        card.classList.remove("filtered-out");
      } else {
        card.classList.add("filtered-out");
      }
    });
  });
});
