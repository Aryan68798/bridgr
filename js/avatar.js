/* ── Avatar Upload Logic ── */

const dropzone = document.getElementById('dropzone');
const fileInput = document.getElementById('fileInput');
const browseBtn = document.getElementById('browseBtn');
const avatarPreview = document.getElementById('avatarPreview');
const avatarRing = document.getElementById('avatarRing');
const swatches = document.querySelectorAll('.swatch');
const saveBtn = document.getElementById('saveBtn');

let currentImageFile = null;
let currentGradient = 'linear-gradient(135deg, #fb923c, #9b6dff)';

// Trigger file input when clicking dropzone or browse button
dropzone.addEventListener('click', (e) => {
  if (e.target !== browseBtn) fileInput.click();
});
browseBtn.addEventListener('click', () => fileInput.click());

// Drag and drop visual feedback
dropzone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropzone.classList.add('dragover');
});
dropzone.addEventListener('dragleave', (e) => {
  e.preventDefault();
  dropzone.classList.remove('dragover');
});
dropzone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropzone.classList.remove('dragover');
  if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
    handleFile(e.dataTransfer.files[0]);
  }
});

// File input change
fileInput.addEventListener('change', (e) => {
  if (e.target.files && e.target.files.length > 0) {
    handleFile(e.target.files[0]);
  }
});

function handleFile(file) {
  if (!file.type.startsWith('image/')) {
    alert('Please upload an image file (JPG, PNG, WebP).');
    return;
  }
  
  if (file.size > 5 * 1024 * 1024) {
    alert('File is too large. Max size is 5MB.');
    return;
  }

  currentImageFile = file;
  const reader = new FileReader();
  reader.onload = (e) => {
    // Hide initials, show image
    avatarPreview.textContent = '';
    avatarPreview.style.backgroundImage = \`url('\${e.target.result}')\`;
    avatarPreview.style.backgroundSize = 'cover';
    avatarPreview.style.backgroundPosition = 'center';
  };
  reader.readAsDataURL(file);
}

// Theme swatches
swatches.forEach(swatch => {
  swatch.addEventListener('click', () => {
    swatches.forEach(s => s.classList.remove('active'));
    swatch.classList.add('active');
    
    currentGradient = swatch.dataset.grad;
    
    // Update the ring color to match the gradient's first color roughly, 
    // or just set border color to a solid derived from it. 
    // For simplicity, we just change the avatar background if no image is uploaded.
    if (!currentImageFile) {
      avatarPreview.style.backgroundImage = currentGradient;
    }
    
    // Update ring (we can't use gradient on standard border, so we just pulse it)
    avatarRing.style.borderColor = swatch.style.backgroundColor; // fallback if it's solid, else keeps the old one.
    // Actually, dashed borders can't be gradients easily without border-image hacks.
    // We'll leave the ring as is or just change its opacity.
  });
});

// Save simulation
saveBtn.addEventListener('click', () => {
  saveBtn.textContent = 'Saving...';
  saveBtn.classList.add('loading');
  saveBtn.disabled = true;

  setTimeout(() => {
    saveBtn.textContent = 'Saved!';
    saveBtn.classList.remove('loading');
    saveBtn.style.background = 'var(--grad-green)';
    saveBtn.style.color = '#fff';
    
    setTimeout(() => {
      window.location.href = 'profile.html';
    }, 800);
  }, 1200);
});
