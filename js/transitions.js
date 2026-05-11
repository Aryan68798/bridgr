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

// Add floating chat button
window.addEventListener('DOMContentLoaded', () => {
  // Don't add if we're already on the chat page
  if (window.location.pathname.endsWith('chat.html')) return;

  const chatBtn = document.createElement('a');
  chatBtn.href = 'chat.html';
  chatBtn.className = 'floating-chat-btn';
  chatBtn.innerHTML = '💬';
  chatBtn.title = 'Open Campus Chat';
  document.body.appendChild(chatBtn);
});
