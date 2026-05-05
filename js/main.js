/* ── Bridgr main.js ── */

let interactionsInitialized = false;
let revealObs = null;
let counterObs = null;

function bindScrollNav() {
  const nav = document.getElementById("nav");
  if (!nav || nav.dataset.scrollBound === "1") return;
  nav.dataset.scrollBound = "1";
  window.addEventListener(
    "scroll",
    () => {
      nav.classList.toggle("scrolled", window.scrollY > 40);
    },
    { passive: true }
  );
}

// Reveal on scroll
function observeReveals() {
  const reveals = document.querySelectorAll(".reveal:not([data-reveal-bound='1'])");
  if (!reveals.length) return;
  if (!revealObs) {
    revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 80);
            revealObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
  }
  reveals.forEach((el) => {
    el.dataset.revealBound = "1";
    revealObs.observe(el);
  });
}

// Stagger sibling reveals
function applyStaggerDelay() {
  document.querySelectorAll(".cards-grid, .profiles-grid, .steps").forEach((grid) => {
    if (grid.dataset.staggerBound === "1") return;
    const children = grid.querySelectorAll(".reveal");
    children.forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.1}s`;
    });
    grid.dataset.staggerBound = "1";
  });
}

// Counter animation
function observeCounters() {
  const counters = document.querySelectorAll(".stat-num[data-target]:not([data-counter-bound='1'])");
  if (!counters.length) return;
  if (!counterObs) {
    counterObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = Number(el.dataset.target || 0);
          const duration = 1500;
          const start = performance.now();
          function step(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target).toLocaleString();
            if (progress < 1) {
              requestAnimationFrame(step);
            }
          }
          requestAnimationFrame(step);
          counterObs.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
  }
  counters.forEach((el) => {
    el.dataset.counterBound = "1";
    counterObs.observe(el);
  });
}

// Join button micro-interaction
function bindJoinButton() {
  const joinBtn = document.getElementById("joinBtn");
  const emailInput = document.getElementById("emailInput");
  if (!joinBtn || joinBtn.dataset.bound === "1") return;
  joinBtn.dataset.bound = "1";
  joinBtn.addEventListener("click", () => {
    const val = emailInput ? emailInput.value.trim() : "";
    if (!val) {
      emailInput.style.borderColor = "var(--orange)";
      emailInput.placeholder = "c'mon, just the email 👀";
      emailInput.focus();
      setTimeout(() => {
        emailInput.style.borderColor = "";
        emailInput.placeholder = "drop your college email";
      }, 2000);
      return;
    }
    joinBtn.textContent = "🎉 You're on the list!";
    joinBtn.style.background = "var(--grad-green)";
    joinBtn.disabled = true;
  });
}

// Smooth anchor scroll
function bindSmoothAnchors() {
  document.querySelectorAll("a[href^='#']").forEach((a) => {
    if (a.dataset.anchorBound === "1") return;
    a.dataset.anchorBound = "1";
    a.addEventListener("click", (evt) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        evt.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

window.initMainInteractions = function initMainInteractions() {
  bindScrollNav();
  observeReveals();
  applyStaggerDelay();
  observeCounters();
  bindJoinButton();
  bindSmoothAnchors();
  interactionsInitialized = true;
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    if (!interactionsInitialized) window.initMainInteractions();
  });
} else if (!interactionsInitialized) {
  window.initMainInteractions();
}
