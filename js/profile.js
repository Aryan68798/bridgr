/* ── Bridgr Student Profile ── */
const currentUserEmail = localStorage.getItem('bridgr_currentUser');
const users = JSON.parse(localStorage.getItem('bridgr_users') || '{}');
const currentUser = currentUserEmail ? users[currentUserEmail.toLowerCase()] || users[currentUserEmail] : null;

// Debugging session
console.log('Profile Load:', { currentUserEmail, hasUser: !!currentUser, isLoggedIn: localStorage.getItem('isLoggedIn') });

if (!currentUser || localStorage.getItem('isLoggedIn') !== 'true') {
  console.warn('Session invalid or missing. Redirecting to login...');
  window.location.href = 'login.html';
}

const PROFILE = {
  name: currentUser.name,
  email: currentUser.email,
  dept: currentUser.dept || "Computer Science",
  year: currentUser.year || "2nd Year",
  bio: currentUser.bio || "No bio yet. Edit your profile to tell your story!",
  cred: currentUser.stats?.karma || 0,
  sessionsCount: currentUser.stats?.sessions || 0,
  solvedCount: currentUser.stats?.problemsSolved || 0,
  avatar: currentUser.avatar,
  aura: currentUser.aura,
  skills: currentUser.skills || ["React", "JavaScript", "Brutalist Design"],
  powers: [
    { icon: "⚛️", name: "React", level: "Expert", pct: 92, color: "#ffe17c", sessions: 89, tags: ["Hooks", "Context", "SSR"] },
    { icon: "🌐", name: "JavaScript", level: "Expert", pct: 88, color: "#fbbf24", sessions: 61, tags: ["ES2024", "Async/Await", "Closures"] },
    { icon: "🎨", name: "CSS / Tailwind", level: "Intermediate", pct: 58, color: "#f472b6", sessions: 19, tags: ["Animations", "Grid", "Flexbox"] },
  ],
  sessions: [
    { icon: '⛛️', title: 'Untangled an infinite useEffect loop', person: 'Tanya Kapoor', meta: '2 hours ago · CS Building · 7 min', tags: ['React', 'Hooks'], cred: 12, stars: '★★★★★' },
    { icon: '🔷', title: 'TypeScript generics explained til it clicked', person: 'Deepak Nair', meta: 'Yesterday · Online · 14 min', tags: ['TypeScript', 'Generics'], cred: 18, stars: '★★★★★' },
  ],
  reviews: [
    { initials: 'TK', bg: 'linear-gradient(135deg,#fb923c,#9b6dff)', name: 'Tanya Kapoor', stars: '★★★★★', time: '2h ago', text: 'You didn\'t just fix my bug, you explained exactly why it happened so I\'d never make that mistake again.' },
    { initials: 'DN', bg: 'linear-gradient(135deg,#fb923c,#fbbf24)', name: 'Deepak Nair', stars: '★★★★★', time: 'Yesterday', text: 'Best expert on campus. Genuinely unhinged how fast the solution was explained.' },
  ],
  badges: [
    { icon: '🏆', name: 'Top Helper', color: 'rgba(251,191,36,.2)', bd: 'rgba(251,191,36,.35)', isNew: false },
    { icon: '⚡', name: 'Speed Slayer', color: 'rgba(34,211,238,.15)', bd: 'rgba(34,211,238,.3)', isNew: false },
    { icon: '🔥', name: '7-Day Streak', color: 'rgba(251,146,60,.15)', bd: 'rgba(251,146,60,.3)', isNew: true },
    { icon: '🔱', name: 'Campus Wizard', color: 'rgba(251,191,36,.15)', bd: 'rgba(251,191,36,.3)', isNew: false },
  ],
};

