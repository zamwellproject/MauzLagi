/* Keranjang bersama MauzLagi — localStorage dengan fallback memori */
(() => {
  'use strict';
  const KEY = 'mauzlagi_cart_v1';
  const MAX_QTY = 99;
  let memory = [];

  const rupiah = n => 'Rp ' + Number(n || 0).toLocaleString('id-ID');

  function sanitize(raw) {
    if (!Array.isArray(raw)) return [];
    return raw
      .filter(x => x && typeof x === 'object' && typeof x.key === 'string' && typeof x.name === 'string')
      .map(x => ({
        key: x.key,
        id: String(x.id || ''),
        name: x.name,
        variant: String(x.variant || ''),
        note: String(x.note || ''),
        image: String(x.image || ''),
        price: Math.max(0, Number(x.price) || 0),
        qty: Math.min(MAX_QTY, Math.max(1, parseInt(x.qty, 10) || 1))
      }));
  }

  function read() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? sanitize(JSON.parse(raw)) : [];
    } catch (e) {
      return sanitize(memory);
    }
  }

  function save(items) {
    memory = items;
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch (e) { /* mode privat: pakai memori */ }
    render();
    document.dispatchEvent(new CustomEvent('mauzcart:change', { detail: items }));
  }

  function totals(items) {
    return {
      count: items.reduce((s, i) => s + i.qty, 0),
      total: items.reduce((s, i) => s + i.price * i.qty, 0)
    };
  }

  function render() {
    const items = read();
    const { count, total } = totals(items);
    document.querySelectorAll('[data-cart-count]').forEach(el => {
      el.textContent = count > 99 ? '99+' : String(count);
      el.hidden = count === 0;
    });
    document.querySelectorAll('[data-cart-label]').forEach(el => { el.textContent = count + ' item'; });
    document.querySelectorAll('[data-cart-names]').forEach(el => {
      el.textContent = items.map(i => i.name).join(' + ');
    });
    document.querySelectorAll('[data-cart-total]').forEach(el => { el.textContent = rupiah(total); });
    document.querySelectorAll('[data-cart-dock]').forEach(el => { el.hidden = count === 0; });
  }

  const api = {
    read,
    save,
    format: rupiah,
    totals: () => totals(read()),
    count: () => totals(read()).count,
    add(item) {
      const items = read();
      const key = [item.id || item.name, item.variant || '', item.note || ''].join('|');
      const qty = Math.max(1, parseInt(item.qty, 10) || 1);
      const existing = items.find(x => x.key === key);
      if (existing) existing.qty = Math.min(MAX_QTY, existing.qty + qty);
      else items.push(sanitize([{ ...item, key, qty }])[0]);
      save(items);
    },
    remove(key) { save(read().filter(i => i.key !== key)); },
    change(key, delta) {
      const items = read();
      const item = items.find(i => i.key === key);
      if (!item) return;
      item.qty = Math.min(MAX_QTY, item.qty + delta);
      if (item.qty < 1) return api.remove(key);
      save(items);
    },
    clear() { save([]); }
  };

  window.MauzCart = api;

  // Sinkronkan antar tab
  window.addEventListener('storage', e => {
    if (e.key === KEY) {
      render();
      document.dispatchEvent(new CustomEvent('mauzcart:change', { detail: read() }));
    }
  });

  render();
})();
