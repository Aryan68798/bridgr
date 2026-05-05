/* ── Bridgr Campus Map ── */

const STUDENTS = [
  {id:1,name:"Aryan Rai",initials:"AR",bg:"linear-gradient(135deg,#9b6dff,#4a9eff)",dept:"CS · 3rd Year",loc:"CS Building, Lab 3",title:"React Wizard 🧙",skills:["React","Next.js","TypeScript"],avail:"🟢 Available now",sessions:"Helped 142 students this semester",status:"online",skill:"react",cx:19,cy:20,color:"#9b6dff"},
  {id:2,name:"Vikram Singh",initials:"VS",dept:"CS · 4th Year",bg:"linear-gradient(135deg,#22d3ee,#4a9eff)",loc:"CS Building, 5th Floor",title:"Kernel Ninja 🐧",skills:["Linux","C","Systems"],avail:"🟡 Busy until 4pm",sessions:"Fixed 88 system bugs",status:"busy",skill:"systems",cx:21,cy:25,color:"#fbbf24"},
  {id:3,name:"Tanya Kapoor",initials:"TK",bg:"linear-gradient(135deg,#fb923c,#9b6dff)",dept:"CS · 1st Year",loc:"CS Building, Ground Floor",title:"Frontend Fairy 🧚",skills:["HTML/CSS","JavaScript","React"],avail:"🟢 Available now",sessions:"Helped 31 students",status:"online",skill:"react",cx:17,cy:28,color:"#9b6dff"},
  {id:4,name:"Sneha Kumar",initials:"SK",bg:"linear-gradient(135deg,#fb923c,#f472b6)",dept:"CS · 4th Year",loc:"CS Building, Seminar Hall",title:"Bug Slayer 🔪",skills:["C++","DSA","Algorithms"],avail:"🟢 Available now",sessions:"Crushed 142 bugs",status:"online",skill:"dsa",cx:23,cy:18,color:"#f472b6",activeSession:true},
  {id:5,name:"Aditya Patel",initials:"AP",bg:"linear-gradient(135deg,#fbbf24,#f472b6)",dept:"ECE · 3rd Year",loc:"ECE Block, Lab 2",title:"Embedded Wizard 🤖",skills:["Arduino","IoT","C"],avail:"🟢 Available now",sessions:"Built 23 IoT projects with peers",status:"online",skill:"systems",cx:54,cy:13,color:"#fbbf24"},
  {id:6,name:"Riya Shah",initials:"RS",bg:"linear-gradient(135deg,#fbbf24,#34d399)",dept:"ECE · 3rd Year",loc:"ECE Block, Quiet Room",title:"Circuit Breaker ⚡",skills:["VLSI","Verilog","MATLAB"],avail:"⚫ Offline",sessions:"Debugged 44 circuits",status:"offline",skill:"systems",cx:58,cy:17,color:"#fbbf24"},
  {id:7,name:"Rohan Das",initials:"RD",bg:"linear-gradient(135deg,#22d3ee,#9b6dff)",dept:"CS · 3rd Year",loc:"ECE Block, Lounge",title:"Mobile Dev Maverick 📱",skills:["React Native","Flutter","Firebase"],avail:"🟢 Available now",sessions:"Shipped 7 apps with teams",status:"online",skill:"react",cx:57,cy:12,color:"#9b6dff"},
  {id:8,name:"Priya Verma",initials:"PV",bg:"linear-gradient(135deg,#34d399,#22d3ee)",dept:"IT · 3rd Year",loc:"Library, 2nd floor",title:"StackOverflow Warrior 🏹",skills:["Python","ML","Pandas"],avail:"🟡 Busy — finishing assignment",sessions:"Explained ML to 81 students",status:"busy",skill:"python",cx:74,cy:38,color:"#34d399",activeSession:true},
  {id:9,name:"Divya Krishnan",initials:"DK",bg:"linear-gradient(135deg,#9b6dff,#22d3ee)",dept:"CS · 2nd Year",loc:"Library, Ground Floor",title:"Open Source Goblin 👺",skills:["Git","Python","Testing"],avail:"🟢 Available now",sessions:"Mentored 52 first-time contributors",status:"online",skill:"git",cx:77,cy:42,color:"#4a9eff"},
  {id:10,name:"Harish Babu",initials:"HB",bg:"linear-gradient(135deg,#4a9eff,#fb923c)",dept:"CS · 4th Year",loc:"Library, Corner Desk",title:"Security Specter 👻",skills:["Cybersecurity","CTF","Pen Testing"],avail:"🟢 Available now",sessions:"Ran 14 security workshops",status:"online",skill:"systems",cx:73,cy:45,color:"#fbbf24"},
  {id:11,name:"Meera Pillai",initials:"MP",bg:"linear-gradient(135deg,#f472b6,#fbbf24)",dept:"Maths · 4th Year",loc:"Hostel B, Common Room",title:"Math Oracle 🔢",skills:["Probability","Linear Algebra","Calculus"],avail:"🟡 Busy until 8pm",sessions:"Rescued 67 exam panics",status:"busy",skill:"ml",cx:14,cy:60,color:"#22d3ee"},
  {id:12,name:"Ananya Bose",initials:"AB",bg:"linear-gradient(135deg,#9b6dff,#f472b6)",dept:"IT · 2nd Year",loc:"Hostel B, Room 14B",title:"SQL Sorcerer 🔮",skills:["SQL","PostgreSQL","MongoDB"],avail:"🟢 Available now",sessions:"Fixed 49 database messes",status:"online",skill:"python",cx:17,cy:65,color:"#34d399"},
  {id:13,name:"Kabir Joshi",initials:"KJ",bg:"linear-gradient(135deg,#4a9eff,#34d399)",dept:"CS · 2nd Year",loc:"Lab Wing, Dev Room",title:"API Architect 🏗️",skills:["Node.js","GraphQL","REST"],avail:"🟢 Available now",sessions:"Built backends for 33 projects",status:"online",skill:"react",cx:47,cy:56,color:"#9b6dff",activeSession:true},
  {id:14,name:"Sameer Verma",initials:"SV",bg:"linear-gradient(135deg,#34d399,#4a9eff)",dept:"IT · 4th Year",loc:"Lab Wing, Server Room",title:"Cloud Cowboy ☁️",skills:["AWS","Docker","Kubernetes"],avail:"🟡 Busy — on a call",sessions:"Deployed 22 student projects",status:"busy",skill:"git",cx:51,cy:61,color:"#4a9eff"},
  {id:15,name:"Kavya Menon",initials:"KM",bg:"linear-gradient(135deg,#f472b6,#9b6dff)",dept:"Design · 3rd Year",loc:"Media Lab, Studio A",title:"Figma Witch 🎨",skills:["UI Design","Figma","CSS"],avail:"🟢 Available now",sessions:"Redesigned 28 student projects",status:"online",skill:"design",cx:71,cy:70,color:"#fb923c"},
  {id:16,name:"Nisha Gupta",initials:"NG",bg:"linear-gradient(135deg,#f472b6,#22d3ee)",dept:"Design · 2nd Year",loc:"Media Lab, Animation Desk",title:"Motion Design Maven 🌀",skills:["After Effects","GSAP","CSS Animations"],avail:"🟡 Busy until 6pm",sessions:"Animated 19 projects",status:"busy",skill:"design",cx:75,cy:74,color:"#fb923c"},
  {id:17,name:"Deepak Nair",initials:"DN",bg:"linear-gradient(135deg,#fb923c,#fbbf24)",dept:"CS · 1st Year",loc:"Canteen Area, Outside Seating",title:"Regex Demon 👹",skills:["Python","Regex","Bash"],avail:"🟢 Available now",sessions:"Saved 27 people from regex hell",status:"online",skill:"python",cx:29,cy:40,color:"#34d399"},
  {id:18,name:"Rahul Tiwari",initials:"RT",bg:"linear-gradient(135deg,#fbbf24,#fb923c)",dept:"ECE · 2nd Year",loc:"Canteen Area, Table 7",title:"Git God 🔱",skills:["Git","Docker","Linux"],avail:"🟢 Available now",sessions:"Rescued 91 git disasters",status:"online",skill:"git",cx:32,cy:44,color:"#4a9eff"},
  {id:19,name:"Arjun Rao",initials:"AR",bg:"linear-gradient(135deg,#9b6dff,#4a9eff)",dept:"CS · 3rd Year",loc:"Lab Wing, Dev Zone",title:"Fullstack Fanatic 🍕",skills:["Node.js","React","MongoDB"],avail:"🟢 Available now",sessions:"Completed 12 projects this month",status:"online",skill:"react",cx:45,cy:62,color:"#9b6dff"},
  {id:20,name:"Sanya Mirza",initials:"SM",bg:"linear-gradient(135deg,#34d399,#fbbf24)",dept:"CS · 2nd Year",loc:"Library, Quiet Zone",title:"Data Diva 📊",skills:["Python","R","Tableau"],avail:"🟢 Available now",sessions:"Visualized 56 datasets",status:"online",skill:"python",cx:76,cy:35,color:"#34d399"},
  {id:21,name:"Ishaan Khatter",initials:"IK",bg:"linear-gradient(135deg,#f472b6,#fb923c)",dept:"Design · 3rd Year",loc:"Media Lab, VR Room",title:"3D Dreamer 🧊",skills:["Blender","Unity","C#"],avail:"🟡 Busy with render",sessions:"Built 5 VR worlds",status:"busy",skill:"design",cx:70,cy:78,color:"#fb923c"},
  {id:22,name:"Zoya Akhtar",initials:"ZA",bg:"linear-gradient(135deg,#22d3ee,#9b6dff)",dept:"IT · 4th Year",loc:"ECE Block, Hall 1",title:"Network Nomad 🌐",skills:["Networking","Security","Cisco"],avail:"🟢 Available now",sessions:"Secured 12 campus nodes",status:"online",skill:"systems",cx:52,cy:18,color:"#fbbf24"},
  {id:23,name:"Karan Johar",initials:"KJ",bg:"linear-gradient(135deg,#fbbf24,#f472b6)",dept:"CS · 1st Year",loc:"Canteen, Fast Food",title:"Logic Legend 🧠",skills:["Java","C++","DSA"],avail:"🟢 Available now",sessions:"Solved 200+ LeetCode",status:"online",skill:"dsa",cx:33,cy:41,color:"#f472b6"},
  {id:24,name:"Alia Bhatt",initials:"AB",bg:"linear-gradient(135deg,#34d399,#22d3ee)",dept:"Design · 2nd Year",loc:"Lab Wing, Prototyping",title:"Pixel Pilot ✈️",skills:["Illustrator","Photoshop","XD"],avail:"🟢 Available now",sessions:"Designed 40 logos",status:"online",skill:"design",cx:46,cy:58,color:"#fb923c"},
  {id:25,name:"Ranbir Kapoor",initials:"RK",bg:"linear-gradient(135deg,#9b6dff,#f472b6)",dept:"CS · 4th Year",loc:"CS Building, Room 402",title:"Cloud King 👑",skills:["Azure","GCP","DevOps"],avail:"🟡 Busy deploying",sessions:"Managed 10 production clusters",status:"busy",skill:"git",cx:22,cy:22,color:"#4a9eff"},
  {id:26,name:"Deepika Padukone",initials:"DP",bg:"linear-gradient(135deg,#f472b6,#fbbf24)",dept:"Maths · 3rd Year",loc:"Library, Math Section",title:"Stat Star ⭐",skills:["Stats","Maths","Python"],avail:"🟢 Available now",sessions:"Tutored 30 juniors",status:"online",skill:"ml",cx:78,cy:45,color:"#22d3ee"},
  {id:27,name:"Ranveer Singh",initials:"RS",bg:"linear-gradient(135deg,#fb923c,#9b6dff)",dept:"ECE · 2nd Year",loc:"Hostel B, Balcony",title:"Hardware Hero 🛠️",skills:["Robotics","Hardware","C"],avail:"🟢 Available now",sessions:"Built 3 drones",status:"online",skill:"systems",cx:12,cy:68,color:"#fbbf24"},
  {id:28,name:"Shraddha Kapoor",initials:"SK",bg:"linear-gradient(135deg,#22d3ee,#34d399)",dept:"IT · 3rd Year",loc:"CS Building, Cafe",title:"Go Guru 🐹",skills:["Go","Backend","Docker"],avail:"🟢 Available now",sessions:"Optimized 5 microservices",status:"online",skill:"react",cx:24,cy:26,color:"#9b6dff"},
  {id:29,name:"Varun Dhawan",initials:"VD",bg:"linear-gradient(135deg,#fbbf24,#22d3ee)",dept:"CS · 2nd Year",loc:"ECE Block, Lab A",title:"Vue Voyager 🛸",skills:["Vue","Nuxt","Firebase"],avail:"🟡 Busy studying",sessions:"Shipped 3 Vue apps",status:"busy",skill:"react",cx:59,cy:14,color:"#9b6dff"},
  {id:30,name:"Sara Ali Khan",initials:"SA",bg:"linear-gradient(135deg,#34d399,#f472b6)",dept:"Design · 1st Year",loc:"Canteen, Coffee Corner",title:"Style Sage 🌿",skills:["CSS","Tailwind","UI"],avail:"🟢 Available now",sessions:"Fixed 100+ layout bugs",status:"online",skill:"design",cx:27,cy:45,color:"#fb923c"},
  {id:31,name:"Kartik Aaryan",initials:"KA",bg:"linear-gradient(135deg,#9b6dff,#22d3ee)",dept:"CS · 4th Year",loc:"Lab Wing, Server Closet",title:"DevOps Deity ⚡",skills:["Jenkins","Ansible","Kubernetes"],avail:"🟢 Available now",sessions:"Automated 20 workflows",status:"online",skill:"git",cx:53,cy:55,color:"#4a9eff"},
  {id:32,name:"Janhvi Kapoor",initials:"JK",bg:"linear-gradient(135deg,#f472b6,#fb923c)",dept:"IT · 3rd Year",loc:"Library, Tech Hub",title:"AI Alchemist 🧪",skills:["PyTorch","TensorFlow","ML"],avail:"🟡 Busy training model",sessions:"Published 2 AI papers",status:"busy",skill:"python",cx:72,cy:32,color:"#34d399"},
  {id:33,name:"Vicky Kaushal",initials:"VK",bg:"linear-gradient(135deg,#4a9eff,#fbbf24)",dept:"ECE · 4th Year",loc:"Media Lab, Sound Studio",title:"Signal Sultan 📡",skills:["DSP","Audio","Python"],avail:"🟢 Available now",sessions:"Processed 1000+ signals",status:"online",skill:"systems",cx:77,cy:71,color:"#fbbf24"},
  {id:34,name:"Katrina Kaif",initials:"KK",bg:"linear-gradient(135deg,#34d399,#9b6dff)",dept:"CS · 2nd Year",loc:"CS Building, Lobby",title:"Code Queen 👸",skills:["C++","Algorithms","DSA"],avail:"🟢 Available now",sessions:"Won 5 coding contests",status:"online",skill:"dsa",cx:21,cy:15,color:"#f472b6"},
  {id:35,name:"Ayushmann Khurrana",initials:"AK",bg:"linear-gradient(135deg,#fb923c,#22d3ee)",dept:"IT · 3rd Year",loc:"Hostel B, Study Room",title:"Bot Builder 🤖",skills:["Discord.js","Python","Automation"],avail:"🟡 Busy coding bots",sessions:"Built 10 useful bots",status:"busy",skill:"python",cx:15,cy:66,color:"#34d399"},
  {id:36,name:"Rajkumar Rao",initials:"RR",bg:"linear-gradient(135deg,#22d3ee,#f472b6)",dept:"CS · 4th Year",loc:"ECE Block, Room 201",title:"Rust Rebel 🦀",skills:["Rust","WebAssembly","Backend"],avail:"🟢 Available now",sessions:"Ported 3 apps to Rust",status:"online",skill:"systems",cx:55,cy:22,color:"#fbbf24"},
  {id:37,name:"Taapsee Pannu",initials:"TP",bg:"linear-gradient(135deg,#fbbf24,#34d399)",dept:"Design · 3rd Year",loc:"Canteen, Garden",title:"Motion Muse 🎬",skills:["Lottie","Rive","GSAP"],avail:"🟢 Available now",sessions:"Created 50+ web animations",status:"online",skill:"design",cx:35,cy:46,color:"#fb923c"},
  {id:38,name:"Ayush Rai",initials:"AR",bg:"linear-gradient(135deg,#9b6dff,#fbbf24)",dept:"CS · 1st Year",loc:"CS Building, Hall",title:"Swift Scout 🧭",skills:["Swift","iOS","UI"],avail:"🟢 Available now",sessions:"Built 2 iOS apps",status:"online",skill:"react",cx:18,cy:24,color:"#9b6dff"},
  {id:39,name:"Tripti Dimri",initials:"TD",bg:"linear-gradient(135deg,#f472b6,#22d3ee)",dept:"IT · 2nd Year",loc:"Library, Sofa Area",title:"DB Dean 🏫",skills:["NoSQL","DynamoDB","Firebase"],avail:"🟡 Busy with DB schema",sessions:"Fixed 15 data leaks",status:"busy",skill:"python",cx:71,cy:41,color:"#34d399"},
  {id:40,name:"Bobby Deol",initials:"BD",bg:"linear-gradient(135deg,#fb923c,#f472b6)",dept:"ECE · 3rd Year",loc:"Lab Wing, Bench 5",title:"Power Player ⚡",skills:["Power Systems","Electrical","C"],avail:"🟢 Available now",sessions:"Designed 2 mini grids",status:"online",skill:"systems",cx:48,cy:64,color:"#fbbf24"},
];