// ── Render Superpowers ──
function renderPowers() {
  document.getElementById('powersList').innerHTML = PROFILE.powers.map(p => `
    <div class="power-item">
      <div class="power-icon">${p.icon}</div>
      <div class="power-body">
        <div class="power-top">
          <span class="power-name">${p.name}</span>
          <span class="power-lvl">${p.level} · ${p.sessions} sessions</span>
        </div>
        <div class="power-track">
          <div class="power-bar" style="width:0%;background:${p.color};--bar-color:${p.color}" data-w="${p.pct}%"></div>
        </div>
        <div class="power-tags">${p.tags.map(t => `<span class="power-tag">${t}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');
}

// ── Render Sessions ──
function renderSessions() {
  document.getElementById('sessionsList').innerHTML = PROFILE.sessions.map(s => `
    <div class="session-item">
      <div class="si-icon">${s.icon}</div>
      <div class="si-body">
        <div class="si-title">${s.title}</div>
        <div class="si-meta">${s.meta}</div>
        <div class="si-tags">${s.tags.map(t => `<span class="si-tag">${t}</span>`).join('')}</div>
      </div>
      <div class="si-right">
        <div class="si-cred">+${s.cred}</div>
        <div class="si-cred-lbl">cred</div>
        <div class="si-stars">${s.stars}</div>
      </div>
    </div>
  `).join('');
}

// ── Render Reviews ──
function renderReviews() {
  document.getElementById('reviewsList').innerHTML = PROFILE.reviews.map(r => `
    <div class="review-item">
      <div class="ri-top">
        <div class="ri-av" style="background:${r.bg}">${r.initials}</div>
        <div class="ri-name">${r.name}</div>
        <div class="ri-stars">${r.stars}</div>
        <div class="ri-time">${r.time}</div>
      </div>
      <div class="ri-text">${r.text}</div>
    </div>
  `).join('');
}

// ── Render Badges ──
function renderBadges() {
  document.getElementById('badgesShelf').innerHTML = PROFILE.badges.map(b => `
    <div class="badge-item ${b.locked ? 'locked-badge' : ''}" style="background:${b.color};--bd:${b.bd};border-color:${b.bd}">
      <div class="badge-icon">${b.icon}</div>
      <div class="badge-name">${b.name}</div>
      ${b.isNew ? '<span class="badge-new">NEW</span>' : ''}
    </div>
  `).join('');
}

// ── Animated counter ──
function animateCounter(el) {
  const target = +el.dataset.target;
  const dur = 1800;
  const start = performance.now();
  function step(now) {
    const p = Math.min((now - start) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(ease * target);
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ── Scroll reveal + animate-on-enter ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    el.classList.add('in');
    
    // Counters
    el.querySelectorAll('.counter').forEach(c => animateCounter(c));
    
    // Skill bars
    el.querySelectorAll('.power-bar').forEach(b => { setTimeout(() => { b.style.width = b.dataset.w; }, 100); });
    
    // Review bars
    el.querySelectorAll('.rs-fill').forEach(b => { setTimeout(() => { b.style.width = b.dataset.w; }, 200); });
    
    // NTB fill
    const ntb = el.querySelector('#ntbFill');
    if (ntb) setTimeout(() => { ntb.style.width = Math.min(100, (PROFILE.cred / 1500) * 100).toFixed(1) + '%'; }, 200);
    
    // Cred counter
    if (el.classList.contains('prof-header')) {
      const cEl = document.getElementById('phCredNum');
      const target = PROFILE.cred;
      const dur = 2000;
      const start = performance.now();
      function step(now) {
        const p = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        cEl.textContent = Math.round(ease * target);
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    observer.unobserve(el);
  });
}, { threshold: 0, rootMargin: '50px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Ping modal (Mock) ──
const pmBtn = document.getElementById('editProfileBtn'); // Reusing logic

// ── Edit Profile Modal ──
document.getElementById('editProfileBtn').addEventListener('click', () => {
  document.getElementById('emName').value = PROFILE.name || '';
  document.getElementById('emDept').value = PROFILE.dept + ' · ' + PROFILE.year;
  document.getElementById('emLoc').value = 'Block A, Room 304'; // Default mock
  document.getElementById('emTitle').value = PROFILE.skills[0] || '';
  document.getElementById('editBackdrop').classList.add('open');
});

document.getElementById('emClose').addEventListener('click', () => {
  document.getElementById('editBackdrop').classList.remove('open');
});

document.getElementById('emSave').addEventListener('click', function () {
  const name = document.getElementById('emName').value;
  const fullDept = document.getElementById('emDept').value;
  const parts = fullDept.split(' · ');
  
  // Update Profile object
  PROFILE.name = name;
  PROFILE.dept = parts[0] || PROFILE.dept;
  PROFILE.year = parts[1] || PROFILE.year;

  // Persist to LocalStorage
  if (currentUserEmail && users[currentUserEmail]) {
    users[currentUserEmail].name = name;
    users[currentUserEmail].dept = PROFILE.dept;
    users[currentUserEmail].year = PROFILE.year;
    localStorage.setItem('bridgr_users', JSON.stringify(users));
  }

  // Update DOM
  document.getElementById('phName').textContent = name;
  document.getElementById('phSub').textContent = `${PROFILE.dept} · ${PROFILE.year} · Block A, Room 304`;

  this.textContent = 'Saved! ✓';
  this.style.background = 'var(--green)';
  setTimeout(() => {
    document.getElementById('editBackdrop').classList.remove('open');
    this.textContent = 'Save Changes ✓';
    this.style.background = '';
  }, 800);
});

// ── Logout ──
document.getElementById('logoutBtn').addEventListener('click', () => {
  localStorage.setItem('isLoggedIn', 'false');
  localStorage.removeItem('bridgr_currentUser');
  window.location.href = 'login.html';
});

// ── Init Profile Data ──
function initProfile() {
  document.getElementById('phName').textContent = PROFILE.name;
  document.getElementById('phSub').textContent = `${PROFILE.dept} · ${PROFILE.year} · Block A, Room 304`;
  
  const av = document.getElementById('phAvatar');
  if (PROFILE.avatar) {
    av.style.backgroundImage = `url('${PROFILE.avatar}')`;
    av.style.backgroundSize = 'cover';
    av.style.backgroundPosition = 'center';
    av.innerHTML = '';
  } else {
    av.style.background = PROFILE.aura || 'var(--orange)';
    const initials = PROFILE.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    av.innerHTML = initials;
  }

  // Update Stats Counters
  const statNums = document.querySelectorAll('.stat-num.counter');
  if (statNums[0]) statNums[0].dataset.target = PROFILE.solvedCount;
  if (statNums[1]) statNums[1].dataset.target = PROFILE.sessionsCount;

  renderPowers();
  renderSessions();
  renderReviews();
  renderBadges();
}

initProfile();
