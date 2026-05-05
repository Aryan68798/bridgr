/* ── Bridgr Post a Problem ── */

const MATCHES_DB = [
  {name:"Sneha Kumar",initials:"SK",bg:"linear-gradient(135deg,#fb923c,#f472b6)",role:"Bug Slayer 🔪",loc:"📍 Library, 2nd floor",status:"online",cred:1247,skills:["C++","DSA","Algorithms","Competitive"],match:97},
  {name:"Aryan Rai",initials:"AR",bg:"linear-gradient(135deg,#9b6dff,#4a9eff)",role:"React Wizard 🧙",loc:"📍 Block A, Room 304",status:"online",cred:847,skills:["React","Next.js","TypeScript","Tailwind"],match:94},
  {name:"Priya Verma",initials:"PV",bg:"linear-gradient(135deg,#34d399,#22d3ee)",role:"StackOverflow Warrior 🏹",loc:"📍 Hostel B",status:"busy",cred:623,skills:["Python","ML","Pandas","scikit-learn"],match:88},
  {name:"Kabir Joshi",initials:"KJ",bg:"linear-gradient(135deg,#4a9eff,#34d399)",role:"API Architect 🏗️",loc:"📍 Block A, Lounge",status:"online",cred:432,skills:["Node.js","REST","GraphQL","Express"],match:82},
];

/* ── State ── */
let currentStep = 1;
let formData = { skill: null, urgency: null, meet: null };
let direction = 'forward';

/* ── Step navigation ── */
function goStep(n) {
  const prev = document.getElementById('step' + currentStep);
  if (!validateStep(currentStep) && n > currentStep) return;
  direction = n > currentStep ? 'forward' : 'back';
  prev.classList.remove('active','back-anim');
  currentStep = n;
  const next = document.getElementById('step' + currentStep);
  next.classList.add('active');
  if (direction === 'back') next.classList.add('back-anim');
  updateProgress();
}

function validateStep(step) {
  if (step === 1) {
    const t = document.getElementById('probTitle').value.trim();
    const d = document.getElementById('probDesc').value.trim();
    if (!t) { shake('probTitle'); return false; }
    if (!d) { shake('probDesc'); return false; }
    return true;
  }
  if (step === 2) {
    if (!formData.skill && !document.getElementById('customSkill').value.trim()) {
      document.getElementById('skillChips').classList.add('shake-group');
      setTimeout(() => document.getElementById('skillChips').classList.remove('shake-group'), 600);
      return true; // allow through with no skill — it's optional
    }
    return true;
  }
  if (step === 3) {
    if (!formData.urgency) {
      document.getElementById('urgencyCards').classList.add('shake-group');
      setTimeout(() => document.getElementById('urgencyCards').classList.remove('shake-group'), 600);
      return false;
    }
    return true;
  }
  return true;
}

function shake(id) {
  const el = document.getElementById(id);
  el.style.borderColor = 'var(--orange)';
  el.style.animation = 'shake .4s var(--ease-out)';
  el.focus();
  setTimeout(() => { el.style.borderColor = ''; el.style.animation = ''; }, 1000);
}

function updateProgress() {
  document.querySelectorAll('.pstep').forEach(s => {
    const n = +s.dataset.step;
    s.classList.toggle('active', n === currentStep);
    s.classList.toggle('done', n < currentStep);
    if (n < currentStep) s.querySelector('.pstep-dot span').textContent = '';
    else s.querySelector('.pstep-dot span').textContent = n;
  });
}

/* ── Skill chips ── */
document.getElementById('skillChips').addEventListener('click', e => {
  if (!e.target.matches('.skchip')) return;
  document.querySelectorAll('.skchip').forEach(c => c.classList.remove('selected'));
  e.target.classList.add('selected');
  formData.skill = e.target.dataset.skill;
  document.getElementById('customSkill').value = '';
});
document.getElementById('customSkill').addEventListener('input', () => {
  document.querySelectorAll('.skchip').forEach(c => c.classList.remove('selected'));
  formData.skill = document.getElementById('customSkill').value.trim() || null;
});

/* ── Urgency cards ── */
document.getElementById('urgencyCards').addEventListener('click', e => {
  const card = e.target.closest('.urg-card');
  if (!card) return;
  document.querySelectorAll('.urg-card').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
  formData.urgency = card.dataset.urgency;
});

/* ── Meet cards ── */
document.getElementById('meetCards').addEventListener('click', e => {
  const card = e.target.closest('.meet-card');
  if (!card) return;
  document.querySelectorAll('.meet-card').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
  formData.meet = card.dataset.meet;
});

/* ── Char counts ── */
document.getElementById('probTitle').addEventListener('input', function() {
  const c = document.getElementById('titleCount');
  c.textContent = this.value.length + ' / 120';
  c.classList.toggle('warn', this.value.length > 100);
});
document.getElementById('probDesc').addEventListener('input', function() {
  const c = document.getElementById('descCount');
  c.textContent = this.value.length + ' / 500';
  c.classList.toggle('warn', this.value.length > 430);
});

