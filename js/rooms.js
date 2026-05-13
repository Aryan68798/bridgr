/* ── Bridgr Room Finder ── */

const ROOMS = [
  {id:1,name:"Seminar Hall A",building:"CS Building",floor:1,cap:20,status:"occupied",session:"DSA mentoring session",nextFree:"6:30 PM",equip:["Whiteboard","Projector","AC","Podium"],slots:[{t:"2PM–4PM",s:"occ",lbl:"DSA Session"},{t:"4PM–6PM",s:"occ",lbl:"Project Review"},{t:"6PM–8PM",s:"free",lbl:"Free"},{t:"8PM–10PM",s:"free",lbl:"Free"}],px:22,py:28,pinColor:"#f87171"},
  {id:2,name:"Discussion Pod 1",building:"CS Building",floor:1,cap:6,status:"available",session:null,nextFree:null,equip:["Whiteboard","Screen"],slots:[{t:"Now–6PM",s:"free",lbl:"Free"},{t:"6PM–7PM",s:"soon",lbl:"Booked"},{t:"7PM–9PM",s:"occ",lbl:"React study"}],px:30,py:20,pinColor:"#34d399"},
  {id:3,name:"Project Room B",building:"CS Building",floor:1,cap:8,status:"soon",session:null,nextFree:"Available until 5:30 PM",equip:["Whiteboard","Screen","AC"],slots:[{t:"Now–5:30PM",s:"free",lbl:"Free"},{t:"5:30PM–8PM",s:"occ",lbl:"ML project"},{t:"8PM–10PM",s:"free",lbl:"Free"}],px:38,py:35,pinColor:"#fbbf24"},
  {id:4,name:"Quiet Study Room",building:"Library",floor:2,cap:4,status:"available",session:null,nextFree:null,equip:["Screen","Power Outlets"],slots:[{t:"Now–9PM",s:"free",lbl:"Free"},{t:"9PM–10PM",s:"occ",lbl:"Booked"}],px:68,py:22,pinColor:"#34d399"},
  {id:5,name:"Reading Lounge",building:"Library",floor:1,cap:12,status:"occupied",session:"AI project brainstorming",nextFree:"7:00 PM",equip:["Whiteboard","AC","Screen","Projector"],slots:[{t:"2PM–7PM",s:"occ",lbl:"AI Brainstorm"},{t:"7PM–10PM",s:"free",lbl:"Free"}],px:74,py:30,pinColor:"#f87171"},
  {id:6,name:"Group Study 3",building:"Library",floor:3,cap:10,status:"available",session:null,nextFree:null,equip:["Whiteboard","Power Outlets","AC"],slots:[{t:"Now–8PM",s:"free",lbl:"Free"},{t:"8PM–9PM",s:"soon",lbl:"Reserved"}],px:78,py:18,pinColor:"#34d399"},
  {id:7,name:"Innovation Lab",building:"Lab Wing",floor:1,cap:16,status:"occupied",session:"Hackathon prep",nextFree:"9:00 PM",equip:["Multiple Screens","Whiteboard","3D Printer","AC","Projector"],slots:[{t:"2PM–9PM",s:"occ",lbl:"Hackathon Prep"},{t:"9PM–11PM",s:"free",lbl:"Free"}],px:50,py:52,pinColor:"#f87171"},
  {id:8,name:"Collab Space A",building:"Lab Wing",floor:2,cap:8,status:"available",session:null,nextFree:null,equip:["Whiteboard","Screen","AC"],slots:[{t:"Now–6PM",s:"free",lbl:"Free"},{t:"6PM–7PM",s:"occ",lbl:"Backend session"},{t:"7PM–10PM",s:"free",lbl:"Free"}],px:44,py:60,pinColor:"#34d399"},
  {id:9,name:"Maker Space",building:"Lab Wing",floor:1,cap:10,status:"soon",session:null,nextFree:"Available until 5:00 PM",equip:["Whiteboard","3D Printer","Soldering Kits","AC"],slots:[{t:"Now–5PM",s:"free",lbl:"Free"},{t:"5PM–8PM",s:"occ",lbl:"Electronics workshop"},{t:"8PM–10PM",s:"free",lbl:"Free"}],px:56,py:58,pinColor:"#fbbf24"},
  {id:10,name:"Media Room 1",building:"Media Lab",floor:1,cap:6,status:"available",session:null,nextFree:null,equip:["Green Screen","Lighting Rig","Screen","AC"],slots:[{t:"Now–7PM",s:"free",lbl:"Free"},{t:"7PM–9PM",s:"occ",lbl:"Video editing session"}],px:72,py:68,pinColor:"#34d399"},
  {id:11,name:"Studio B",building:"Media Lab",floor:2,cap:4,status:"occupied",session:"Design critique session",nextFree:"8:00 PM",equip:["Drawing Tablets","Reference Screen","AC"],slots:[{t:"2PM–8PM",s:"occ",lbl:"Design critique"},{t:"8PM–11PM",s:"free",lbl:"Free"}],px:78,py:76,pinColor:"#f87171"},
  {id:12,name:"ECE Lab 2",building:"ECE Block",floor:1,cap:14,status:"available",session:null,nextFree:null,equip:["Oscilloscopes","Workbenches","Projector","AC"],slots:[{t:"Now–5PM",s:"free",lbl:"Free"},{t:"5PM–7PM",s:"occ",lbl:"Circuits lab"},{t:"7PM–10PM",s:"free",lbl:"Free"}],px:55,py:15,pinColor:"#34d399"},
  {id:13,name:"Seminar Room ECE",building:"ECE Block",floor:2,cap:30,status:"occupied",session:"VLSI lecture session",nextFree:"6:00 PM",equip:["Projector","Whiteboard","AC","Podium","Mic"],slots:[{t:"2PM–6PM",s:"occ",lbl:"VLSI Lecture"},{t:"6PM–10PM",s:"free",lbl:"Free"}],px:62,py:12,pinColor:"#f87171"},
  {id:14,name:"Hostel Common Room",building:"Hostel B",floor:1,cap:10,status:"available",session:null,nextFree:null,equip:["TV Screen","Whiteboard"],slots:[{t:"Now–9PM",s:"free",lbl:"Open"},{t:"9PM–11PM",s:"soon",lbl:"Reserved"}],px:16,py:62,pinColor:"#34d399"},
  {id:15,name:"CS Discussion Bay",building:"CS Building",floor:2,cap:8,status:"soon",session:null,nextFree:"Available until 6:00 PM",equip:["Whiteboard","Screen","Power Outlets"],slots:[{t:"Now–6PM",s:"free",lbl:"Free"},{t:"6PM–8PM",s:"occ",lbl:"Algo study group"},{t:"8PM–10PM",s:"free",lbl:"Free"}],px:25,py:40,pinColor:"#fbbf24"},
  {id:16,name:"Open Collab Hub",building:"Canteen Area",floor:1,cap:20,status:"available",session:null,nextFree:null,equip:["Whiteboard","Outdoor Seating","Power Outlets"],slots:[{t:"Now–9PM",s:"free",lbl:"Open"}],px:34,py:48,pinColor:"#34d399"},
  {id:17,name:"Rooftop Study Deck",building:"CS Building",floor:4,cap:12,status:"available",session:null,nextFree:null,equip:["Outdoor Seating","Whiteboard","Power Outlets"],slots:[{t:"Now–8PM",s:"free",lbl:"Open"},{t:"8PM–9PM",s:"soon",lbl:"Reserved"}],px:18,py:15,pinColor:"#34d399"},
  {id:18,name:"ML Research Lab",building:"CS Building",floor:3,cap:15,status:"occupied",session:"Neural Networks Collab",nextFree:"10:00 PM",equip:["High-End GPUs","Whiteboard","AC"],slots:[{t:"Now–10PM",s:"occ",lbl:"ML Collab"}],px:28,py:15,pinColor:"#f87171"},
  {id:19,name:"Ethics Studio",building:"Library",floor:4,cap:6,status:"available",session:null,nextFree:null,equip:["Comfortable Seating","Whiteboard"],slots:[{t:"Now–10PM",s:"free",lbl:"Open"}],px:70,py:40,pinColor:"#34d399"},
  {id:20,name:"IoT Playground",building:"Lab Wing",floor:1,cap:12,status:"available",session:null,nextFree:null,equip:["Sensors","Microcontrollers","Soldering"],slots:[{t:"Now–8PM",s:"free",lbl:"Open"}],px:52,py:65,pinColor:"#34d399"},
  {id:21,name:"UX Critique Pod",building:"Media Lab",floor:1,cap:5,status:"soon",session:null,nextFree:"Available until 4:00 PM",equip:["Figma TV","Whiteboard"],slots:[{t:"Now–4PM",s:"free",lbl:"Free"},{t:"4PM–6PM",s:"occ",lbl:"Design Review"}],px:70,py:75,pinColor:"#fbbf24"},
  {id:22,name:"Blockchain Hub",building:"ECE Block",floor:3,cap:10,status:"occupied",session:"Solidity Workshop",nextFree:"7:30 PM",equip:["Projector","Ethernet Ports"],slots:[{t:"Now–7:30PM",s:"occ",lbl:"Workshop"}],px:60,py:20,pinColor:"#f87171"},
  {id:23,name:"Game Dev Suite",building:"CS Building",floor:2,cap:8,status:"available",session:null,nextFree:null,equip:["VR Headsets","Consoles","High-end PCs"],slots:[{t:"Now–11PM",s:"free",lbl:"Open"}],px:30,py:32,pinColor:"#34d399"},
  {id:24,name:"Quiet Corner 4",building:"Library",floor:2,cap:2,status:"available",session:null,nextFree:null,equip:["Power Outlets"],slots:[{t:"Now–10PM",s:"free",lbl:"Open"}],px:72,py:25,pinColor:"#34d399"},
  {id:25,name:"Robotics Arena",building:"Lab Wing",floor:1,cap:20,status:"occupied",session:"Bot Wars Prep",nextFree:"9:00 PM",equip:["Testing Track","Tools","AC"],slots:[{t:"Now–9PM",s:"occ",lbl:"Bot Prep"}],px:45,py:55,pinColor:"#f87171"},
  {id:26,name:"Photography Darkroom",building:"Media Lab",floor:1,cap:4,status:"soon",session:null,nextFree:"Available until 6:00 PM",equip:["Developing Tanks","Enlargers"],slots:[{t:"Now–6PM",s:"free",lbl:"Free"},{t:"6PM–9PM",s:"occ",lbl:"Processing"}],px:76,py:65,pinColor:"#fbbf24"},
  {id:27,name:"Signal Processing Lab",building:"ECE Block",floor:1,cap:12,status:"available",session:null,nextFree:null,equip:["Spectrum Analyzers","AC"],slots:[{t:"Now–8PM",s:"free",lbl:"Open"}],px:58,py:10,pinColor:"#34d399"},
  {id:28,name:"Competitive Programming Pit",building:"CS Building",floor:1,cap:25,status:"occupied",session:"Mock Contest",nextFree:"8:30 PM",equip:["High Speed LAN","Whiteboard"],slots:[{t:"Now–8:30PM",s:"occ",lbl:"Mock Contest"}],px:24,py:32,pinColor:"#f87171"},
  {id:29,name:"Bio-Informatics Pod",building:"Lab Wing",floor:2,cap:6,status:"available",session:null,nextFree:null,equip:["Lab Bench","Screen"],slots:[{t:"Now–10PM",s:"free",lbl:"Open"}],px:48,py:50,pinColor:"#34d399"},
  {id:30,name:"Cybersecurity Bunker",building:"Hostel B",floor:1,cap:8,status:"occupied",session:"CTF Practice",nextFree:"11:00 PM",equip:["Shielded LAN","Whiteboard"],slots:[{t:"Now–11PM",s:"occ",lbl:"CTF Practice"}],px:12,py:65,pinColor:"#f87171"},
];

