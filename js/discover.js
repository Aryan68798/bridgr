/* ── Bridgr Discover Page ── */

const STUDENTS = [
  { id: 1, name: "Arjun Rao", initials: "AR", dept: "CS · 3rd Year", location: "Block A, Room 304", status: "online", title: "React Wizard 🧙", cred: 847, bg: "linear-gradient(135deg,#9b6dff,#4a9eff)", skills: [{ s: "React", c: "badge-purple" }, { s: "Next.js", c: "badge-blue" }, { s: "TypeScript", c: "badge-cyan" }, { s: "Tailwind", c: "badge-blue" }], sessions: ['Fixed hydration bug for Riya — 7 min ⚡', 'Explained useEffect to 3 traumatised freshers', 'Reviewed auth flow, saved Kabir\'s project'], building: "Block A", year: "3" },
  { id: 2, name: "Sneha Kumar", initials: "SK", dept: "CS · 4th Year", location: "Library, 2nd floor", status: "online", title: "Bug Slayer 🔪", cred: 1247, bg: "linear-gradient(135deg,#fb923c,#f472b6)", skills: [{ s: "C++", c: "badge-orange" }, { s: "DSA", c: "badge-pink" }, { s: "Algorithms", c: "badge-pink" }, { s: "Competitive", c: "badge-orange" }], sessions: ['Crushed a DP problem with Ravi — 12 min', 'Explained trees til it clicked', 'Debugged linked list reversal at midnight'], building: "Library", year: "4" },
  { id: 3, name: "Priya Verma", initials: "PV", dept: "IT · 3rd Year", location: "Hostel B, Common Room", status: "busy", title: "StackOverflow Warrior 🏹", cred: 623, bg: "linear-gradient(135deg,#34d399,#22d3ee)", skills: [{ s: "Python", c: "badge-green" }, { s: "ML", c: "badge-cyan" }, { s: "Pandas", c: "badge-green" }, { s: "scikit-learn", c: "badge-cyan" }], sessions: ['Debugged LSTM model nobody else understood — 15 min', 'Explained gradient descent with actual clarity', 'Pandas groupby for 2 people at once, somehow'], building: "Hostel B", year: "3" },
  { id: 4, name: "Rahul Tiwari", initials: "RT", dept: "ECE · 2nd Year", location: "Block D, Lab", status: "online", title: "Git God 🔱", cred: 512, bg: "linear-gradient(135deg,#fbbf24,#fb923c)", skills: [{ s: "Git", c: "badge-orange" }, { s: "Docker", c: "badge-blue" }, { s: "Linux", c: "badge-orange" }, { s: "DevOps", c: "badge-cyan" }], sessions: ['Rescued a force-push disaster (😱)', 'Fixed merge conflicts for a whole team of 4', 'Docker compose setup — saved 3 hours in 10 min'], building: "Block D", year: "2" },
  { id: 5, name: "Kavya Menon", initials: "KM", dept: "Design · 3rd Year", location: "Lab Wing, Studio", status: "online", title: "Figma Witch 🎨", cred: 441, bg: "linear-gradient(135deg,#f472b6,#9b6dff)", skills: [{ s: "UI Design", c: "badge-pink" }, { s: "Figma", c: "badge-purple" }, { s: "CSS", c: "badge-blue" }, { s: "UX", c: "badge-pink" }], sessions: ['Redesigned onboarding until Raj wept with joy', 'Color palette session — saved a brand from doom', 'Responsive layout fix — works on every phone now'], building: "Lab Wing", year: "3" },
  { id: 6, name: "Vikram Singh", initials: "VS", dept: "CS · 4th Year", location: "Block A, 5th floor", status: "busy", title: "Kernel Ninja 🐧", cred: 389, bg: "linear-gradient(135deg,#22d3ee,#4a9eff)", skills: [{ s: "Linux", c: "badge-cyan" }, { s: "C", c: "badge-blue" }, { s: "Systems", c: "badge-cyan" }, { s: "Shell", c: "badge-blue" }], sessions: ["Explained system calls", "Fixed segfault — 20 min", "OS scheduling concepts"], building: "Block A", year: "4" },
  { id: 7, name: "Ananya Bose", initials: "AB", dept: "IT · 2nd Year", location: "Block B, 2nd floor", status: "online", title: "SQL Sorcerer 🔮", cred: 298, bg: "linear-gradient(135deg,#9b6dff,#f472b6)", skills: [{ s: "SQL", c: "badge-purple" }, { s: "PostgreSQL", c: "badge-blue" }, { s: "MongoDB", c: "badge-green" }, { s: "Redis", c: "badge-orange" }], sessions: ["Explained JOINs with diagrams", "Database design for project", "Fixed N+1 query bug"], building: "Block B", year: "2" },
  { id: 8, name: "Deepak Nair", initials: "DN", dept: "CS · 1st Year", location: "Block C, 1st floor", status: "online", title: "Regex Demon 👹", cred: 187, bg: "linear-gradient(135deg,#fb923c,#fbbf24)", skills: [{ s: "Python", c: "badge-green" }, { s: "Regex", c: "badge-orange" }, { s: "Scripting", c: "badge-orange" }, { s: "Bash", c: "badge-cyan" }], sessions: ["Wrote parser regex for Meera", "Explained capture groups", "Helped with web scraping"], building: "Block C", year: "1" },
  { id: 9, name: "Riya Shah", initials: "RS", dept: "ECE · 3rd Year", location: "Library, Quiet Zone", status: "offline", title: "Circuit Breaker ⚡", cred: 356, bg: "linear-gradient(135deg,#fbbf24,#34d399)", skills: [{ s: "VLSI", c: "badge-cyan" }, { s: "Verilog", c: "badge-green" }, { s: "MATLAB", c: "badge-orange" }, { s: "DSP", c: "badge-orange" }], sessions: ["Simulated filter circuit", "Explained FFT conceptually", "Verilog module debugging"], building: "Library", year: "3" },
  { id: 10, name: "Kabir Joshi", initials: "KJ", dept: "CS · 2nd Year", location: "Block A, Lounge", status: "online", title: "API Architect 🏗️", cred: 432, bg: "linear-gradient(135deg,#4a9eff,#34d399)", skills: [{ s: "Node.js", c: "badge-green" }, { s: "REST", c: "badge-blue" }, { s: "GraphQL", c: "badge-cyan" }, { s: "Express", c: "badge-green" }], sessions: ["Built auth middleware with Priya", "Explained REST vs GraphQL", "JWT debugging session"], building: "Block A", year: "2" },
  { id: 11, name: "Meera Pillai", initials: "MP", dept: "Maths · 4th Year", location: "Block B, Seminar Hall", status: "busy", title: "Math Oracle 🔢", cred: 567, bg: "linear-gradient(135deg,#f472b6,#fbbf24)", skills: [{ s: "Probability", c: "badge-pink" }, { s: "Linear Algebra", c: "badge-purple" }, { s: "Calculus", c: "badge-orange" }, { s: "Stats", c: "badge-pink" }], sessions: ["Explained eigenvalues with examples", "PCA derivation from scratch", "Bayes theorem for ML prep"], building: "Block B", year: "4" },
  { id: 12, name: "Rohan Das", initials: "RD", dept: "CS · 3rd Year", location: "Lab Wing, Dev Room", status: "online", title: "Mobile Dev Maverick 📱", cred: 378, bg: "linear-gradient(135deg,#22d3ee,#9b6dff)", skills: [{ s: "React Native", c: "badge-cyan" }, { s: "Flutter", c: "badge-blue" }, { s: "Firebase", c: "badge-orange" }, { s: "iOS", c: "badge-purple" }], sessions: ["Fixed nav state bug — 8 min", "Explained Expo workflow", "Firebase auth setup session"], building: "Lab Wing", year: "3" },
  { id: 13, name: "Tanya Kapoor", initials: "TK", dept: "CS · 1st Year", location: "Block C, Study Room", status: "online", title: "Frontend Fairy 🧚", cred: 143, bg: "linear-gradient(135deg,#fb923c,#9b6dff)", skills: [{ s: "HTML/CSS", c: "badge-orange" }, { s: "JavaScript", c: "badge-orange" }, { s: "Animations", c: "badge-purple" }, { s: "React", c: "badge-blue" }], sessions: ["CSS grid layout help", "JS closure explanation", "Flexbox debugging session"], building: "Block C", year: "1" },
  { id: 14, name: "Sameer Verma", initials: "SV", dept: "IT · 4th Year", location: "Block D, Project Room", status: "busy", title: "Cloud Cowboy ☁️", cred: 689, bg: "linear-gradient(135deg,#34d399,#4a9eff)", skills: [{ s: "AWS", c: "badge-cyan" }, { s: "Kubernetes", c: "badge-blue" }, { s: "Terraform", c: "badge-green" }, { s: "CI/CD", c: "badge-cyan" }], sessions: ["Set up GitHub Actions pipeline", "Explained EC2 vs Lambda", "K8s pod crash debugging"], building: "Block D", year: "4" },
  { id: 15, name: "Divya Krishnan", initials: "DK", dept: "CS · 2nd Year", location: "Library, Ground Floor", status: "online", title: "Open Source Goblin 👺", cred: 312, bg: "linear-gradient(135deg,#9b6dff,#22d3ee)", skills: [{ s: "Git", c: "badge-purple" }, { s: "Open Source", c: "badge-cyan" }, { s: "Python", c: "badge-green" }, { s: "Testing", c: "badge-blue" }], sessions: ["First PR walkthrough for juniors", "Explained contributing guidelines", "pytest session — 20 min"], building: "Library", year: "2" },
  { id: 16, name: "Aditya Patel", initials: "AP", dept: "ECE · 3rd Year", location: "Block A, Rooftop Study", status: "online", title: "Embedded Wizard 🤖", cred: 445, bg: "linear-gradient(135deg,#fbbf24,#f472b6)", skills: [{ s: "Arduino", c: "badge-orange" }, { s: "Raspberry Pi", c: "badge-pink" }, { s: "C", c: "badge-orange" }, { s: "IoT", c: "badge-cyan" }], sessions: ["Sensor wiring for project", "Explained I2C protocol", "Arduino servo control fix"], building: "Block A", year: "3" },
  { id: 17, name: "Nisha Gupta", initials: "NG", dept: "Design · 2nd Year", location: "Lab Wing, Maker Space", status: "busy", title: "Motion Design Maven 🌀", cred: 267, bg: "linear-gradient(135deg,#f472b6,#22d3ee)", skills: [{ s: "After Effects", c: "badge-pink" }, { s: "Lottie", c: "badge-purple" }, { s: "CSS Animations", c: "badge-blue" }, { s: "GSAP", c: "badge-cyan" }], sessions: ["Animated SVG for Rohan", "Lottie integration help", "Spring animation explainer"], building: "Lab Wing", year: "2" },
  { id: 18, name: "Harish Babu", initials: "HB", dept: "CS · 4th Year", location: "Block B, Corner Desk", status: "online", title: "Security Specter 👻", cred: 534, bg: "linear-gradient(135deg,#4a9eff,#fb923c)", skills: [{ s: "Cybersecurity", c: "badge-blue" }, { s: "Pen Testing", c: "badge-orange" }, { s: "CTF", c: "badge-orange" }, { s: "SQL Injection", c: "badge-cyan" }], sessions: ["Explained XSS to web devs", "CTF hint session", "Auth vulnerabilities walkthrough"], building: "Block B", year: "4" },
  { id: 19, name: "Ishaan Khatter", initials: "IK", dept: "Design · 3rd Year", location: "Block D, Room 202", status: "online", title: "3D Dreamer 🧊", cred: 321, bg: "linear-gradient(135deg,#f472b6,#fb923c)", skills: [{ s: "Blender", c: "badge-pink" }, { s: "Unity", c: "badge-orange" }, { s: "C#", c: "badge-blue" }], sessions: ["Built a VR world in 2 hours", "Rigging walkthrough for 3 people", "Unity physics bug fix"], building: "Block D", year: "3" },
  { id: 20, name: "Zoya Akhtar", initials: "ZA", dept: "IT · 4th Year", location: "Block A, Room 501", status: "busy", title: "Network Nomad 🌐", cred: 412, bg: "linear-gradient(135deg,#22d3ee,#9b6dff)", skills: [{ s: "Networking", c: "badge-cyan" }, { s: "Security", c: "badge-purple" }, { s: "Cisco", c: "badge-blue" }], sessions: ["Fixed campus Wi-Fi node", "Penetration testing session", "Explained OSI model with cake"], building: "Block A", year: "4" },
  { id: 21, name: "Karan Johar", initials: "KJ", dept: "CS · 1st Year", location: "Block C, Cafeteria", status: "online", title: "Logic Legend 🧠", cred: 156, bg: "linear-gradient(135deg,#fbbf24,#f472b6)", skills: [{ s: "Java", c: "badge-orange" }, { s: "C++", c: "badge-pink" }, { s: "DSA", c: "badge-pink" }], sessions: ["Solved 5 LeetCode mediums in a row", "Recursion explanation session", "Java setup for classmates"], building: "Block C", year: "1" },
  { id: 22, name: "Alia Bhatt", initials: "AB", dept: "Design · 2nd Year", location: "Lab Wing, Prototyping", status: "online", title: "Pixel Pilot ✈️", cred: 278, bg: "linear-gradient(135deg,#34d399,#22d3ee)", skills: [{ s: "Illustrator", c: "badge-green" }, { s: "Photoshop", c: "badge-cyan" }, { s: "XD", c: "badge-blue" }], sessions: ["Vectorized 10 sketches for peers", "Photoshop masking workshop", "UI layout critique"], building: "Lab Wing", year: "2" },
  { id: 23, name: "Ranbir Kapoor", initials: "RK", dept: "CS · 4th Year", location: "Block A, 4th Floor", status: "busy", title: "Cloud King 👑", cred: 734, bg: "linear-gradient(135deg,#9b6dff,#f472b6)", skills: [{ s: "Azure", c: "badge-purple" }, { s: "GCP", c: "badge-pink" }, { s: "DevOps", c: "badge-purple" }], sessions: ["Deployed 5 production apps", "Cloud cost optimization session", "Kubernetes cluster setup"], building: "Block A", year: "4" },
  { id: 24, name: "Deepika Padukone", initials: "DP", dept: "Maths · 3rd Year", location: "Library, North Wing", status: "online", title: "Stat Star ⭐", cred: 589, bg: "linear-gradient(135deg,#f472b6,#fbbf24)", skills: [{ s: "Stats", c: "badge-pink" }, { s: "Maths", c: "badge-orange" }, { s: "Python", c: "badge-green" }], sessions: ["Statistical analysis for biology", "Explained P-values correctly", "Linear regression walkthrough"], building: "Library", year: "3" },
  { id: 25, name: "Ranveer Singh", initials: "RS", dept: "ECE · 2nd Year", location: "Block D, Lab B", status: "online", title: "Hardware Hero 🛠️", cred: 423, bg: "linear-gradient(135deg,#fb923c,#9b6dff)", skills: [{ s: "Robotics", c: "badge-orange" }, { s: "Hardware", c: "badge-purple" }, { s: "C", c: "badge-blue" }], sessions: ["Built a line follower in 1 hour", "Soldering workshop for 5 people", "Arduino debugging session"], building: "Block D", year: "2" },
  { id: 26, name: "Shraddha Kapoor", initials: "SK", dept: "IT · 3rd Year", location: "Block B, Room 205", status: "online", title: "Go Guru 🐹", cred: 512, bg: "linear-gradient(135deg,#22d3ee,#34d399)", skills: [{ s: "Go", c: "badge-cyan" }, { s: "Backend", c: "badge-green" }, { s: "Docker", c: "badge-blue" }], sessions: ["Optimized API performance by 40%", "Explained Go channels", "Dockerized a complex microservice"], building: "Block B", year: "3" },
  { id: 27, name: "Varun Dhawan", initials: "VD", dept: "CS · 2nd Year", location: "Block C, Lab A", status: "busy", title: "Vue Voyager 🛸", cred: 367, bg: "linear-gradient(135deg,#fbbf24,#22d3ee)", skills: [{ s: "Vue", c: "badge-orange" }, { s: "Nuxt", c: "badge-cyan" }, { s: "Firebase", c: "badge-orange" }], sessions: ["Fixed SSR bug in Nuxt", "Vuex state management help", "Firebase deployment session"], building: "Block C", year: "2" },
  { id: 28, name: "Sara Ali Khan", initials: "SA", dept: "Design · 1st Year", location: "Block D, Studio 1", status: "online", title: "Style Sage 🌿", cred: 189, bg: "linear-gradient(135deg,#34d399,#f472b6)", skills: [{ s: "CSS", c: "badge-green" }, { s: "Tailwind", c: "badge-pink" }, { s: "UI", c: "badge-green" }], sessions: ["Fixed 20 responsive bugs", "Tailwind config walkthrough", "Flexbox vs Grid explanation"], building: "Block D", year: "1" },
  { id: 29, name: "Kartik Aaryan", initials: "KA", dept: "CS · 4th Year", location: "Block A, Room 303", status: "online", title: "DevOps Deity ⚡", cred: 645, bg: "linear-gradient(135deg,#9b6dff,#22d3ee)", skills: [{ s: "Jenkins", c: "badge-purple" }, { s: "Ansible", c: "badge-cyan" }, { s: "Kubernetes", c: "badge-blue" }], sessions: ["Automated CI/CD for 3 teams", "Ansible playbook debugging", "K8s manifest optimization"], building: "Block A", year: "4" },
  { id: 30, name: "Janhvi Kapoor", initials: "JK", dept: "IT · 3rd Year", location: "Block B, Room 404", status: "busy", title: "AI Alchemist 🧪", cred: 567, bg: "linear-gradient(135deg,#f472b6,#fb923c)", skills: [{ s: "PyTorch", c: "badge-pink" }, { s: "TensorFlow", c: "badge-orange" }, { s: "ML", c: "badge-orange" }], sessions: ["Trained a CNN to 98% accuracy", "Explainable AI workshop", "PyTorch tensor operations help"], building: "Block B", year: "3" },
  { id: 31, name: "Vicky Kaushal", initials: "VK", dept: "ECE · 4th Year", location: "Block D, Room 101", status: "online", title: "Signal Sultan 📡", cred: 534, bg: "linear-gradient(135deg,#4a9eff,#fbbf24)", skills: [{ s: "DSP", c: "badge-blue" }, { s: "Audio", c: "badge-orange" }, { s: "Python", c: "badge-green" }], sessions: ["Processed 100+ audio samples", "Filter design session", "Python for signal analysis"], building: "Block D", year: "4" },
  { id: 32, name: "Katrina Kaif", initials: "KK", dept: "CS · 2nd Year", location: "Block A, Room 202", status: "online", title: "Code Queen 👸", cred: 443, bg: "linear-gradient(135deg,#34d399,#9b6dff)", skills: [{ s: "C++", c: "badge-green" }, { s: "Algorithms", c: "badge-purple" }, { s: "DSA", c: "badge-purple" }], sessions: ["Won 3 hackathons back-to-back", "Graph theory walkthrough", "Dynamic programming session"], building: "Block A", year: "2" },
  { id: 33, name: "Ayushmann Khurrana", initials: "AK", dept: "IT · 3rd Year", location: "Block B, Room 303", status: "busy", title: "Bot Builder 🤖", skills: [{ s: "Discord.js", c: "badge-blue" }, { s: "Python", c: "badge-green" }, { s: "Automation", c: "badge-blue" }], sessions: ["Built 5 Discord bots for campus", "Python automation scripts help", "API integration session"], building: "Block B", year: "3" },
  { id: 34, name: "Rajkumar Rao", initials: "RR", dept: "CS · 4th Year", location: "Block A, Room 505", status: "online", title: "Rust Rebel 🦀", skills: [{ s: "Rust", c: "badge-orange" }, { s: "WebAssembly", c: "badge-blue" }, { s: "Backend", c: "badge-orange" }], sessions: ["Rewrote API in Rust — 10x faster", "WASM integration workshop", "Memory safety explanation"], building: "Block A", year: "4" },
  { id: 35, name: "Taapsee Pannu", initials: "TP", dept: "Design · 3rd Year", location: "Lab Wing, Media Room", status: "online", title: "Motion Muse 🎬", cred: 367, bg: "linear-gradient(135deg,#fbbf24,#34d399)", skills: [{ s: "Lottie", c: "badge-orange" }, { s: "Rive", c: "badge-green" }, { s: "GSAP", c: "badge-green" }], sessions: ["Created 20+ web animations", "Rive walkthrough for designers", "GSAP performance session"], building: "Lab Wing", year: "3" },
  { id: 36, name: "Bobby Deol", initials: "BD", dept: "ECE · 3rd Year", location: "Block D, Room 404", status: "online", title: "Power Player ⚡", cred: 423, bg: "linear-gradient(135deg,#fb923c,#f472b6)", skills: [{ s: "Power Systems", c: "badge-orange" }, { s: "Electrical", c: "badge-pink" }, { s: "C", c: "badge-orange" }], sessions: ["Designed a mini smart grid", "Electrical circuit help", "C for microcontrollers"], building: "Block D", year: "3" },
  { id: 37, name: "Ayush Rai", initials: "AR", dept: "CS · 1st Year", location: "Block C, Room 101", status: "online", title: "Swift Scout 🧭", cred: 143, bg: "linear-gradient(135deg,#9b6dff,#fbbf24)", skills: [{ s: "Swift", c: "badge-purple" }, { s: "iOS", c: "badge-orange" }, { s: "UI", c: "badge-purple" }], sessions: ["Built an iOS app in a week", "SwiftUI basics walkthrough", "Mobile app design session"], building: "Block C", year: "1" },
  { id: 38, name: "Tripti Dimri", initials: "TD", dept: "IT · 2nd Year", location: "Block B, Room 102", status: "busy", title: "DB Dean 🏫", cred: 312, bg: "linear-gradient(135deg,#f472b6,#22d3ee)", skills: [{ s: "NoSQL", c: "badge-pink" }, { s: "DynamoDB", c: "badge-cyan" }, { s: "Firebase", c: "badge-pink" }], sessions: ["Modeled a complex NoSQL schema", "DynamoDB indexing session", "Firebase real-time sync help"], building: "Block B", year: "2" },
  { id: 39, name: "Sanya Mirza", initials: "SM", dept: "CS · 2nd Year", location: "Block A, Room 201", status: "online", title: "Data Diva 📊", cred: 445, bg: "linear-gradient(135deg,#34d399,#fbbf24)", skills: [{ s: "Python", c: "badge-green" }, { s: "R", c: "badge-orange" }, { s: "Tableau", c: "badge-orange" }], sessions: ["Data visualization for research", "R programming help", "Pandas data cleaning session"], building: "Block A", year: "2" },
  { id: 40, name: "Bobby Deol", initials: "BD", dept: "ECE · 3rd Year", location: "Block D, Room 404", status: "online", title: "Power Player ⚡", cred: 423, bg: "linear-gradient(135deg,#fb923c,#f472b6)", skills: [{ s: "Power Systems", c: "badge-orange" }, { s: "Electrical", c: "badge-pink" }, { s: "C", c: "badge-orange" }], sessions: ["Designed a mini smart grid", "Electrical circuit help", "C for microcontrollers"], building: "Block D", year: "3" },
];

