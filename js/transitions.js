// ── Page Transitions ──
// This script handles the fade-out of the pre-rendered loader when the page is fully loaded.

window.addEventListener('load', () => {
  const loader = document.getElementById('pageLoader');
  if (loader) {
    // Slight delay to ensure smooth transition
    setTimeout(() => {
      loader.classList.remove('active');
    }, 500);
  }
});

// Handle browser back/forward cache
window.addEventListener('pageshow', (event) => {
  const loader = document.getElementById('pageLoader');
  if (loader && event.persisted) {
    loader.classList.remove('active');
  }
});