// ── State ──
let selectedRoom = null;
let activeFilter = 'all';
let activeFloor = '1';
let minCap = 2;
let canvas, ctx, W, H;
let tick = 0;

// ── Persistence ──
const currentUserEmail = localStorage.getItem('bridgr_currentUser');
const savedRooms = JSON.parse(localStorage.getItem('bridgr_rooms') || '[]');
if (savedRooms && savedRooms.length > 0) {
  savedRooms.forEach(sr => {
    const idx = ROOMS.findIndex(r => r.id === sr.id);
    if (idx !== -1) ROOMS[idx] = sr;
  });
} else {
  localStorage.setItem('bridgr_rooms', JSON.stringify(ROOMS));
}

function saveRooms() {
  localStorage.setItem('bridgr_rooms', JSON.stringify(ROOMS));
}

// ── CLOCK ──
function updateClock() {
  const now = new Date();
  const h = now.getHours().toString().padStart(2,'0');
  const m = now.getMinutes().toString().padStart(2,'0');
  const s = now.getSeconds().toString().padStart(2,'0');
  document.getElementById('hudTime').textContent = `${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
updateClock();

// ── CANVAS ──
function initCanvas() {
  canvas = document.getElementById('floorCanvas');
  ctx = canvas.getContext('2d');
  resize();
  window.addEventListener('resize', resize);
  drawLoop();
}

function resize() {
  const el = document.getElementById('floorMap');
  W = canvas.width = el.offsetWidth;
  H = canvas.height = el.offsetHeight;
}

function drawLoop() {
  tick++;
  ctx.clearRect(0, 0, W, H);
  drawBg();
  drawGrid();
  drawZones();
  drawConnections();
  requestAnimationFrame(drawLoop);
}

function drawBg() {
  ctx.fillStyle = '#f8f9fa';
  ctx.fillRect(0, 0, W, H);
}

function drawGrid() {
  ctx.strokeStyle = 'rgba(23,30,25,0.06)';
  ctx.lineWidth = 1;
  const s = 50;
  for (let x = 0; x < W; x += s) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
  for (let y = 0; y < H; y += s) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }
  // Cross markers at intersections
  ctx.fillStyle = 'rgba(23,30,25,0.08)';
  for (let x = s; x < W; x += s) {
    for (let y = s; y < H; y += s) {
      ctx.fillRect(x-1, y-1, 2, 2);
    }
  }
}

const ZONES = [
  {label:"CS BUILDING",x:14,y:10,w:32,h:38,color:"rgba(155,109,255,0.06)",border:"rgba(155,109,255,0.15)"},
  {label:"ECE BLOCK",x:48,y:6,w:22,h:24,color:"rgba(251,191,36,0.05)",border:"rgba(251,191,36,0.12)"},
  {label:"LIBRARY",x:60,y:10,w:22,h:28,color:"rgba(74,158,255,0.05)",border:"rgba(74,158,255,0.12)"},
  {label:"LAB WING",x:36,y:44,w:28,h:22,color:"rgba(52,211,153,0.05)",border:"rgba(52,211,153,0.12)"},
  {label:"MEDIA LAB",x:64,y:58,w:20,h:24,color:"rgba(251,146,60,0.05)",border:"rgba(251,146,60,0.12)"},
  {label:"HOSTEL B",x:8,y:54,w:18,h:16,color:"rgba(244,114,182,0.04)",border:"rgba(244,114,182,0.1)"},
  {label:"CANTEEN",x:24,y:42,w:18,h:14,color:"rgba(34,211,238,0.04)",border:"rgba(34,211,238,0.1)"},
];

function drawZones() {
  ZONES.forEach(z => {
    const x=(z.x/100)*W, y=(z.y/100)*H, w=(z.w/100)*W, h=(z.h/100)*H;
    ctx.fillStyle = z.color;
    ctx.strokeStyle = z.border;
    ctx.lineWidth = 1;
    roundRect(ctx, x, y, w, h, 10);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#4a4a4a';
    ctx.font = `700 ${Math.max(9,W*0.009)}px 'JetBrains Mono', monospace`;
    ctx.letterSpacing = '0.08em';
    ctx.fillText(z.label, x+12, y+16);
  });
}

function drawConnections() {
  const visible = getFilteredRooms().filter(r => r.status === 'occupied');
  // Glowing halos around occupied rooms
  visible.forEach(r => {
    const rx = (r.px/100)*W, ry = (r.py/100)*H;
    const size = 18 + Math.sin(tick*0.04 + r.id)*3;
    const grad = ctx.createRadialGradient(rx,ry,0,rx,ry,size*2);
    grad.addColorStop(0, r.status==='occupied' ? 'rgba(248,113,113,0.15)' : 'rgba(52,211,153,0.1)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.beginPath(); ctx.arc(rx, ry, size*2, 0, Math.PI*2); ctx.fill();
  });
}

function roundRect(c, x, y, w, h, r) {
  c.beginPath();
  c.moveTo(x+r,y); c.lineTo(x+w-r,y); c.quadraticCurveTo(x+w,y,x+w,y+r);
  c.lineTo(x+w,y+h-r); c.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  c.lineTo(x+r,y+h); c.quadraticCurveTo(x,y+h,x,y+h-r);
  c.lineTo(x,y+r); c.quadraticCurveTo(x,y,x+r,y);
  c.closePath();
}

// ── PINS ──
function renderPins() {
  const layer = document.getElementById('roomPins');
  layer.innerHTML = '';
  const visible = getFilteredRooms();
  visible.forEach(r => {
    const pin = document.createElement('div');
    pin.className = 'room-pin' + (selectedRoom?.id===r.id ? ' selected' : '');
    pin.style.left = r.px + '%';
    pin.style.top = r.py + '%';
    pin.style.setProperty('--pc', r.pinColor);
    const pw = Math.min(90, Math.max(60, r.cap * 4));
    const ph = 44;
    pin.innerHTML = `
      <div class="rp-outer" style="width:${pw}px;height:${ph}px;border-color:${r.pinColor};background:rgba(255,255,255,.95);box-shadow:0 2px 12px rgba(23,30,25,.12);">
        <span class="rp-label">${r.name.length > 14 ? r.name.slice(0,13)+'…' : r.name}</span>
        <span class="rp-cap">${r.cap} seats</span>
        <div class="rp-pulse" style="border-color:${r.pinColor};opacity:${r.status==='occupied'?'0.6':'0.3'}"></div>
      </div>
      ${r.session ? `<div class="rp-session-badge">${r.session}</div>` : ''}
    `;
    // Status dot overlay
    const dot = document.createElement('div');
    dot.style.cssText = `position:absolute;top:-5px;right:-5px;width:12px;height:12px;border-radius:50%;background:${r.pinColor};box-shadow:0 0 8px ${r.pinColor};border:2px solid #ffffff;z-index:2;`;
    pin.querySelector('.rp-outer').appendChild(dot);
    pin.addEventListener('click', () => openRoom(r));
    layer.appendChild(pin);
  });
}

