/* ── Bridgr Student Profile ── */

const PROFILE = {
  name: "Aryan Rai", initials: "AR", cred: 847,
  powers: [
    {icon:"⚛️",name:"React",level:"Expert",pct:92,color:"#ffe17c",sessions:89,tags:["Hooks","Context","SSR"]},
    {icon:"🌐",name:"JavaScript",level:"Expert",pct:88,color:"#fbbf24",sessions:61,tags:["ES2024","Async/Await","Closures"]},
    {icon:"🔷",name:"TypeScript",level:"Advanced",pct:75,color:"#4a9eff",sessions:34,tags:["Generics","Types","Zod"]},
    {icon:"🚀",name:"Next.js",level:"Advanced",pct:70,color:"#22d3ee",sessions:28,tags:["App Router","SSG","ISR"]},
    {icon:"🎨",name:"CSS / Tailwind",level:"Intermediate",pct:58,color:"#f472b6",sessions:19,tags:["Animations","Grid","Flexbox"]},
    {icon:"🐙",name:"Git",level:"Advanced",pct:80,color:"#34d399",sessions:41,tags:["Rebase","Conflicts","Hooks"]},
  ],
  sessions: [
    {icon:'⛛️',title:'Untangled an infinite useEffect loop',person:'Tanya Kapoor',meta:'2 hours ago · CS Building · 7 min (she was in tears)',tags:['React','Hooks'],cred:12,stars:'★★★★★'},
    {icon:'🔷',title:'TypeScript generics explained til it clicked',person:'Deepak Nair',meta:'Yesterday · Online · 14 min',tags:['TypeScript','Generics'],cred:18,stars:'★★★★★'},
    {icon:'🚀',title:'Next.js App Router migration from hell',person:'Kabir Joshi',meta:'2 days ago · Library · 22 min session',tags:['Next.js','Routing'],cred:25,stars:'★★★★★'},
    {icon:'🌿',title:'Rescued a catastrophic merge conflict',person:'Riya Shah',meta:'3 days ago · Online · 9 min',tags:['Git','Merge'],cred:10,stars:'★★★★☆'},
    {icon:'🌐',title:'JS event loop finally made sense to someone',person:'Meera Pillai',meta:'4 days ago · Hostel B · 11 min',tags:['JavaScript','Async'],cred:14,stars:'★★★★★'},
  ],
  reviews: [
    {initials:'TK',bg:'linear-gradient(135deg,#fb923c,#9b6dff)',name:'Tanya Kapoor',stars:'★★★★★',time:'2h ago',text:'Aryan didn\'t just fix my bug, he explained exactly why it happened so I\'d never make that mistake again. I wanted to cry (in a good way). Karma points absolutely deserved.'},
    {initials:'DN',bg:'linear-gradient(135deg,#fb923c,#fbbf24)',name:'Deepak Nair',stars:'★★★★★',time:'Yesterday',text:'I\'ve been confused about TypeScript generics for three weeks. Fifteen minutes with Aryan and I actually get it now. Genuinely unhinged how fast he explained it.'},
    {initials:'KJ',bg:'linear-gradient(135deg,#4a9eff,#34d399)',name:'Kabir Joshi',stars:'★★★★★',time:'2 days ago',text:'Literally saved my entire final project. App Router migration was going nowhere — he pair-programmed with me until it worked and didn\'t once make me feel stupid. Campus MVP, no debate.'},
    {initials:'RS',bg:'linear-gradient(135deg,#fbbf24,#34d399)',name:'Riya Shah',stars:'★★★★☆',time:'3 days ago',text:'Really patient, really sharp. He\'d have gotten 5 stars but showed up 5 min late because he was in the middle of fixing someone else\'s bug 😄 Good problem to have I guess.'},
  ],
  badges: [
    {icon:'🏆',name:'Top Helper',color:'rgba(251,191,36,.2)',bd:'rgba(251,191,36,.35)',isNew:false},
    {icon:'⚡',name:'Speed Slayer',color:'rgba(34,211,238,.15)',bd:'rgba(34,211,238,.3)',isNew:false},
    {icon:'🔥',name:'7-Day Streak',color:'rgba(251,146,60,.15)',bd:'rgba(251,146,60,.3)',isNew:true},
    {icon:'💬',name:'Explainer King',color:'rgba(155,109,255,.15)',bd:'rgba(155,109,255,.3)',isNew:false},
    {icon:'🌟',name:'5★ Every Time',color:'rgba(251,191,36,.12)',bd:'rgba(251,191,36,.25)',isNew:false},
    {icon:'🎯',name:'Bug Sniper',color:'rgba(244,114,182,.15)',bd:'rgba(244,114,182,.3)',isNew:false},
    {icon:'🤝',name:'50 Sessions',color:'rgba(52,211,153,.12)',bd:'rgba(52,211,153,.25)',isNew:false},
    {icon:'🔱',name:'Campus Wizard',color:'rgba(251,191,36,.15)',bd:'rgba(251,191,36,.3)',isNew:false},
    {icon:'🌌',name:'Legendary (locked)',color:'rgba(155,109,255,.08)',bd:'rgba(155,109,255,.2)',isNew:false,locked:true},
    {icon:'👑',name:'Hall of Nerds (locked)',color:'rgba(251,191,36,.08)',bd:'rgba(251,191,36,.2)',isNew:false,locked:true},
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
        <div class="power-tags">${p.tags.map(t=>`<span class="power-tag">${t}</span>`).join('')}</div>
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
        <div class="si-tags">${s.tags.map(t=>`<span class="si-tag">${t}</span>`).join('')}</div>
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
    <div class="badge-item ${b.locked?'locked-badge':''}" style="background:${b.color};--bd:${b.bd};border-color:${b.bd}">
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
    const p = Math.min((now - start)/dur, 1);
    const ease = 1 - Math.pow(1-p, 3);
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
    if (ntb) setTimeout(() => { ntb.style.width = ((PROFILE.cred / 1500) * 100).toFixed(1) + '%'; }, 200);
    // Cred counter
    if (el.classList.contains('prof-header')) {
      const cEl = document.getElementById('phCredNum');
      const target = PROFILE.cred;
      const dur = 2000;
      const start = performance.now();
      function step(now) {
        const p = Math.min((now-start)/dur,1);
        const ease = 1 - Math.pow(1-p,3);
        cEl.textContent = Math.round(ease*target);
        if (p<1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    observer.unobserve(el);
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Ping modal ──
const pingBtn = document.getElementById('pingBtn');
if (pingBtn) {
  pingBtn.addEventListener('click', () => {
    document.getElementById('pingBackdrop').classList.add('open');
  });
  document.getElementById('pmClose').addEventListener('click', () => {
    document.getElementById('pingBackdrop').classList.remove('open');
  });
  document.getElementById('pingBackdrop').addEventListener('click', e => {
    if (e.target.id === 'pingBackdrop') document.getElementById('pingBackdrop').classList.remove('open');
  });
  document.getElementById('pmSend').addEventListener('click', function() {
    this.textContent = '🎉 Ping fired! Aryan is being buzzed RIGHT NOW.';
    this.classList.add('sent');
    this.disabled = true;
    pingBtn.textContent = '⚡ Pinged!';
    pingBtn.classList.add('sent');
    setTimeout(() => {
      document.getElementById('pingBackdrop').classList.remove('open');
      this.textContent = 'Fire the ping ⚡';
      this.classList.remove('sent');
      this.disabled = false;
    }, 2000);
  });
  document.addEventListener('keydown', e => { if(e.key==='Escape') document.getElementById('pingBackdrop').classList.remove('open'); });
}

// ── Edit Profile Modal ──
document.getElementById('editProfileBtn').addEventListener('click', () => {
  document.getElementById('emName').value = PROFILE.name || '';
  // parse the sub string 'CS · 3rd Year · Block A, Room 304' to get dept and loc
  const subText = document.getElementById('phSub').textContent;
  const parts = subText.split(' · ');
  if(parts.length >= 3) {
    document.getElementById('emDept').value = parts[0] + ' · ' + parts[1];
    document.getElementById('emLoc').value = parts[2];
  } else {
    document.getElementById('emDept').value = parts[0] || '';
    document.getElementById('emLoc').value = parts[1] || '';
  }
  const roleText = document.querySelector('.ph-tag').textContent.replace('⚛️ ', '');
  document.getElementById('emTitle').value = roleText;
  
  document.getElementById('editBackdrop').classList.add('open');
});

document.getElementById('emClose').addEventListener('click', () => {
  document.getElementById('editBackdrop').classList.remove('open');
});

document.getElementById('editBackdrop').addEventListener('click', e => {
  if (e.target.id === 'editBackdrop') document.getElementById('editBackdrop').classList.remove('open');
});

document.getElementById('emSave').addEventListener('click', function() {
  const name = document.getElementById('emName').value;
  const dept = document.getElementById('emDept').value;
  const loc = document.getElementById('emLoc').value;
  const title = document.getElementById('emTitle').value;
  
  // Update Profile object
  PROFILE.name = name;
  
  // Update DOM
  document.getElementById('phName').textContent = name;
  document.getElementById('phSub').textContent = `${dept} · ${loc}`;
  document.querySelector('.ph-tag').textContent = `⚛️ ${title}`;
  
  // Also update avatar initials if possible (just taking first letters)
  const initials = name.split(' ').map(n=>n[0]).join('').substring(0,2).toUpperCase();
  document.getElementById('phAvatar').textContent = initials;
  PROFILE.initials = initials;
  
  this.textContent = 'Saved! ✓';
  this.style.background = 'linear-gradient(135deg,#34d399,#22d3ee)';
  setTimeout(() => {
    document.getElementById('editBackdrop').classList.remove('open');
    this.textContent = 'Save Changes ✓';
    this.style.background = '';
  }, 800);
});

document.addEventListener('keydown', e => { if(e.key==='Escape') document.getElementById('editBackdrop').classList.remove('open'); });

// ── Logout ──
document.getElementById('logoutBtn').addEventListener('click', () => {
  localStorage.setItem('isLoggedIn', 'false');
  window.location.href = 'login.html';
});

// ── Nav scroll glass ──
window.addEventListener('scroll', () => {
  document.getElementById('nav').style.background = window.scrollY > 30 ? 'rgba(255,255,255,.98)' : 'rgba(255,255,255,.94)';
});

// ── Init ──
renderPowers();
renderSessions();
renderReviews();
renderBadges();
