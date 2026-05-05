/* ── Bridgr v2 JS ── */

// Smooth form submits
['heroForm','ctaForm'].forEach(id => {
  const f = document.getElementById(id);
  if (!f) return;
  f.addEventListener('submit', e => {
    e.preventDefault();
    const btn = f.querySelector('button');
    const input = f.querySelector('input');
    if (!input.value.trim()) { input.style.borderColor = 'red'; return; }
    btn.textContent = '🎉 YOU\'RE IN. CHECK YOUR EMAIL.';
    btn.style.background = '#34d399';
    btn.style.color = '#fff';
    btn.disabled = true;
    input.disabled = true;
  });
});

// Nav scroll tint
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) nav.style.boxShadow = window.scrollY > 60 ? '0 4px 30px rgba(0,0,0,.08)' : 'none';
});

// Scroll reveal for sections
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.bento-card, .how-step, .test-card, .proof-stat').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity .6s cubic-bezier(0.4,0,0.2,1), transform .6s cubic-bezier(0.4,0,0.2,1)';
  observer.observe(el);
});