// Active session pairs [idA, idB]
const SESSION_PAIRS = [[4,8],[13,1],[8,12]];
const SESSION_TICKERS = [
  "Aryan → Tanya: React hooks fix · CS Building",
  "Priya → Ananya: SQL query help · Library",
  "Kabir → Sneha: DSA session · Lab Wing",
  "Rahul → Deepak: Git rebase rescue · Canteen",
];

let activeFilter = 'all';
let selectedStudent = null;
let canvas, ctx, W, H;
let animFrame, tickerIdx = 0;

// ── CANVAS SETUP & DRAW ──
function initCanvas() {
  canvas = document.getElementById('mapCanvas');
  ctx = canvas.getContext('2d');
  resize();
  window.addEventListener('resize', resize);
  drawLoop();
}

function resize() {
  const c = document.getElementById('mapContainer');
  W = canvas.width = c.offsetWidth;
  H = canvas.height = c.offsetHeight;
}

function toXY(pct_x, pct_y) {
  return { x: (pct_x / 100) * W, y: (pct_y / 100) * H };
}

let tick = 0;
function drawLoop() {
  ctx.clearRect(0, 0, W, H);
  tick++;
  drawGrid();
  drawBuildings();
  drawConnections();
  drawSessionLines();
  animFrame = requestAnimationFrame(drawLoop);
}