let filtered = [...STUDENTS];
let activePing = null;

// ── Render ──
function renderCards(list) {
  const grid = document.getElementById('studentGrid');
  const empty = document.getElementById('emptyState');
  document.getElementById('countLabel').textContent = list.length;
  const lbl = document.getElementById('filterMeta');
  if (lbl) lbl.innerHTML = `<strong id="countLabel">${list.length}</strong> genius${list.length === 1 ? '' : 'es'} found`;
  if (!list.length) { grid.innerHTML = ''; empty.style.display = 'block'; return; }
  empty.style.display = 'none';
  grid.innerHTML = list.map((s, i) => `
    <div class="s-card" style="animation-delay:${i * 0.05}s" data-id="${s.id}">
      <div class="card-top">
        <div class="c-avatar" style="background:${s.bg}">
          ${s.initials}
          <span class="status-dot ${s.status}"></span>
        </div>
        <div class="card-meta">
          <div class="c-name">${s.name}</div>
          <div class="c-dept">${s.dept}</div>
          <div class="c-location">📍 ${s.location}</div>
        </div>
        <div class="c-cred">
          <div class="cred-num">${s.cred}</div>
          <div class="cred-label">karma points</div>
        </div>
      </div>
      <div class="c-title" style="background:${s.bg};-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-weight:700">${s.title}</div>
      <div>
        <div class="c-powers-label">⚡ SUPERPOWERS</div>
        <div class="c-powers">${s.skills.map(k => `<span class="power-badge ${k.c}">${k.s}</span>`).join('')}</div>
      </div>
      <div class="c-sessions">
        <div class="session-label">🕐 RECENT SESSIONS</div>
        ${s.sessions.slice(0, 2).map(r => `<div class="session-item">${r}<span class="session-time">✓</span></div>`).join('')}
      </div>
      <div class="card-footer">
        <button class="btn-ping" data-id="${s.id}">Ping them ⚡</button>
        <button class="btn-profile">View →</button>
      </div>
    </div>
  `).join('');

  // Ping buttons
  grid.querySelectorAll('.btn-ping').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); openModal(+btn.dataset.id); });
  });
}

