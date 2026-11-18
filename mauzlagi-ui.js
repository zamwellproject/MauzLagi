/* UI bersama: menu mobile, toast, reveal, fallback gambar, tautan WhatsApp */
(() => {
  'use strict';

  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // Nomor admin: terima 08xx, +62xx, 62xx → hasil 62xx (atau '' jika belum diisi/tidak valid)
  function waNumber() {
    const raw = String((window.MAUZLAGI_CONFIG || {}).WHATSAPP_ADMIN || '').replace(/[\s+\-()]/g, '');
    if (!/^\d+$/.test(raw)) return '';
    const n = raw.startsWith('0') ? '62' + raw.slice(1) : raw;
    return /^\d{9,15}$/.test(n) ? n : '';
  }

  // ---------- Toast ----------
  let region = null;
  function toast(message, opts = {}) {
    if (!region) {
      region = document.createElement('div');
      region.className = 'toast-region';
      region.setAttribute('aria-live', 'polite');
      document.body.appendChild(region);
    }
    const el = document.createElement('div');
    el.className = 'toast' + (opts.type ? ' toast-' + opts.type : '');
    const icon = opts.type === 'error' ? 'error' : 'check_circle';
    el.innerHTML = '<span class="ms">' + icon + '</span><span class="toast-msg">' + esc(message) + '</span>' +
      (opts.href ? '<a class="toast-action" href="' + esc(opts.href) + '">' + esc(opts.label || 'Lihat') + '</a>' : '');
    region.appendChild(el);
    requestAnimationFrame(() => el.classList.add('show'));
    setTimeout(() => {
      el.classList.remove('show');
      setTimeout(() => el.remove(), 300);
    }, opts.timeout || 3600);
  }

  // ---------- Header ----------
  const header = document.querySelector('.site-header');
  const nav = document.getElementById('site-nav');
  const menuBtn = document.querySelector('.menu-btn');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
  if (menuBtn && nav) {
    const setOpen = open => {
      nav.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
      menuBtn.querySelector('.ms').textContent = open ? 'close' : 'menu';
    };
    menuBtn.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
    nav.addEventListener('click', e => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => { if (e.matches) setOpen(false); });
  }

  // ---------- Reveal saat scroll ----------
  const reveals = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
    }), { threshold: 0.08 });
    reveals.forEach((el, i) => { el.style.transitionDelay = (i % 3) * 60 + 'ms'; io.observe(el); });
  } else {
    reveals.forEach(el => el.classList.add('is-visible'));
  }

  // ---------- Fallback gambar rusak ----------
  const FALLBACK = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6edcf"/><stop offset="1" stop-color="#eab308" stop-opacity=".55"/></linearGradient></defs><rect width="400" height="400" fill="url(#g)"/><text x="200" y="214" font-family="Arial,sans-serif" font-size="38" font-weight="800" text-anchor="middle" fill="#8b6500">MauzLagi</text></svg>'
  );
  document.addEventListener('error', e => {
    const t = e.target;
    if (t && t.tagName === 'IMG' && !t.dataset.fb) { t.dataset.fb = '1'; t.src = FALLBACK; }
  }, true);

  // ---------- Tautan WhatsApp & tahun ----------
  const wa = waNumber();
  document.querySelectorAll('[data-wa-link]').forEach(a => {
    if (wa) {
      a.href = 'https://wa.me/' + wa + '?text=' + encodeURIComponent('Halo MauzLagi, saya ingin bertanya.');
      a.target = '_blank';
      a.rel = 'noopener';
    } else {
      a.hidden = true;
    }
  });
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

  window.MauzUI = { esc, toast, waNumber };
})();
