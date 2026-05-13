// Bridgr Auth & Session System
// Controls the nav bar on every page based on localStorage session state.

function bridgrUpdateNav() {
  // Query DOM elements INSIDE this function so they're always fresh
  const avatar = document.querySelector('.nav-avatar');
  const navCta = document.querySelector('.nav-cta');
  
  if (!avatar && !navCta) {
    // No nav elements on this page (e.g. login/signup pages), bail out
    return;
  }

  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const users = JSON.parse(localStorage.getItem('bridgr_users') || '{}');
  
  // Validate: isLoggedIn must be a real email that exists in bridgr_users
  // Values like 'true', 'null', 'undefined', or empty string are INVALID
  let user = null;
  let validKey = null;

  if (isLoggedIn && isLoggedIn !== 'true' && isLoggedIn !== 'null' && isLoggedIn !== 'undefined' && isLoggedIn.trim() !== '') {
    validKey = isLoggedIn.toLowerCase().trim();
    user = users[validKey] || null;
  }
  
  // If isLoggedIn was set to garbage like 'true', clean it up
  if (isLoggedIn && !user) {
    localStorage.removeItem('isLoggedIn');
  }

  console.log('[Auth]', { isLoggedIn, validKey, hasUser: !!user });

  if (user) {
    // ══════════════ LOGGED IN ══════════════
    if (avatar) {
      avatar.href = 'profile.html';
      avatar.title = 'View Profile (' + (user.name || 'User') + ')';
      
      if (user.avatar) {
        // User has a profile picture
        avatar.style.backgroundImage = "url('" + user.avatar + "')";
        avatar.style.backgroundSize = 'cover';
        avatar.style.backgroundPosition = 'center';
        avatar.innerHTML = '';
      } else {
        // Show initials with aura gradient
        avatar.style.background = user.aura || 'var(--orange)';
        avatar.style.backgroundImage = '';
        avatar.style.color = 'white';
        avatar.style.fontWeight = 'bold';
        avatar.style.fontSize = '12px';
        
        var name = user.name || 'User';
        var parts = name.trim().split(' ');
        var initials = parts.length >= 2 
          ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
          : name.substring(0, 2).toUpperCase();
        avatar.innerHTML = initials;
      }
      avatar.style.display = 'flex';
      avatar.style.alignItems = 'center';
      avatar.style.justifyContent = 'center';
    }
    
    if (navCta) {
      navCta.href = 'post.html';
      navCta.textContent = 'Post a problem';
      navCta.style.display = 'inline-flex';
    }
  } else {
    // ══════════════ LOGGED OUT ══════════════
    if (avatar) {
      avatar.style.display = 'none';
    }
    if (navCta) {
      navCta.href = 'login.html';
      navCta.textContent = 'Get Started';
      navCta.style.display = 'inline-flex';
    }
  }
}

// Run when DOM is ready (guaranteed elements exist)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bridgrUpdateNav);
} else {
  // DOM already loaded, run immediately
  bridgrUpdateNav();
}
