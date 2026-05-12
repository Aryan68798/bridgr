// Simple auth simulation for prototype
document.addEventListener('DOMContentLoaded', () => {
  const avatar = document.querySelector('.nav-avatar');
  const navCta = document.querySelector('.nav-cta');
  
  if (localStorage.getItem('isLoggedIn') === 'true') {
    if (avatar) {
      avatar.href = 'profile.html';
      avatar.title = 'View Profile';
      avatar.style.backgroundImage = "url('img/pp_logined.png')";
      avatar.style.backgroundSize = "cover";
      avatar.style.backgroundPosition = "center";
      avatar.innerHTML = ""; // Remove initials
      avatar.style.display = "flex"; // Ensure it's visible
    }
    if (navCta) {
      navCta.href = 'post.html';
      navCta.textContent = 'Post a problem';
    }
  } else {
    if (avatar) {
      avatar.style.display = 'none'; // Hide avatar
    }
    if (navCta) {
      navCta.href = 'login.html';
      navCta.textContent = 'Get Started';
    }
  }
});