// ── Filter logic ──
function applyFilters() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  const building = document.getElementById('buildingFilter').value;
  const dept = document.getElementById('deptFilter').value;
  const year = document.getElementById('yearFilter').value;
  const status = document.getElementById('statusFilter').value;
  const activeChip = document.querySelector('.chip.active')?.dataset.skill || 'all';

  filtered = STUDENTS.filter(s => {
    const skillStr = s.skills.map(k => k.s.toLowerCase()).join(' ');
    const matchQ = !q || s.name.toLowerCase().includes(q) || skillStr.includes(q) || s.title.toLowerCase().includes(q);
    const matchChip = activeChip === 'all' || skillStr.includes(activeChip.toLowerCase());
    const matchBuilding = building === 'all' || s.building === building;
    const matchDept = dept === 'all' || s.dept.toLowerCase().includes(dept.toLowerCase());
    const matchYear = year === 'all' || s.year === year;
    const matchStatus = status === 'all' || s.status === status || (status === 'busy' && s.status !== 'offline');
    return matchQ && matchChip && matchBuilding && matchDept && matchYear && matchStatus;
  });
  renderCards(filtered);
}

// ── Wire up inputs ──
document.getElementById('searchInput').addEventListener('input', e => {
  document.getElementById('clearBtn').classList.toggle('visible', !!e.target.value);
  applyFilters();
});
document.getElementById('clearBtn').addEventListener('click', () => {
  document.getElementById('searchInput').value = '';
  document.getElementById('clearBtn').classList.remove('visible');
  applyFilters();
});