// ── FILTER ──
function getFilteredRooms() {
  return ROOMS.filter(r => {
    const statusOk = activeFilter==='all' || r.status===activeFilter || (activeFilter==='whiteboard' && r.equip.some(e=>e.toLowerCase().includes('whiteboard'))) || (activeFilter==='screen' && r.equip.some(e=>e.toLowerCase().includes('screen'))) || (activeFilter==='ac' && r.equip.some(e=>e.toLowerCase().includes('ac')));
    const capOk = r.cap >= minCap;
    return statusOk && capOk;
  });
}

function renderList() {
  const list = document.getElementById('roomList');
  const rooms = getFilteredRooms();
  document.getElementById('listCount').textContent = rooms.length + ' rooms';
  list.innerHTML = rooms
    .map((r) => {
      const dotClass = r.status === "available" ? "s-available" : r.status === "occupied" ? "s-occupied" : "s-soon";
      const timeText = r.status === "occupied" ? `Free at ${r.nextFree}` : r.status === "soon" ? r.nextFree : "Free now";
      return `<div class="rli${selectedRoom?.id === r.id ? " selected" : ""}" data-id="${r.id}">
      <div class="rli-dot ${dotClass}"></div>
      <div class="rli-body">
        <div class="rli-name">${r.name}</div>
        <div class="rli-meta">${r.building} · Floor ${r.floor}</div>
        ${r.session ? `<div class="rli-session">"${r.session}"</div>` : ""}
        <div class="rli-equip">${r.equip.slice(0, 3).map((eq) => `<span class="rli-tag">${eq}</span>`).join("")}</div>
      </div>
      <div class="rli-right">
        <div><div class="rli-cap">${r.cap}</div><div class="rli-cap-lbl">seats</div></div>
        <div class="rli-time">${timeText}</div>
      </div>
    </div>`;
    })
    .join("");
  list.querySelectorAll(".rli").forEach((el) => {
    el.addEventListener("click", () => {
      const r = ROOMS.find((x) => x.id === +el.dataset.id);
      openRoom(r);
    });
  });
}

