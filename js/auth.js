// Simple auth simulation for prototype
document.addEventListener('DOMContentLoaded', () => {
  const avatar = document.querySelector('.nav-avatar');
  if (avatar) {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      avatar.href = 'profile.html';
      avatar.title = 'View Profile';
    } else {
      avatar.href = 'login.html';
      avatar.title = 'Login';
    }
  }
});