function drawGrid() {
  ctx.strokeStyle = 'rgba(155,109,255,0.04)';
  ctx.lineWidth = 1;
  const step = 60;
  for (let x = 0; x < W; x += step) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
  for (let y = 0; y < H; y += step) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }
}

const BUILDINGS = [
  {cx:20,cy:22,w:16,h:12,label:"CS Building",color:"rgba(155,109,255,0.08)"},
  {cx:56,cy:15,w:12,h:10,label:"ECE Block",color:"rgba(251,191,36,0.06)"},
  {cx:75,cy:40,w:12,h:12,label:"Library",color:"rgba(74,158,255,0.06)"},
  {cx:16,cy:63,w:12,h:10,label:"Hostel B",color:"rgba(244,114,182,0.06)"},
  {cx:49,cy:59,w:12,h:10,label:"Lab Wing",color:"rgba(52,211,153,0.06)"},
  {cx:73,cy:72,w:10,h:8,label:"Media Lab",color:"rgba(251,146,60,0.07)"},
  {cx:30,cy:43,w:10,h:8,label:"Canteen",color:"rgba(34,211,238,0.05)"},
];

function drawBuildings() {
  BUILDINGS.forEach(b => {
    const x = (b.cx/100)*W, y = (b.cy/100)*H;
    const w = (b.w/100)*W, h = (b.h/100)*H;
    ctx.fillStyle = b.color;
    ctx.strokeStyle = b.color.replace(/[\d.]+\)$/, '0.25)');
    ctx.lineWidth = 1;
    roundRect(ctx, x - w/2, y - h/2, w, h, 8);
    ctx.fill(); ctx.stroke();
  });
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x+r, y);
  ctx.lineTo(x+w-r, y); ctx.quadraticCurveTo(x+w, y, x+w, y+r);
  ctx.lineTo(x+w, y+h-r); ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
  ctx.lineTo(x+r, y+h); ctx.quadraticCurveTo(x, y+h, x, y+h-r);
  ctx.lineTo(x, y+r); ctx.quadraticCurveTo(x, y, x+r, y);
  ctx.closePath();
}