function updateHud() {
  const rooms = ROOMS;
  document.getElementById('hudFree').textContent = rooms.filter(r=>r.status==='available').length;
  document.getElementById('hudOcc').textContent = rooms.filter(r=>r.status==='occupied').length;
  document.getElementById('hudSoon').textContent = rooms.filter(r=>r.status==='soon').length;
}

// ── ROOM DETAIL CARD ──
function openRoom(r) {
  selectedRoom = r;
  const isAvail = r.status === 'available';
  const isSoon = r.status === 'soon';

  // Glow color
  const card = document.getElementById('roomCard');
  const glow = document.getElementById('rcGlow');
  glow.style.background = `radial-gradient(ellipse at center, ${r.pinColor}33, transparent 70%)`;

  // Status bar
  document.getElementById('rcDot').style.cssText = `background:${r.pinColor};box-shadow:0 0 8px ${r.pinColor}`;
  document.getElementById('rcStatusText').textContent = r.status === 'available' ? 'AVAILABLE' : r.status === 'occupied' ? 'OCCUPIED' : 'BOOKED SOON';
  document.getElementById('rcStatusText').style.color = r.pinColor;
  document.getElementById('rcBuilding').textContent = `${r.building} · Floor ${r.floor}`;

  document.getElementById('rcName').textContent = r.name;
  document.getElementById('rcSession').textContent = r.session ? `"${r.session}"` : '';
  document.getElementById('rcCap').textContent = r.cap;
  document.getElementById('rcFloor').textContent = r.floor;
  document.getElementById('rcUntil').textContent = r.nextFree ?? (isAvail ? '✓' : '—');
  document.getElementById('rcUntilLbl').textContent = r.status === 'occupied' ? 'free at' : r.status === 'soon' ? 'until' : 'status';
  document.getElementById('rcEquip').innerHTML = r.equip.map(e=>`<span class="rc-eq-tag">${e}</span>`).join('');
  document.getElementById('rcSlots').innerHTML = r.slots.map(s=>`<div class="rc-slot slot-${s.s}">${s.t} · ${s.lbl}</div>`).join('');

  const btn = document.getElementById('rcBook');
  const hint = document.getElementById('rcHint');
  btn.textContent = isAvail ? 'Claim this room →' : isSoon ? 'Join the waitlist (fingers crossed)' : 'Nope. Someone got here first.';
  btn.className = 'rc-book ' + (isAvail ? 'can-book' : isSoon ? 'soon-book' : 'no-book');
  hint.textContent = isAvail ? `Empty and waiting for you · ${r.cap} seats` : r.status === 'occupied' ? `Occupied until ${r.nextFree}. Go touch grass until then.` : `Someone\'s eyeing this room. Grab it before they do.`;

  card.classList.add('open');
  renderPins();
  renderList();
}