/* ── Submit ── */
function submitPost() {
  if (!formData.meet) {
    document.querySelectorAll('.meet-card')[2].classList.add('selected');
    formData.meet = 'either';
  }
  showSearching();
}

const SEARCH_MSGS = [
  ["Searching campus for a genius... 👀", "Give us 5 seconds. We're scanning 847 skill profiles."],
  ["Found people who actually know this.", "Ranking by who's closest and not in a lecture..."],
  ["Buzzing their phones now.", "Karma points on the line — they WILL reply."],
];
const SS_IDS = ['ss1','ss2','ss3','ss4'];
const SS_TEXTS = [
  '✓ SOS fired to campus 🚀',
  '✓ Geniuses located nearby',
  '✓ Ranked by proximity (and vibe)',
  '✓ Phones are buzzing...',
];

function showSearching() {
  const sv = document.getElementById('searchingView');
  sv.classList.add('active');
  document.getElementById('formView').style.visibility = 'hidden';

  // Animate steps one by one
  SS_IDS.forEach((id, i) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      el.classList.add('show');
      setTimeout(() => { el.classList.add('done'); el.textContent = SS_TEXTS[i]; }, 700);
      if (i < SEARCH_MSGS.length) {
        document.getElementById('searchingTitle').textContent = SEARCH_MSGS[i][0];
        document.getElementById('searchingSub').textContent = SEARCH_MSGS[i][1];
      }
    }, i * 900 + 300);
  });

  // Show results after 4.5s
  setTimeout(showResults, 4800);
}

function showResults() {
  const sv = document.getElementById('searchingView');
  const rv = document.getElementById('resultsView');
  sv.classList.remove('active');

  const skill = formData.skill || document.getElementById('customSkill').value.trim() || 'this cursed problem';
  document.getElementById('resultsSub').textContent =
    `${MATCHES_DB.length} people nearby know ${skill}. They've been buzzed. First one to reply gets +${Math.floor(Math.random()*5+10)} karma points. 🎉`;

  const grid = document.getElementById('matchesGrid');
  grid.innerHTML = MATCHES_DB.map((m, i) => `
    <div class="match-card" style="animation-delay:${i*0.1}s">
      <div class="mc-top">
        <div class="mc-av" style="background:${m.bg}">
          ${m.initials}
          <div class="mc-status" style="background:${m.status==='online'?'var(--green)':m.status==='busy'?'var(--yellow)':'var(--text-muted)'}"></div>
        </div>
        <div class="mc-meta">
          <div class="mc-name">${m.name}</div>
          <div class="mc-role">${m.role}</div>
          <div class="mc-loc">${m.loc}</div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div class="mc-cred-num">${m.cred}</div>
          <div class="mc-cred-lbl">karma points</div>
        </div>
      </div>
      <div class="mc-match">
        <span class="mc-match-pct">${m.match}%</span>
        <span class="mc-match-lbl">skill match · ${m.status === 'online' ? '🟢 awake &amp; online' : '🟡 might be busy'}</span>
      </div>
      <div class="mc-skills">${m.skills.map(s=>`<span class="mc-skill">${s}</span>`).join('')}</div>
      <button class="mc-ping" data-idx="${i}" onclick="sendPing(this,${i})">Ping ${m.name.split(' ')[0]} and pray ⚡</button>
    </div>
  `).join('');

  rv.classList.add('active');
}

function sendPing(btn, idx) {
  btn.textContent = '🎉 Ping sent! Bug elimination in progress...';
  btn.classList.add('sent');
}

function resetForm() {
  document.getElementById('resultsView').classList.remove('active');
  document.getElementById('searchingView').classList.remove('active');
  document.getElementById('formView').style.visibility = '';
  currentStep = 1;
  formData = { skill: null, urgency: null, meet: null };
  document.querySelectorAll('.fstep').forEach(s => s.classList.remove('active','back-anim'));
  document.getElementById('step1').classList.add('active');
  document.getElementById('probTitle').value = '';
  document.getElementById('probDesc').value = '';
  document.getElementById('customSkill').value = '';
  document.getElementById('titleCount').textContent = '0 / 120';
  document.getElementById('descCount').textContent = '0 / 500';
  document.querySelectorAll('.skchip,.urg-card,.meet-card').forEach(el => el.classList.remove('selected'));
  SS_IDS.forEach(id => {
    const el = document.getElementById(id);
    el.classList.remove('show','done');
    el.innerHTML = el.innerHTML; // reset text
  });
  updateProgress();
}

// Add shake keyframe
const style = document.createElement('style');
style.textContent = '@keyframes shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-6px)}40%{transform:translateX(6px)}60%{transform:translateX(-4px)}80%{transform:translateX(4px)}}.shake-group{animation:shake .4s var(--ease-out,cubic-bezier(.16,1,.3,1));}';
document.head.appendChild(style);

// Restore searching step text
const origTexts = ['Posted to campus network','Scanning skill profiles...','Ranking by proximity...','Sending pings...'];
SS_IDS.forEach((id,i) => {
  const el = document.getElementById(id);
  el.innerHTML = `<span class="ss-dot"></span> ${origTexts[i]}`;
});
