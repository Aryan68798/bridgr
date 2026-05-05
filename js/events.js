/* ── Bridgr Events & Sessions ── */

const MOCK_EVENTS = [
  {
    id: 1,
    title: "Late Night DSA Grind",
    type: "Study Session",
    typeClass: "study",
    date: "Tonight at 10:00 PM",
    location: "Library, 2nd Floor",
    hostName: "Sneha Kumar",
    hostAv: "SK",
    hostBg: "var(--pink)",
    attendees: 4,
    maxAttendees: 8
  },
  {
    id: 2,
    title: "Intro to React Hooks",
    type: "Workshop",
    typeClass: "workshop",
    date: "Tomorrow at 4:00 PM",
    location: "Block A, Room 304",
    hostName: "Aryan Rai",
    hostAv: "AR",
    hostBg: "var(--orange)",
    attendees: 12,
    maxAttendees: 20
  },
  {
    id: 3,
    title: "Post-Exam Chill & Rant",
    type: "Casual",
    typeClass: "chill",
    date: "Friday at 6:00 PM",
    location: "Cafe Coffee Day",
    hostName: "Riya Shah",
    hostAv: "RS",
    hostBg: "var(--yellow)",
    attendees: 8,
    maxAttendees: 15
  },
  {
    id: 4,
    title: "OS Assignment Collab",
    type: "Study Session",
    typeClass: "study",
    date: "Saturday at 1:00 PM",
    location: "Hostel B, Common Room",
    hostName: "Vikram Singh",
    hostAv: "VS",
    hostBg: "var(--cyan)",
    attendees: 3,
    maxAttendees: 5
  }
];

// ── Render Events Grid ──
function renderEvents() {
  const grid = document.getElementById('eventsGrid');
  if (!grid) return;
  
  grid.innerHTML = MOCK_EVENTS.map(ev => `
    <div class="event-card">
      <div class="ec-top">
        <span class="ec-type ${ev.typeClass}">${ev.type}</span>
        <span class="ec-attendees">👥 ${ev.attendees}/${ev.maxAttendees}</span>
      </div>
      <h3 class="ec-title">${ev.title}</h3>
      <div class="ec-meta">
        <div class="ec-meta-item">📅 ${ev.date}</div>
        <div class="ec-meta-item">📍 ${ev.location}</div>
      </div>
      <div class="ec-host">
        <div class="ec-host-av" style="background:${ev.hostBg}">${ev.hostAv}</div>
        <div class="ec-host-name">Hosted by ${ev.hostName}</div>
        <button class="btn-join" onclick="joinEvent(this)">Join</button>
      </div>
    </div>
  `).join('');
}

// ── Interactivity ──
function joinEvent(btn) {
  if (btn.textContent === 'Joined ✓') return;
  btn.textContent = 'Joined ✓';
  btn.style.background = 'var(--green)';
  btn.style.color = '#fff';
  btn.style.borderColor = 'var(--green)';
}

document.addEventListener('DOMContentLoaded', () => {
  renderEvents();

  // Type selection chips
  const chips = document.querySelectorAll('.type-chip');
  let selectedType = 'Study Session';
  
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedType = chip.textContent;
    });
  });

  // Host Event Form Submit
  const hostForm = document.getElementById('hostEventForm');
  const successModal = document.getElementById('successModal');
  const closeSm = document.getElementById('closeSm');

  if (hostForm) {
    hostForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const title = document.getElementById('evTitle').value;
      const date = document.getElementById('evDate').value;
      const loc = document.getElementById('evLocation').value;
      
      // Simulate adding to grid
      const newEvent = {
        id: Date.now(),
        title: title,
        type: selectedType,
        typeClass: selectedType.toLowerCase().includes('study') ? 'study' : selectedType.toLowerCase().includes('workshop') ? 'workshop' : 'chill',
        date: date,
        location: loc,
        hostName: "You",
        hostAv: "ME",
        hostBg: "var(--purple)",
        attendees: 1,
        maxAttendees: document.getElementById('evCapacity').value || 10
      };
      
      MOCK_EVENTS.unshift(newEvent);
      renderEvents();
      
      // Reset form and show modal
      hostForm.reset();
      successModal.classList.add('open');
    });
  }

  if (closeSm) {
    closeSm.addEventListener('click', () => {
      successModal.classList.remove('open');
    });
  }
});
