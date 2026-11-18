/* Logika per halaman: home, catalog, custom, checkout */
(() => {
  'use strict';
  const D = window.MauzData, C = window.MauzCart, U = window.MauzUI;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = U.esc, fmt = C.format;

  const pages = { home: initHome, catalog: initCatalog, custom: initCustom, checkout: initCheckout };
  const run = pages[document.body.dataset.page];
  if (run) run();

  /* ------------------------------------------------------------------ Beranda */
  function initHome() {
    const P = D.products;
    const hero = $('#hero'), slidesEl = $('#slides'), tabsEl = $('#tabs');
    const cta = $('#hero-cta'), ctaLabel = $('#cta-label');

    slidesEl.innerHTML = P.map((p, i) =>
      '<div class="slide"><img src="' + esc(p.image) + '" alt="Pisang krispi ' + esc(p.name) + ' MauzLagi" width="900" height="500" decoding="async"' +
      (i === 0 ? ' fetchpriority="high"' : ' loading="lazy"') + '></div>').join('');
    tabsEl.innerHTML = P.map((p, i) =>
      '<button class="tab" type="button" role="tab" data-i="' + i + '" aria-selected="false"><span class="fill"></span><span class="tab-label">' + esc(p.flavor) + '</span></button>').join('');

    const slides = $$('.slide', slidesEl), tabs = $$('.tab', tabsEl), fills = $$('.fill', tabsEl);
    const DURATION = 4500;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let idx = 0, elapsed = 0, last = 0, hold = false;

    function show(i) {
      idx = i; elapsed = 0;
      const p = P[i];
      slides.forEach((s, n) => s.classList.toggle('is-active', n === i));
      tabs.forEach((t, n) => {
        t.setAttribute('aria-selected', String(n === i));
        fills[n].style.transform = n === i && reduce ? 'scaleX(1)' : 'scaleX(0)';
      });
      $('#flavor-name').textContent = p.name;
      $('#flavor-badge').textContent = p.badge;
      $('#flavor-desc').textContent = p.desc;
      $('#flavor-price').textContent = fmt(p.price);
      $('#flavor-dot').style.background = p.dot;
      ctaLabel.textContent = 'Pesan rasa ' + p.flavor + ' sekarang';
      cta.href = 'kustomisasi.html?produk=' + encodeURIComponent(p.id);
      hero.style.setProperty('--tint', p.tint);
    }

    function tick(now) {
      const dt = Math.min(now - (last || now), 100);
      last = now;
      if (!hold && !document.hidden) elapsed += dt;
      const pr = Math.min(elapsed / DURATION, 1);
      fills[idx].style.transform = 'scaleX(' + pr + ')';
      if (pr >= 1) show((idx + 1) % P.length);
      requestAnimationFrame(tick);
    }

    tabsEl.addEventListener('click', e => {
      const t = e.target.closest('.tab');
      if (t) show(Number(t.dataset.i));
    });
    const stage = $('#stage');
    ['pointerenter', 'focusin'].forEach(ev => stage.addEventListener(ev, () => { hold = true; }));
    ['pointerleave', 'focusout'].forEach(ev => stage.addEventListener(ev, () => { hold = false; }));

    show(0);
    if (!reduce) requestAnimationFrame(tick);
  }

  /* ------------------------------------------------------------------ Katalog */
  function initCatalog() {
    const grid = $('#grid'), sortEl = $('#catalog-sort'), countEl = $('#result-count');
    const pills = $$('.seg button');
    let filter = 'all';
    const sorters = {
      popular: (a, b) => a.popular - b.popular,
      lowest: (a, b) => a.price - b.price || a.popular - b.popular,
      chef: (a, b) => a.chef - b.chef
    };

    const card = (p, i) => {
      const url = 'kustomisasi.html?produk=' + encodeURIComponent(p.id);
      return '<article class="product-card" style="animation-delay:' + i * 50 + 'ms">' +
        '<a class="pc-media" href="' + url + '" tabindex="-1" aria-hidden="true">' +
        '<img src="' + esc(p.image) + '" alt="" width="480" height="480" loading="lazy" decoding="async">' +
        '<span class="chip">' + esc(p.badge) + '</span><span class="weight">' + esc(p.weight) + '</span></a>' +
        '<div class="pc-body"><div class="pc-head"><h2>' + esc(p.name) + '</h2><span class="price">' + fmt(p.price) + '</span></div>' +
        '<p>' + esc(p.desc) + '</p>' +
        '<div class="pc-foot"><span class="pc-tag">' + esc(p.tag) + '</span>' +
        '<a class="btn btn-soft" href="' + url + '" aria-label="Pilih ' + esc(p.name) + '"><span class="ms">add</span>Pilih</a></div></div></article>';
    };

    function render() {
      const list = D.products.filter(p => filter === 'all' || p.id === filter).sort(sorters[sortEl.value] || sorters.popular);
      grid.innerHTML = list.map(card).join('');
      countEl.textContent = list.length + ' varian';
    }

    pills.forEach(b => b.addEventListener('click', () => {
      filter = b.dataset.filter;
      pills.forEach(x => x.setAttribute('aria-pressed', String(x === b)));
      render();
    }));
    sortEl.addEventListener('change', render);
    render();
  }

  /* -------------------------------------------------------------- Kustomisasi */
  function initCustom() {
    const params = new URLSearchParams(location.search);
    const p = D.find(params.get('produk')) || D.products[0];

    document.title = 'Kustomisasi ' + p.name + ' — MauzLagi';
    const img = $('#cfg-img');
    img.src = p.image; img.alt = 'Pisang krispi ' + p.name;
    $('#cfg-badge').textContent = p.badge;
    $('#cfg-name').textContent = 'Pisang Krispi ' + p.name;
    $('#cfg-desc').textContent = p.desc + ' Porsi dasar ' + p.weight + '.';
    $('#cfg-base').textContent = fmt(p.price);
    $('#flavor-switch').innerHTML = D.products.map(x =>
      '<a href="kustomisasi.html?produk=' + encodeURIComponent(x.id) + '"' + (x.id === p.id ? ' aria-current="true"' : '') + '>' + esc(x.flavor) + '</a>').join('');

    const optHtml = (name, list, selected) => list.map(o =>
      '<label class="opt"><input type="radio" name="' + name + '" value="' + o.id + '"' + (o.id === selected ? ' checked' : '') + '>' +
      '<span class="opt-body"><span class="opt-top"><strong>' + esc(o.label) + '</strong><span class="radio" aria-hidden="true"></span></span>' +
      '<span class="opt-detail">' + esc(o.detail.replace('{sauce}', p.sauce)) + '</span>' +
      '<span class="opt-price">' + (o.price ? '+' + fmt(o.price) : 'Termasuk') + '</span></span></label>').join('');
    $('#portion-options').innerHTML = optHtml('portion', D.portions, 'standard');
    $('#topping-options').innerHTML = optHtml('topping', D.toppings, 'normal');

    const qtyOut = $('#qty-display'), minus = $('#btn-minus'), plus = $('#btn-plus'), addBtn = $('#btn-add-to-cart');
    const note = $('#order-note');
    let qty = 1;
    const chosen = (name, list) => list.find(o => o.id === ($('input[name="' + name + '"]:checked') || {}).value) || list[0];

    function update() {
      const po = chosen('portion', D.portions), to = chosen('topping', D.toppings);
      const unit = p.price + po.price + to.price;
      $('#sum-base-label').textContent = 'Pisang Krispi ' + p.name + ' (dasar)';
      $('#sum-base').textContent = fmt(p.price);
      $('#sum-portion-label').textContent = 'Porsi ' + po.label + ' (' + po.detail + ')';
      $('#sum-portion').textContent = po.price ? '+' + fmt(po.price) : 'Termasuk';
      $('#sum-topping-label').textContent = to.label + ' (' + to.detail.replace('{sauce}', p.sauce) + ')';
      $('#sum-topping').textContent = to.price ? '+' + fmt(to.price) : 'Termasuk';
      $('#sum-unit').textContent = fmt(unit);
      $('#subtotal-display').textContent = fmt(unit * qty);
      $('#btn-price-display').textContent = fmt(unit * qty);
      qtyOut.textContent = qty;
      minus.disabled = qty <= 1;
      plus.disabled = qty >= 99;
    }

    $$('input[type="radio"]').forEach(r => r.addEventListener('change', update));
    minus.addEventListener('click', () => { if (qty > 1) { qty--; update(); } });
    plus.addEventListener('click', () => { if (qty < 99) { qty++; update(); } });
    note.addEventListener('input', () => { $('#note-count').textContent = note.value.length + '/120'; });

    let resetTimer;
    addBtn.addEventListener('click', () => {
      const po = chosen('portion', D.portions), to = chosen('topping', D.toppings);
      C.add({
        id: p.id,
        name: 'Pisang Krispi ' + p.name,
        variant: po.label + ' (' + po.detail + ') • ' + to.label,
        price: p.price + po.price + to.price,
        qty,
        note: note.value.trim(),
        image: p.image
      });
      U.toast('Masuk keranjang', { href: 'checkout.html', label: 'Checkout' });
      const original = addBtn.innerHTML;
      addBtn.innerHTML = '<span class="ms">check_circle</span><span>Masuk keranjang</span>';
      addBtn.disabled = true;
      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => { addBtn.innerHTML = original; addBtn.disabled = false; update(); }, 1300);
    });

    update();
  }

  /* ----------------------------------------------------------------- Checkout */
  function initCheckout() {
    const host = $('#cart-items'), form = $('#order-form'), sendBtn = $('#send-order');
    const clearBtn = $('#clear-cart'), copyBtn = $('#copy-order'), kurir = $('#kurir');

    function render() {
      const cart = C.read();
      host.innerHTML = cart.length ? cart.map(x =>
        '<div class="cart-line"><img src="' + esc(x.image) + '" alt="' + esc(x.name) + '" loading="lazy" width="88" height="88">' +
        '<div><div class="cart-name">' + esc(x.name) + '</div>' +
        (x.variant ? '<div class="muted">' + esc(x.variant) + '</div>' : '') +
        (x.note ? '<div class="muted">Catatan: ' + esc(x.note) + '</div>' : '') +
        '<div class="qty"><button type="button" data-action="minus" data-key="' + esc(x.key) + '" aria-label="Kurangi jumlah ' + esc(x.name) + '"><span class="ms">remove</span></button>' +
        '<strong>' + x.qty + '</strong>' +
        '<button type="button" data-action="plus" data-key="' + esc(x.key) + '" aria-label="Tambah jumlah ' + esc(x.name) + '"><span class="ms">add</span></button></div>' +
        '<button type="button" class="remove" data-action="remove" data-key="' + esc(x.key) + '">Hapus</button></div>' +
        '<div class="line-price">' + fmt(x.price * x.qty) + '</div></div>').join('')
        : '<div class="empty"><span class="ms">shopping_bag</span><p>Keranjangmu masih kosong.</p><a href="katalog.html">Jelajahi katalog</a></div>';

      const t = C.totals();
      $('#sum-count').textContent = t.count + ' item';
      $('#sum-subtotal').textContent = fmt(t.total);
      $('#sum-total').textContent = fmt(t.total);
      sendBtn.disabled = copyBtn.disabled = !cart.length;
      clearBtn.hidden = !cart.length;
    }

    host.addEventListener('click', e => {
      const b = e.target.closest('button[data-action]');
      if (!b) return;
      const k = b.dataset.key;
      if (b.dataset.action === 'remove') C.remove(k);
      else C.change(k, b.dataset.action === 'plus' ? 1 : -1);
    });
    clearBtn.addEventListener('click', () => { if (confirm('Kosongkan seluruh keranjang?')) C.clear(); });
    document.addEventListener('mauzcart:change', render);

    // Alamat hanya wajib untuk pengiriman
    const addrLabel = $('label[for="alamat"]');
    function syncShipping() {
      const pickup = kurir.value === 'pickup';
      addrLabel.textContent = pickup ? 'Alamat (opsional untuk ambil sendiri)' : 'Alamat pengiriman lengkap';
    }
    kurir.addEventListener('change', syncShipping);
    syncShipping();

    function setErr(id, msg) {
      const input = $('#' + id), err = $('#err-' + id);
      if (err) err.textContent = msg || '';
      if (input) { if (msg) input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid'); }
      return !msg;
    }
    ['nama', 'telepon', 'alamat'].forEach(id => $('#' + id).addEventListener('input', () => setErr(id, '')));

    function validate() {
      const v = {
        nama: $('#nama').value.trim(),
        telepon: $('#telepon').value.replace(/[\s\-.]/g, ''),
        alamat: $('#alamat').value.trim()
      };
      const pickup = kurir.value === 'pickup';
      const checks = [
        setErr('nama', v.nama.length < 2 ? 'Isi nama penerima.' : ''),
        setErr('telepon', !/^(?:\+?62|0)8\d{7,12}$/.test(v.telepon) ? 'Masukkan nomor WhatsApp yang valid, contoh 081234567890.' : ''),
        setErr('alamat', !pickup && v.alamat.length < 10 ? 'Isi alamat pengiriman selengkapnya.' : '')
      ];
      if (checks.includes(false)) {
        const first = form.querySelector('[aria-invalid="true"]');
        if (first) first.focus();
        return null;
      }
      return v;
    }

    function buildMessage(v) {
      const cart = C.read();
      const d = new Date();
      const pad = n => String(n).padStart(2, '0');
      const ref = 'MZL-' + String(d.getFullYear()).slice(2) + pad(d.getMonth() + 1) + pad(d.getDate()) + '-' + Math.random().toString(36).slice(2, 6).toUpperCase();
      const items = cart.map((x, i) =>
        (i + 1) + '. ' + x.name + (x.variant ? '\n   ' + x.variant : '') +
        '\n   ' + x.qty + ' x ' + fmt(x.price) + ' = ' + fmt(x.qty * x.price) +
        (x.note ? '\n   Catatan: ' + x.note : '')).join('\n\n');
      const pickup = kurir.value === 'pickup';
      return 'Halo MauzLagi, saya ingin memesan.\nKode pesanan: ' + ref + '\n\n' + items +
        '\n\nSubtotal produk: ' + fmt(C.totals().total) +
        '\nPengiriman: ' + (pickup ? 'Ambil sendiri' : 'Kurir instan') + ' (ongkir/ketersediaan dikonfirmasi admin)' +
        '\nPembayaran: ' + $('#pembayaran').value +
        '\n\nNama: ' + v.nama + '\nWhatsApp: ' + $('#telepon').value.trim() +
        '\nAlamat: ' + (v.alamat || '-') +
        '\nCatatan kurir: ' + ($('#instruksi').value.trim() || '-') +
        '\n\nMohon konfirmasi ketersediaan dan total akhir pesanan. Terima kasih.';
    }

    function openLink(url) {
      const a = document.createElement('a');
      a.href = url; a.target = '_blank'; a.rel = 'noopener';
      document.body.appendChild(a); a.click(); a.remove();
    }

    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!C.read().length) return U.toast('Keranjang masih kosong.', { type: 'error' });
      const v = validate();
      if (!v) return;
      const wa = U.waNumber();
      if (!wa) return U.toast('Nomor WhatsApp admin belum diatur (lihat config.js). Gunakan "Salin teks pesanan".', { type: 'error', timeout: 6000 });
      openLink('https://wa.me/' + wa + '?text=' + encodeURIComponent(buildMessage(v)));
      U.toast('WhatsApp dibuka. Kirim pesan di sana untuk menyelesaikan pesanan.', { timeout: 6000 });
    });

    copyBtn.addEventListener('click', async () => {
      const v = validate();
      if (!v) return;
      const text = buildMessage(v);
      try {
        await navigator.clipboard.writeText(text);
        U.toast('Teks pesanan disalin.');
      } catch (err) {
        U.toast('Tidak bisa menyalin otomatis. Gunakan tombol WhatsApp.', { type: 'error' });
      }
    });

    render();
  }
})();
