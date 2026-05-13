/* ── Bridgr Events & Sessions ── */

const DEFAULT_EVENTS = [
  { id: 1, title: "Late Night DSA Grind", type: "Study Session", typeClass: "study", date: "Tonight at 10:00 PM", location: "Library, 2nd Floor", hostName: "Sneha Kumar", hostAv: "SK", hostBg: "var(--pink)", attendees: 4, maxAttendees: 8, creator: "system" },
  { id: 2, title: "Intro to React Hooks", type: "Workshop", typeClass: "workshop", date: "Tomorrow at 4:00 PM", location: "Block A, Room 304", hostName: "Aryan Rai", hostAv: "AR", hostBg: "var(--orange)", attendees: 12, maxAttendees: 20, creator: "system" },
  { id: 3, title: "Post-Exam Chill & Rant", type: "Casual", typeClass: "chill", date: "Friday at 6:00 PM", location: "Cafe Coffee Day", hostName: "Riya Shah", hostAv: "RS", hostBg: "var(--yellow)", attendees: 8, maxAttendees: 15, creator: "system" },
  { id: 4, title: "OS Assignment Collab", type: "Study Session", typeClass: "study", date: "Saturday at 1:00 PM", location: "Hostel B, Common Room", hostName: "Vikram Singh", hostAv: "VS", hostBg: "var(--blue)", attendees: 6, maxAttendees: 10, creator: "system" }
];

// ── Persistence ──
const isLoggedIn = localStorage.getItem('isLoggedIn');
const users = JSON.parse(localStorage.getItem('bridgr_users') || '{}');
const currentUser = isLoggedIn ? (users[isLoggedIn.toLowerCase()] || users[isLoggedIn]) : null;

let ALL_EVENTS = JSON.parse(localStorage.getItem('bridgr_events') || '[]');
if (ALL_EVENTS.length === 0) {
  ALL_EVENTS = DEFAULT_EVENTS;
  localStorage.setItem('bridgr_events', JSON.stringify(ALL_EVENTS));
}

// Track joined events: email -> [eventIds]
let JOINED_DATA = JSON.parse(localStorage.getItem('bridgr_joinedEvents') || '{}');
let myJoinedEvents = isLoggedIn ? (JOINED_DATA[isLoggedIn.toLowerCase()] || []) : [];

function saveEvents() {
  localStorage.setItem('bridgr_events', JSON.stringify(ALL_EVENTS));
}

function saveJoined() {
  if (isLoggedIn) {
    JOINED_DATA[isLoggedIn.toLowerCase()] = myJoinedEvents;
    localStorage.setItem('bridgr_joinedEvents', JSON.stringify(JOINED_DATA));
  }
}

// ── Render Events Grid ──
function renderEvents() {
  const grid = document.getElementById('eventsGrid');
  if (!grid) return;
  
  grid.innerHTML = ALL_EVENTS.map(ev => {
    const isCreator = isLoggedIn && ev.creator === isLoggedIn.toLowerCase();
    const hasJoined = myJoinedEvents.includes(ev.id);
    
    return `
      <div class="event-card ${isCreator ? 'my-event' : ''}">
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
          <div class="ec-host-name">${isCreator ? 'Created by You' : 'Hosted by ' + ev.hostName}</div>
          ${isCreator ? 
            `<span class="your-event-badge">Your Event</span>` : 
            `<button class="btn-join ${hasJoined ? 'joined' : ''}" onclick="joinEvent(${ev.id}, this)">
              ${hasJoined ? 'Joined ✓' : 'Join'}
            </button>`
          }
        </div>
      </div>
    `;
  }).join('');
}

// ── Interactivity ──
function joinEvent(eventId, btn) {
  if (!isLoggedIn) {
    window.location.href = 'login.html';
    return;
  }
  
  if (myJoinedEvents.includes(eventId)) return;
  
  myJoinedEvents.push(eventId);
  saveJoined();
  
  // Update local count
  const ev = ALL_EVENTS.find(e => e.id === eventId);
  if (ev && ev.attendees < ev.maxAttendees) {
    ev.attendees++;
    saveEvents();
  }
  
  btn.textContent = 'Joined ✓';
  btn.classList.add('joined');
  
  // Refresh to update counts correctly if needed, or just update the UI
  setTimeout(renderEvents, 500);
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
      if (!isLoggedIn) {
        window.location.href = 'login.html';
        return;
      }
      
      const title = document.getElementById('evTitle').value;
      const date = document.getElementById('evDate').value;
      const loc = document.getElementById('evLocation').value;
      const capacity = document.getElementById('evCapacity').value || 10;
      
      const initials = currentUser ? currentUser.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : 'ME';

      const newEvent = {
        id: Date.now(),
        title: title,
        type: selectedType,
        typeClass: selectedType.toLowerCase().includes('study') ? 'study' : selectedType.toLowerCase().includes('workshop') ? 'workshop' : 'chill',
        date: date,
        location: loc,
        hostName: currentUser ? currentUser.name : "You",
        hostAv: initials,
        hostBg: currentUser ? (currentUser.aura || "var(--purple)") : "var(--purple)",
        attendees: 1,
        maxAttendees: capacity,
        creator: isLoggedIn.toLowerCase()
      };
      
      ALL_EVENTS.unshift(newEvent);
      saveEvents();
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