document.getElementById('quickChips').addEventListener('click', e => {
  if (!e.target.matches('.chip')) return;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  e.target.classList.add('active');
  applyFilters();
});

['buildingFilter', 'deptFilter', 'yearFilter', 'statusFilter'].forEach(id => {
  document.getElementById(id).addEventListener('change', applyFilters);
});

// ── Modal ──
function openModal(id) {
  const s = STUDENTS.find(x => x.id === id);
  if (!s) return;
  activePing = s;
  document.getElementById('modalAvatar').style.background = s.bg;
  document.getElementById('modalAvatar').textContent = s.initials;
  document.getElementById('modalName').textContent = s.name;
  document.getElementById('modalRole').textContent = s.title;
  document.getElementById('modalMsg').value = '';
  document.getElementById('modalBackdrop').classList.add('open');
}
function closeModal() { document.getElementById('modalBackdrop').classList.remove('open'); }
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalBackdrop').addEventListener('click', e => { if (e.target.id === 'modalBackdrop') closeModal(); });

document.getElementById('modalSend').addEventListener('click', () => {
  const btn = document.getElementById('modalSend');
  btn.textContent = '🎉 Ping fired! They\'ll see it on campus.';
  btn.style.background = 'linear-gradient(135deg,#34d399,#22d3ee)';
  btn.disabled = true;
  setTimeout(() => { closeModal(); btn.textContent = 'Fire the ping ⚡'; btn.style.background = ''; btn.disabled = false; }, 1800);
});

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Init
renderCards(STUDENTS);