document.getElementById('rcClose').addEventListener('click', () => {
  document.getElementById('roomCard').classList.remove('open');
  selectedRoom = null;
  renderPins();
  renderList();
});

document.getElementById('rcBook').addEventListener('click', () => {
  if (!selectedRoom || selectedRoom.status === 'occupied') return;
  document.getElementById('bmTitle').textContent = selectedRoom.name;
  document.getElementById('bookBackdrop').classList.add('open');
});

// ── BOOKING MODAL ──
document.getElementById('bmClose').addEventListener('click', closeBooking);
document.getElementById('bookBackdrop').addEventListener('click', e => { if(e.target.id==='bookBackdrop') closeBooking(); });
function closeBooking() { document.getElementById('bookBackdrop').classList.remove('open'); }

document.getElementById('bmDurations').addEventListener('click', e => {
  const b = e.target.closest('.dur-btn');
  if (!b) return;
  document.querySelectorAll('.dur-btn').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
});

document.getElementById('bmConfirm').addEventListener('click', () => {
  const sessionTitle = document.getElementById('bmName').value.trim();
  if (!sessionTitle) { document.getElementById('bmName').style.borderColor='var(--orange)'; document.getElementById('bmName').focus(); return; }
  
  if (selectedRoom) {
    selectedRoom.status = 'occupied';
    selectedRoom.session = sessionTitle;
    selectedRoom.creator = currentUserEmail;
    selectedRoom.pinColor = '#f87171'; // Red for occupied
    
    // Update the main ROOMS array
    const idx = ROOMS.findIndex(r => r.id === selectedRoom.id);
    if (idx !== -1) ROOMS[idx] = selectedRoom;
    
    saveRooms();
  }

  const btn = document.getElementById('bmConfirm');
  btn.textContent = '🎉 Room is yours. Don\'t ghost it.';
  btn.style.background = 'linear-gradient(135deg,#34d399,#22d3ee)';
  btn.disabled = true;
  
  setTimeout(() => { 
    closeBooking(); 
    btn.textContent='Confirm booking ✓'; 
    btn.style.background=''; 
    btn.disabled=false; 
    renderPins();
    renderList();
    updateHud();
    if (selectedRoom) openRoom(selectedRoom);
  }, 2200);
});

document.addEventListener('keydown', e => { if(e.key==='Escape'){closeBooking(); document.getElementById('roomCard').classList.remove('open'); selectedRoom=null; renderPins(); renderList();}});

// ── FILTER WIRING ──
document.getElementById('filterRow').addEventListener('click', e => {
  const btn = e.target.closest('.fr-btn');
  if (!btn) return;
  document.querySelectorAll('.fr-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  activeFilter = btn.dataset.f;
  renderPins(); renderList();
});

document.getElementById('capSlider').addEventListener('input', function() {
  minCap = +this.value;
  document.getElementById('capVal').textContent = minCap + '+';
  renderPins(); renderList();
});

document.querySelectorAll('.fl-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.fl-tab').forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    activeFloor = tab.dataset.floor;
    // Filter rooms by floor (loose match)
    const floorNum = parseInt(activeFloor) || null;
    ROOMS.forEach(r => r._hidden = floorNum ? r.floor !== floorNum : false);
    renderPins(); renderList();
  });
});

// ── INIT ──
initCanvas();
renderPins();
renderList();
updateHud();
// Periodic re-render for animations
setInterval(() => { renderPins(); }, 2000);
