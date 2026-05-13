// Bridgr Auth & Session System
document.addEventListener('DOMContentLoaded', () => {
  const avatar = document.querySelector('.nav-avatar');
  const navCta = document.querySelector('.nav-cta');
  
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const currentUserEmail = localStorage.getItem('bridgr_currentUser');
  const users = JSON.parse(localStorage.getItem('bridgr_users') || '{}');
  const user = currentUserEmail ? (users[currentUserEmail.toLowerCase()] || users[currentUserEmail]) : null;

  if (isLoggedIn && user) {
    if (avatar) {
      avatar.href = 'profile.html';
      avatar.title = \`View Profile (\${user.name})\`;
      
      if (user.avatar) {
        avatar.style.backgroundImage = \`url('\${user.avatar}')\`;
        avatar.style.backgroundSize = "cover";
        avatar.style.backgroundPosition = "center";
        avatar.innerHTML = "";
      } else {
        avatar.style.background = user.aura || 'var(--orange)';
        avatar.style.display = "flex";
        avatar.style.alignItems = "center";
        avatar.style.justifyContent = "center";
        avatar.style.color = "white";
        avatar.style.fontWeight = "bold";
        avatar.style.fontSize = "12px";
        
        // Calculate initials
        const parts = user.name.split(' ');
        const initials = parts.length >= 2 
          ? (parts[0][0] + parts[parts.length-1][0]).toUpperCase()
          : user.name.substring(0, 2).toUpperCase();
        avatar.innerHTML = initials;
      }
      avatar.style.display = "flex"; 
    }
    if (navCta) {
      navCta.href = 'post.html';
      navCta.textContent = 'Post a problem';
    }
  } else {
    if (avatar) {
      avatar.style.display = 'none'; 
    }
    if (navCta) {
      navCta.href = 'login.html';
      navCta.textContent = 'Get Started';
    }
  }
});
