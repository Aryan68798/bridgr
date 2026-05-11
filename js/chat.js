// chat.js
document.addEventListener('DOMContentLoaded', () => {
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');
  const chatChannels = document.querySelectorAll('.chat-channels li');
  const chatHeaderTitle = document.querySelector('.chat-header h2');
  const chatHeaderTopic = document.querySelector('.chat-topic');

  // Load username from localStorage if exists
  const username = localStorage.getItem('bridgr_username') || 'Aryan Rai';
  const initials = username.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase();

  // Channel definitions
  const channels = {
    'general': {
      name: '# general',
      topic: 'General campus discussion and vibes.',
      messages: [
        {
          name: 'Sarah Jenkins',
          initials: 'SJ',
          color: 'var(--yellow)',
          time: 'Today at 10:42 AM',
          text: 'Does anyone know if the library is still open?',
          isSelf: false
        },
        {
          name: 'Mike Ross',
          initials: 'MR',
          color: 'var(--blue)',
          time: 'Today at 10:45 AM',
          text: 'Yeah, it\'s open until midnight. I\'m on the 2nd floor rn.',
          isSelf: false,
          textColor: 'white'
        }
      ]
    },
    'class-help': {
      name: '# class-help',
      topic: 'Homework, studying, and project collaboration.',
      messages: [
        {
          name: 'Emily Chen',
          initials: 'EC',
          color: 'var(--orange)',
          time: 'Today at 1:15 PM',
          text: 'Can someone explain the DP problem from the algorithms assignment?',
          isSelf: false
        }
      ]
    },
    'random': {
      name: '# random',
      topic: 'Memes, random thoughts, and non-academic chatter.',
      messages: [
        {
          name: 'Alex D.',
          initials: 'AD',
          color: 'var(--cyan)',
          time: 'Yesterday at 8:20 PM',
          text: 'The coffee at the student center just gave me superhuman speed.',
          isSelf: false
        }
      ]
    },
    'looking-for-group': {
      name: '# looking-for-group',
      topic: 'Find teammates for hackathons, projects, and games.',
      messages: [
        {
          name: 'David Kim',
          initials: 'DK',
          color: 'var(--pink)',
          time: 'Today at 9:00 AM',
          text: 'Looking for a UI/UX designer for the upcoming hackathon. DM me!',
          isSelf: false
        }
      ]
    }
  };

  let activeChannel = 'general';

  function renderMessages() {
    chatMessages.innerHTML = '';
    const msgs = channels[activeChannel].messages;
    
    if (msgs.length === 0) {
      chatMessages.innerHTML = '<div style="text-align:center; color:var(--text-muted); margin-top:40px;">No messages yet. Be the first to start the chat!</div>';
      return;
    }

    msgs.forEach(msg => {
      const msgDiv = document.createElement('div');
      msgDiv.className = `message ${msg.isSelf ? 'self' : ''}`;
      
      const avatarColor = msg.color || 'var(--charcoal)';
      const avatarTextColor = msg.textColor || 'var(--charcoal)';
      
      msgDiv.innerHTML = `
        <div class="msg-avatar" style="background: ${avatarColor}; color: ${msg.isSelf ? 'white' : avatarTextColor}; border-color: var(--charcoal);">${msg.initials}</div>
        <div class="msg-content">
          <div class="msg-header">
            <span class="msg-name">${msg.name}</span>
            <span class="msg-time">${msg.time}</span>
          </div>
          <div class="msg-text">${escapeHTML(msg.text)}</div>
        </div>
      `;
      chatMessages.appendChild(msgDiv);
    });

    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function switchChannel(channelId) {
    activeChannel = channelId;
    const channelData = channels[channelId];
    
    // Update active class on sidebar
    chatChannels.forEach(li => {
      const id = li.textContent.replace('# ', '').trim();
      if (id === channelId) {
        li.classList.add('active');
      } else {
        li.classList.remove('active');
      }
    });

    // Update Header
    chatHeaderTitle.textContent = channelData.name;
    chatHeaderTopic.textContent = channelData.topic;
    
    // Update Input placeholder
    chatInput.placeholder = `Message ${channelData.name}...`;

    // Render Messages
    renderMessages();
  }

  // Setup channel click listeners
  chatChannels.forEach(li => {
    li.addEventListener('click', () => {
      const channelId = li.textContent.replace('# ', '').trim();
      if (channels[channelId] && channelId !== activeChannel) {
        switchChannel(channelId);
      }
    });
  });

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (!text) return;
    
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Add to state
    channels[activeChannel].messages.push({
      name: username,
      initials: initials,
      color: 'var(--charcoal)',
      time: 'Today at ' + timeString,
      text: text,
      isSelf: true
    });

    // Rerender
    renderMessages();
    chatInput.value = '';
  });

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }
  
  // Initial render
  renderMessages();
});
