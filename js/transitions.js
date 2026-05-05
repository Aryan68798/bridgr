document.addEventListener('DOMContentLoaded', () => {
  // 1. Inject Loader HTML
  const loader = document.createElement('div');
  loader.className = 'page-loader active'; // Start active for initial load feel
  loader.id = 'pageLoader';
  loader.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center;">
      <img src="img/loading_animation.gif" alt="Loading..." class="loader-img">
      <div class="loader-text">Loading.....</div>
    </div>
  `;
  document.body.appendChild(loader);

  // 2. Initial Fade Out (Hide loader when page is ready)
  // Slight delay to ensure it's visible for a moment
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.remove('active');
    }, 500);
  });

  // 3. Intercept Navbar and internal link Clicks
  const handleTransition = (e) => {
    const link = e.currentTarget;
    const href = link.getAttribute('href');
    
    // Only transition for internal HTML links and not '#' or same-page anchors
    if (href && 
        !href.startsWith('#') && 
        !href.startsWith('mailto:') && 
        !href.startsWith('tel:') && 
        !href.startsWith('javascript:') && 
        !e.ctrlKey && !e.shiftKey && !e.metaKey && !e.altKey) {
      
      e.preventDefault();
      
      // Show loader
      loader.classList.add('active');
      
      // Navigate after fade duration
      setTimeout(() => {
        window.location.href = href;
      }, 400); 
    }
  };

  // Attach to nav links and other key action links
  const links = document.querySelectorAll('.nav-links a, .logo, .nav-cta, .nav-avatar, a.btn-primary, a.btn-ghost');
  links.forEach(link => {
    link.addEventListener('click', handleTransition);
  });
});

// Handle browser back/forward
window.addEventListener('pageshow', (event) => {
  const loader = document.getElementById('pageLoader');
  if (loader && event.persisted) {
    loader.classList.remove('active');
  }
});