function drawConnections() {
  // Subtle cluster connections
  const visible = getVisible();
  if (visible.length < 2) return;
  for (let i = 0; i < visible.length; i++) {
    for (let j = i+1; j < visible.length; j++) {
      const a = visible[i], b = visible[j];
      const ax = (a.cx/100)*W, ay = (a.cy/100)*H;
      const bx = (b.cx/100)*W, by = (b.cy/100)*H;
      const dist = Math.hypot(ax-bx, ay-by);
      if (dist < 180) {
        const alpha = (1 - dist/180) * 0.12;
        ctx.strokeStyle = `rgba(155,109,255,${alpha})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 8]);
        ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke();
        ctx.setLineDash([]);
      }
    }
  }
}

function drawSessionLines() {
  const t = tick / 60;
  SESSION_PAIRS.forEach(([idA, idB], i) => {
    const a = STUDENTS.find(s => s.id === idA);
    const b = STUDENTS.find(s => s.id === idB);
    if (!a || !b) return;
    if (activeFilter !== 'all' && a.skill !== activeFilter && b.skill !== activeFilter) return;
    const ax = (a.cx/100)*W, ay = (a.cy/100)*H;
    const bx = (b.cx/100)*W, by = (b.cy/100)*H;
    // Glowing line
    const grad = ctx.createLinearGradient(ax, ay, bx, by);
    grad.addColorStop(0, 'rgba(52,211,153,0.7)');
    grad.addColorStop(1, 'rgba(155,109,255,0.7)');
    ctx.strokeStyle = grad;
    ctx.lineWidth = 1.5;
    ctx.shadowBlur = 8;
    ctx.shadowColor = '#34d399';
    ctx.setLineDash([]);
    ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke();
    ctx.shadowBlur = 0;
    // Travelling dot
    const phase = ((t * 0.6 + i * 0.33) % 1);
    const px = ax + (bx - ax) * phase;
    const py = ay + (by - ay) * phase;
    ctx.fillStyle = '#34d399';
    ctx.shadowBlur = 12; ctx.shadowColor = '#34d399';
    ctx.beginPath(); ctx.arc(px, py, 4, 0, Math.PI*2); ctx.fill();
    ctx.shadowBlur = 0;
  });
}

// ── DOTS ──
function getVisible() {
  return STUDENTS.filter(s => activeFilter === 'all' || s.skill === activeFilter);
}

function renderDots() {
  const layer = document.getElementById('dotsLayer');
  layer.innerHTML = '';
  const visible = getVisible();
  visible.forEach(s => {
    const div = document.createElement('div');
    div.className = 's-dot' + (s.activeSession ? ' active-session' : '');
    div.style.left = s.cx + '%';
    div.style.top = s.cy + '%';
    div.dataset.id = s.id;

    const floatY = Math.sin(Date.now()/1000 + s.id) * 3;

    div.innerHTML = `
      <div class="s-dot-inner" style="background:${s.color};box-shadow:0 0 10px ${s.color}">
        <div class="s-dot-ring" style="border-color:${s.color}"></div>
        <div class="s-dot-ring2" style="border-color:${s.color}"></div>
      </div>`;
    div.addEventListener('click', () => openCard(s));
    layer.appendChild(div);
  });
  // Rerender dots every 2s for float effect
  setTimeout(renderDots, 2000);
}

// ── PROFILE CARD ──
function openCard(s) {
  selectedStudent = s;
  document.getElementById('pcAvatar').style.background = s.bg;
  document.getElementById('pcAvatar').textContent = s.initials;
  document.getElementById('pcName').textContent = s.name;
  document.getElementById('pcDept').textContent = s.dept;
  document.getElementById('pcLoc').textContent = '📍 ' + s.loc;
  document.getElementById('pcTitle').textContent = s.title;
  document.getElementById('pcSkills').innerHTML = s.skills.map(sk => `<span class="pc-skill">${sk}</span>`).join('');
  document.getElementById('pcAvail').textContent = s.avail;
  document.getElementById('pcSessions').textContent = s.sessions;
  const btn = document.getElementById('pcBtn');
  btn.textContent = 'Send a ping ⚡';
  btn.className = 'pc-btn';
  document.getElementById('profileCard').classList.add('open');
}

document.getElementById('pcClose').addEventListener('click', () => {
  document.getElementById('profileCard').classList.remove('open');
  selectedStudent = null;
});

document.getElementById('pcBtn').addEventListener('click', function() {
  this.textContent = '🎉 Ping sent! Waiting for reply...';
  this.classList.add('sent');
});

// ── FILTERS ──
document.getElementById('skillFilter').addEventListener('click', e => {
  const pill = e.target.closest('.sf-pill');
  if (!pill) return;
  document.querySelectorAll('.sf-pill').forEach(p => p.classList.remove('active'));
  pill.classList.add('active');
  activeFilter = pill.dataset.skill;
  renderDots();
  // Update HUD count
  document.getElementById('hudOnline').textContent = getVisible().filter(s => s.status==='online').length;
  document.getElementById('hudSkills').textContent = [...new Set(getVisible().map(s=>s.skill))].length;
});

// ── HUD LIVE COUNTER FLICKER ──
function flickerHud() {
  const el = document.getElementById('hudOnline');
  const base = getVisible().filter(s => s.status==='online').length;
  el.textContent = base + (Math.random() > 0.5 ? 1 : 0);
  setTimeout(flickerHud, 3000 + Math.random()*4000);
}

// ── SESSION TICKER ──
function rotateTicker() {
  tickerIdx = (tickerIdx + 1) % SESSION_TICKERS.length;
  document.getElementById('tkText').textContent = SESSION_TICKERS[tickerIdx];
  setTimeout(rotateTicker, 8000);
}

// ── MAP click outside to close ──
document.getElementById('mapContainer').addEventListener('click', e => {
  if (!e.target.closest('.s-dot') && !e.target.closest('.profile-card')) {
    document.getElementById('profileCard').classList.remove('open');
  }
});

// ── INIT ──
initCanvas();
renderDots();
flickerHud();
setTimeout(rotateTicker, 8000);
