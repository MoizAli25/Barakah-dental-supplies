// assets/js/site.js

// Path to partials
const PARTIALS_PATH = 'partials/';

// Load header and footer dynamically
async function loadPartial(id, file) {
  const el = document.getElementById(id);
  if (!el) return;

  try {
    const res = await fetch(PARTIALS_PATH + file);
    const html = await res.text();
    el.innerHTML = html;
  } catch (err) {
    console.log("Partial load error:", err);
  }
}

// Highlight active link
function setActiveNav() {
  const current = location.pathname.split('/').pop();
  document.querySelectorAll('[data-nav]').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current) {
      link.classList.add('active');
      link.style.fontWeight = '700';
    }
  });
}

// Smooth fade transition
function enableTransitions() {
  document.addEventListener("click", function (e) {
    const link = e.target.closest("a");
    if (!link) return;

    const href = link.getAttribute("href");

    if (!href || !href.endsWith(".html")) return;  // ignore external links

    e.preventDefault();
    document.body.style.opacity = 0;

    setTimeout(() => {
      window.location.href = href;
    }, 200);
  });

  window.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
      document.body.style.transition = "opacity 0.3s";
      document.body.style.opacity = 1;
    }, 10);
  });
}

// Update footer year
function updateYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

// API for cart count
window.BarakahSite = {
  setCartCount(num) {
    const badge = document.getElementById("cart-count");
    if (badge) badge.textContent = num;
  }
};

// Initialize site
async function initSite() {
  await loadPartial("site-header", "header.html");
  await loadPartial("site-footer", "footer.html");

  setTimeout(() => {
    setActiveNav();
    updateYear();
  }, 50);

  enableTransitions();
}

initSite();




