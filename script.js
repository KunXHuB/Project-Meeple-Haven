const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const money = n => '฿' + Number(n).toLocaleString('en-US');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

const toastEl = $('#toast'); let tt;
function notify(msg) {
  toastEl.textContent = msg; toastEl.classList.add('show');
  clearTimeout(tt); tt = setTimeout(() => toastEl.classList.remove('show'), 2600);
}

const GAMES = [
 {
  "id": "gm01",
  "name": "I Know…You Don't (TH) ใครไม่รู้",
  "cat": "family",
  "price": 621,
  "img": "https://siamboardgames.com/wp-content/uploads/2026/10/i-know-500x500.png",
  "emoji": "🤫",
  "bg": "linear-gradient(135deg,#ffb545,#ff6b4a)"
 },
 {
  "id": "gm02",
  "name": "Dawm of Democracy (TH/EN)",
  "cat": "strategy",
  "price": 855,
  "img": "https://siamboardgames.com/wp-content/uploads/2026/07/dawn-of-democracy-500x500.webp",
  "emoji": "🗳️",
  "bg": "linear-gradient(135deg,#2dd4bf,#0e8a86)"
 },
 {
  "id": "gm03",
  "name": "Inherit (TH/EN) คุณยายวรนาฎ",
  "cat": "family",
  "price": 765,
  "img": "https://siamboardgames.com/wp-content/uploads/2026/07/inherit-500x500.webp",
  "emoji": "👵",
  "bg": "linear-gradient(135deg,#a78bfa,#5b21b6)"
 },
 {
  "id": "gm04",
  "name": "Space Lab (TH) แล็บอวกาศ",
  "cat": "family",
  "price": 855,
  "img": "https://siamboardgames.com/wp-content/uploads/2026/07/spacelab-500x500.webp",
  "emoji": "🧪",
  "bg": "linear-gradient(135deg,#f472b6,#9d174d)"
 },
 {
  "id": "gm05",
  "name": "Botswana (TH) บอตสวานา",
  "cat": "family",
  "price": 990,
  "img": "https://siamboardgames.com/wp-content/uploads/2026/06/botswana_cover-wrap-500x500.webp",
  "emoji": "🐘",
  "bg": "linear-gradient(135deg,#60a5fa,#1e40af)"
 },
 {
  "id": "gm06",
  "name": "Emblems (TH) ศึกชิงบัลลังก์",
  "cat": "family",
  "price": 808,
  "img": "https://siamboardgames.com/wp-content/uploads/2026/07/product-cover113-500x500.png",
  "emoji": "👑",
  "bg": "linear-gradient(135deg,#ffb545,#ff6b4a)"
 },
 {
  "id": "gm07",
  "name": "Mansion of Madness: Path of the Serpent (TH)",
  "cat": "coop",
  "price": 2385,
  "img": "https://siamboardgames.com/wp-content/uploads/2026/04/product-cover112-500x500.webp",
  "emoji": "🐍",
  "bg": "linear-gradient(135deg,#2dd4bf,#0e8a86)"
 },
 {
  "id": "gm08",
  "name": "Castle Combo: Out of the Oubliette (TH)",
  "cat": "family",
  "price": 183,
  "img": "https://siamboardgames.com/wp-content/uploads/2026/04/product-cover111-500x500.webp",
  "emoji": "🏰",
  "bg": "linear-gradient(135deg,#a78bfa,#5b21b6)"
 },
 {
  "id": "gm09",
  "name": "For Sale Retheme (TH) บิดแล้วรวย",
  "cat": "family",
  "price": 792,
  "img": "https://siamboardgames.com/wp-content/uploads/2026/02/product-cover110-500x500.webp",
  "emoji": "🏠",
  "bg": "linear-gradient(135deg,#f472b6,#9d174d)"
 },
 {
  "id": "gm10",
  "name": "Zombie Kittens (TH) เหมียวซอมบี้",
  "cat": "family",
  "price": 760,
  "img": "https://siamboardgames.com/wp-content/uploads/2026/01/product-cover108-500x500.png",
  "emoji": "🧟",
  "bg": "linear-gradient(135deg,#60a5fa,#1e40af)"
 },
 {
  "id": "gm11",
  "name": "Gambler × Gamble!! (TH) ภารกิจ ปิด คาสิโน!!",
  "cat": "party",
  "price": 760,
  "img": "https://siamboardgames.com/wp-content/uploads/2026/01/product-cover107-500x500.webp",
  "emoji": "🎰",
  "bg": "linear-gradient(135deg,#ffb545,#ff6b4a)"
 },
 {
  "id": "gm12",
  "name": "Rebirth (TH) โลกใหม่",
  "cat": "strategy",
  "price": 1560,
  "img": "https://siamboardgames.com/wp-content/uploads/2026/01/product-cover106-500x500.png",
  "emoji": "🌍",
  "bg": "linear-gradient(135deg,#2dd4bf,#0e8a86)"
 },
 {
  "id": "gm13",
  "name": "Ramen Extreme (TH) ราเมน สุดขีด!",
  "cat": "party",
  "price": 385,
  "img": "https://siamboardgames.com/wp-content/uploads/2025/11/product-cover70-1-scaled-1-500x500.webp",
  "emoji": "🍜",
  "bg": "linear-gradient(135deg,#a78bfa,#5b21b6)"
 },
 {
  "id": "gm14",
  "name": "Get Bit (TH) ฉลามงับ",
  "cat": "party",
  "price": 525,
  "img": "https://siamboardgames.com/wp-content/uploads/2025/11/product-cover30-scaled-1-500x500.webp",
  "emoji": "🦈",
  "bg": "linear-gradient(135deg,#f472b6,#9d174d)"
 },
 {
  "id": "gm15",
  "name": "Superstore 3000 (TH) ซูเปอร์สโตร์ 3000",
  "cat": "family",
  "price": 1225,
  "img": "https://siamboardgames.com/wp-content/uploads/2025/11/product-cover82-scaled-1-500x500.webp",
  "emoji": "🛒",
  "bg": "linear-gradient(135deg,#60a5fa,#1e40af)"
 },
 {
  "id": "gm16",
  "name": "Coup (TH) เกมโค่นอำนาจ",
  "cat": "party",
  "price": 510,
  "img": "https://siamboardgames.com/wp-content/uploads/2025/11/product-cover17-scaled-2-1024x1024.webp",
  "emoji": "👑",
  "bg": "linear-gradient(135deg,#ffb545,#ff6b4a)",
  "players": "2-10 คน · 15 นาที"
 },
 {
  "id": "gm17",
  "name": "Texas Hold It (TH) แบทเทิลรอเยี่ยล",
  "cat": "party",
  "price": 392,
  "img": "https://siamboardgames.com/wp-content/uploads/2025/11/product-cover86-1-scaled-1-1024x1024.webp",
  "emoji": "🤠",
  "bg": "linear-gradient(135deg,#2dd4bf,#0e8a86)",
  "players": "2-6 คน · 10-15 นาที"
 },
 {
  "id": "gm18",
  "name": "Hollywood 1947 (TH) ฮอลลีวูด 1947",
  "cat": "party",
  "price": 760,
  "img": "https://siamboardgames.com/wp-content/uploads/2026/06/10y-template-1x1-game_15-1024x1024.webp",
  "emoji": "🎬",
  "bg": "linear-gradient(135deg,#a78bfa,#5b21b6)",
  "players": "1-9 คน · 20-40 นาที"
 },
 {
  "id": "gm19",
  "name": "One Night Ultimate Werewolf (TH) หนึ่งคืนปริศนาเกมล่ามนุษย์หมาป่า",
  "cat": "party",
  "price": 595,
  "img": "https://siamboardgames.com/wp-content/uploads/2025/11/product-cover61-scaled-1-1024x1024.webp",
  "emoji": "🐺",
  "bg": "linear-gradient(135deg,#f472b6,#9d174d)",
  "players": "3-10 คน · 10 นาที"
 },
 {
  "id": "gm20",
  "name": "Skull (TH) สกัล 2024",
  "cat": "party",
  "price": 595,
  "img": "https://siamboardgames.com/wp-content/uploads/2025/11/product-cover74-scaled-1-500x500.webp",
  "emoji": "💀",
  "bg": "linear-gradient(135deg,#60a5fa,#1e40af)"
 }
];
const rentPrice = g => Math.max(60, Math.round(g.price * 0.12 / 10) * 10);

const modeOf = {};            
let filter = { cat: 'all', q: '' };
const INITIAL_COUNT = 12;
let showAll = false;
const gamesEl = $('#games');

function renderGames() {
  const list = GAMES.filter(g => (filter.cat === 'all' || g.cat === filter.cat) &&
    g.name.toLowerCase().includes(filter.q.toLowerCase()));
  if (!list.length) { gamesEl.innerHTML = '<div class="empty">ไม่พบเกมที่ค้นหา</div>'; return; }
  const shown = showAll ? list : list.slice(0, INITIAL_COUNT);
  const remaining = list.length - shown.length;
  const more = list.length > INITIAL_COUNT
    ? `<div class="more-wrap"><button class="btn btn-ghost" id="showMore" aria-expanded="${showAll}">${showAll ? 'แสดงน้อยลง (Show Less) ↑' : `Show More (+${remaining} เกม) ↓`}</button></div>`
    : '';
  gamesEl.innerHTML = shown.map(g => {
    const mode = modeOf[g.id] || 'buy';
    const p = mode === 'buy' ? g.price : rentPrice(g);
    const label = mode === 'buy' ? 'ราคาซื้อ' : 'ค่าเช่า 3 วัน';
    return `<div class="game reveal in">
      <div class="art" style="background:${g.bg};position:relative"><span class="badge" style="top:10px;right:10px;left:auto;min-width:0;width:auto;border-radius:999px;padding:3px 9px;font-size:.66rem;background:rgba(0,0,0,.55);color:#fff">${catName(g.cat)}</span><img src="${g.img}" alt="${g.name}" loading="lazy" onerror="this.remove()">${g.emoji}</div>
      <h4>${g.name}</h4>
      <div class="meta">${g.players ? g.players : 'ภาษาไทย'}</div>
      <div class="mode ${mode === 'rent' ? 'rent' : ''}" data-id="${g.id}">
        <span class="thumb"></span>
        <button class="${mode === 'buy' ? 'on' : ''}" data-set="buy">ซื้อ</button>
        <button class="${mode === 'rent' ? 'on' : ''}" data-set="rent">เช่า</button>
      </div>
      <div class="price-line"><small>${label}${mode === 'buy' ? ' (เริ่มต้น)' : ''}</small><b>${money(p)}</b></div>
      <button class="btn btn-ghost btn-sm" data-add="${g.id}" style="width:100%">+ ใส่ตะกร้า</button>
    </div>`;
  }).join('') + more;
}
const catName = c => ({ family:'ครอบครัว', strategy:'วางแผน', party:'ปาร์ตี้', coop:'ร่วมมือ' }[c]);

gamesEl.addEventListener('click', e => {
  if (e.target.closest('#showMore')) {
    showAll = !showAll;
    renderGames();
    if (!showAll) $('#shop').scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
  const set = e.target.closest('[data-set]');
  if (set) {
    const id = set.closest('.mode').dataset.id;
    modeOf[id] = set.dataset.set;
    renderGames();
    return;
  }
  const add = e.target.closest('[data-add]');
  if (add) {
    const id = add.dataset.add;
    addToCart(id, modeOf[id] || 'buy');
  }
});
$('#chips').addEventListener('click', e => {
  const c = e.target.closest('.chip'); if (!c) return;
  $$('.chip').forEach(x => x.classList.toggle('on', x === c));
  filter.cat = c.dataset.cat; showAll = false; renderGames();
});
$('#search').addEventListener('input', e => { filter.q = e.target.value; showAll = false; renderGames(); });

const cart = new Map(); 
function addToCart(id, mode) {
  const key = id + '|' + mode;
  cart.set(key, (cart.get(key) || 0) + 1);
  const g = GAMES.find(x => x.id === id);
  notify(`เพิ่ม ${g.name} (${mode === 'buy' ? 'ซื้อ' : 'เช่า'}) ลงตะกร้าแล้ว 🎉`);
  bump(); renderCart();
}
function bump() {
  const b = $('#cartBadge'); b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump');
}
function lines() {
  return [...cart.entries()].map(([key, qty]) => {
    const [id, mode] = key.split('|');
    const g = GAMES.find(x => x.id === id);
    const unit = mode === 'buy' ? g.price : rentPrice(g);
    return { key, g, mode, qty, unit, total: unit * qty };
  });
}
function subtotal() { return lines().reduce((s, l) => s + l.total, 0); }
function shipping() { const s = subtotal(); return s === 0 || s >= 1000 ? 0 : 60; }
function count() { return [...cart.values()].reduce((a, b) => a + b, 0); }

function renderCart() {
  $('#cartBadge').textContent = count();
  const body = $('#cartBody'), foot = $('#cartFoot');
  if (!cart.size) {
    body.innerHTML = '<div style="text-align:center;padding:60px 0;color:var(--muted)"><div style="font-size:3rem">🛒</div><p>ตะกร้าของคุณยังว่างอยู่</p></div>';
    foot.innerHTML = '<button class="btn btn-ghost btn-block" data-close>เลือกเกมต่อ</button>';
    return;
  }
  body.innerHTML = lines().map(l => `
    <div class="line">
      <div class="thumbsm" style="background:${l.g.bg};position:relative;overflow:hidden"><img src="${l.g.img}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" onerror="this.remove()">${l.g.emoji}</div>
      <div><b>${l.g.name}</b><small>${l.mode === 'buy' ? 'ซื้อ' : 'เช่า 3 วัน'} · ${money(l.unit)}</small>
        <div class="qty"><button data-dec="${l.key}">−</button><span>${l.qty}</span><button data-inc="${l.key}">+</button></div>
        <button class="rm" data-rm="${l.key}">ลบออก</button></div>
      <b>${money(l.total)}</b>
    </div>`).join('');
  const sh = shipping();
  foot.innerHTML = `
    <div class="sum"><span>ยอดรวมสินค้า</span><span>${money(subtotal())}</span></div>
    <div class="sum"><span>ค่าจัดส่ง</span><span>${sh ? money(sh) : 'ฟรี'}</span></div>
    <div class="sum total"><span>ยอดชำระทั้งหมด</span><span>${money(subtotal() + sh)}</span></div>
    <button class="btn btn-primary btn-block" id="goCheckout" style="margin-top:14px">ดำเนินการชำระเงิน →</button>`;
}
$('#cartBody').addEventListener('click', e => {
  const t = e.target;
  if (t.dataset.inc) { cart.set(t.dataset.inc, cart.get(t.dataset.inc) + 1); }
  if (t.dataset.dec) { const k = t.dataset.dec; const v = cart.get(k) - 1; v > 0 ? cart.set(k, v) : cart.delete(k); }
  if (t.dataset.rm) cart.delete(t.dataset.rm);
  renderCart();
});
$('#cartFoot').addEventListener('click', e => {
  if (e.target.id === 'goCheckout') openCheckout();
  if (e.target.dataset.close !== undefined) closeDrawer();
});

const drawer = $('#drawer'), overlay = $('#overlay');
function openDrawer() { renderCart(); drawer.classList.add('show'); overlay.classList.add('show'); }
function closeDrawer() { drawer.classList.remove('show'); overlay.classList.remove('show'); }
$('#cartOpen').addEventListener('click', openDrawer);
$('#cartClose').addEventListener('click', closeDrawer);
overlay.addEventListener('click', () => { closeDrawer(); closeCheckout(); });

const modal = $('#checkout');
const stepIds = ['step1', 'step2', 'step3', 'stepDone'];
function showStep(id, dot) {
  stepIds.forEach(s => $('#' + s).classList.toggle('on', s === id));
  ['st1', 'st2', 'st3'].forEach((d, i) => $('#' + d).classList.toggle('on', i < dot));
}
function openCheckout() {
  if (!cart.size) return notify('ตะกร้าว่างอยู่ เลือกเกมก่อนนะ');
  closeDrawer();
  showStep('step1', 1);
  modal.classList.add('show'); overlay.classList.add('show');
}
function closeCheckout() { modal.classList.remove('show'); overlay.classList.remove('show'); }
$$('#checkout [data-close]').forEach(b => b.addEventListener('click', closeCheckout));

function setErr(id, msg) {
  const input = $('#' + id); const err = $(`[data-for="${id}"]`);
  if (input) input.classList.toggle('bad', !!msg);
  if (err) err.textContent = msg || '';
  return !msg;
}
const validEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const validPhone = v => /^0\d{8,9}$/.test(v.replace(/[\s-]/g, ''));
function luhn(num) {
  let sum = 0, alt = false;
  for (let i = num.length - 1; i >= 0; i--) {
    let n = +num[i];
    if (alt) { n *= 2; if (n > 9) n -= 9; }
    sum += n; alt = !alt;
  }
  return sum % 10 === 0;
}
function cardBrand(num) {
  if (/^4/.test(num)) return 'VISA';
  if (/^5[1-5]/.test(num)) return 'MASTERCARD';
  if (/^35/.test(num)) return 'JCB';
  return 'CARD';
}

$('#toStep2').addEventListener('click', () => {
  const ok = [
    setErr('cName', $('#cName').value.trim().length < 2 ? 'กรุณากรอกชื่อผู้รับ' : ''),
    setErr('cPhone', validPhone($('#cPhone').value) ? '' : 'เบอร์โทรไม่ถูกต้อง (เช่น 0812345678)'),
    setErr('cEmail', validEmail($('#cEmail').value.trim()) ? '' : 'อีเมลไม่ถูกต้อง'),
    setErr('cAddr', $('#cAddr').value.trim().length < 10 ? 'กรอกที่อยู่ให้ครบถ้วน' : '')
  ].every(Boolean);
  if (ok) showStep('step2', 2);
});
$('#backStep1').addEventListener('click', () => showStep('step1', 1));

$$('.pay-opt').forEach(opt => opt.addEventListener('click', () => {
  const m = opt.dataset.pay;
  $$('.pay-opt').forEach(o => o.classList.toggle('on', o === opt));
  opt.querySelector('input').checked = true;
  $('#panelCard').classList.toggle('on', m === 'card');
  $('#panelBank').classList.toggle('on', m === 'bank');
}));
$('#ccNum').addEventListener('input', e => {
  const digits = e.target.value.replace(/\D/g, '').slice(0, 16);
  e.target.value = digits.replace(/(.{4})/g, '$1 ').trim();
  const shown = digits.padEnd(16, '•').replace(/(.{4})/g, '$1 ').trim();
  $('#cardShow').textContent = shown;
  $('#cardBrand').textContent = cardBrand(digits);
});
$('#ccName').addEventListener('input', e => $('#cardName').textContent = e.target.value.toUpperCase() || 'ชื่อบนบัตร');
$('#ccExp').addEventListener('input', e => {
  let v = e.target.value.replace(/\D/g, '').slice(0, 4);
  if (v.length >= 3) v = v.slice(0, 2) + '/' + v.slice(2);
  e.target.value = v; $('#cardExp').textContent = v || 'MM/YY';
});
$('#bank').addEventListener('change', e => {
  const info = $('#bankInfo');
  info.style.display = e.target.value ? 'block' : 'none';
  $('#bankNo').textContent = e.target.value ? '123-4-56789-' + (e.target.value.length % 10) : '';
});

let orderRef = '';
function currentMethod() { return $('.pay-opt.on').dataset.pay; }
function methodLabel(m) { return ({ card:'บัตรเดบิต / เครดิต', bank:'โอนผ่านธนาคาร', qr:'PromptPay QR' })[m]; }

$('#toStep3').addEventListener('click', () => {
  const m = currentMethod();
  let ok = true;
  if (m === 'card') {
    const num = $('#ccNum').value.replace(/\D/g, '');
    const nOk = setErr('ccNum', num.length < 13 ? 'หมายเลขบัตรไม่ครบ' : (!luhn(num) ? 'หมายเลขบัตรไม่ถูกต้อง' : ''));
    const nameOk = setErr('ccName', $('#ccName').value.trim().length < 2 ? 'กรอกชื่อบนบัตร' : '');
    const expM = $('#ccExp').value.match(/^(\d{2})\/(\d{2})$/);
    let expOk = false;
    if (expM) {
      const mm = +expM[1], yy = 2000 + +expM[2];
      const now = new Date(2026, 9, 31);
      expOk = mm >= 1 && mm <= 12 && (yy > now.getFullYear() || (yy === now.getFullYear() && mm >= now.getMonth() + 1));
    }
    const eOk = setErr('ccExp', expOk ? '' : 'วันหมดอายุไม่ถูกต้องหรือหมดอายุแล้ว');
    const cOk = setErr('ccCvc', /^\d{3,4}$/.test($('#ccCvc').value) ? '' : 'CVC ต้องเป็นตัวเลข 3–4 หลัก');
    ok = nOk && nameOk && eOk && cOk;
  } else if (m === 'bank') {
    ok = setErr('bank', $('#bank').value ? '' : 'กรุณาเลือกธนาคาร');
  }
  if (!ok) return;
  renderReview(m);
  showStep('step3', 3);
});
$('#backStep2').addEventListener('click', () => showStep('step2', 2));

function renderReview(m) {
  const sh = shipping();
  const rows = lines().map(l => `<div class="sum"><span>${l.g.name} × ${l.qty} (${l.mode === 'buy' ? 'ซื้อ' : 'เช่า'})</span><span>${money(l.total)}</span></div>`).join('');
  $('#reviewBox').innerHTML = `${rows}
    <div class="sum"><span>ค่าจัดส่ง</span><span>${sh ? money(sh) : 'ฟรี'}</span></div>
    <div class="sum total"><span>รวมทั้งสิ้น</span><span>${money(subtotal() + sh)}</span></div>
    <p class="muted" style="font-size:.85rem;margin-top:12px">ส่งถึง: ${$('#cName').value} · ${$('#cAddr').value}</p>`;
  $('#payLabel').textContent = 'วิธีชำระเงิน: ' + methodLabel(m);
}

$('#payNow').addEventListener('click', () => {
  $('#proc').classList.add('show');
  setTimeout(() => {
    $('#proc').classList.remove('show');
    orderRef = 'MH-' + Math.floor(100000 + Math.random() * 900000);
    $('#orderNo').textContent = orderRef;
    $('#bankRef').textContent = orderRef;
    cart.clear(); renderCart(); renderGames();
    showStep('stepDone', 3);
    notify('ชำระเงินสำเร็จ ขอบคุณที่ใช้บริการ 🎲');
  }, reduce ? 0 : 1900);
});

$('#regSubmit').addEventListener('click', () => {
  const ok = [
    setErr('rName', $('#rName').value.trim().length < 2 ? 'กรุณากรอกชื่อ-นามสกุล' : ''),
    setErr('rPhone', validPhone($('#rPhone').value) ? '' : 'เบอร์โทรไม่ถูกต้อง'),
    setErr('rEmail', validEmail($('#rEmail').value.trim()) ? '' : 'อีเมลไม่ถูกต้อง'),
    setErr('rPass', $('#rPass').value.length >= 8 ? '' : 'รหัสผ่านอย่างน้อย 8 ตัว'),
    setErr('rPass2', $('#rPass2').value === $('#rPass').value && $('#rPass2').value ? '' : 'รหัสผ่านไม่ตรงกัน'),
    setErr('rTerms', $('#rTerms').checked ? '' : 'กรุณายอมรับเงื่อนไข')
  ].every(Boolean);
  if (!ok) return;
  const name = $('#rName').value.trim().split(' ')[0];
  $('#regCard').innerHTML = `<div class="success"><div class="big">🎉</div><h3 style="font-size:1.5rem">ยินดีต้อนรับ ${name}!</h3>
    <p class="muted" style="margin:12px 0 22px">สมัครแพ็คเกจ ${$('#rPlan').value} เรียบร้อย ส่งลิงก์ยืนยันไปที่ ${$('#rEmail').value} แล้ว (จำลอง)</p>
    <a href="#shop" class="btn btn-primary">เริ่มเลือกเกม →</a></div>`;
});

const MEMBERS = [
  ['ช1','Navapon Seesuntud','Team Lead / Frontend','https://kunxhub.github.io/Resume/','kun.png'],
  ['ช2','Amy Paosukprasert','Frontend Developer','https://github.com/Amy-Pao','amy.jpeg'],
  ['ช3','Makha Mukdaprakorn','UI / Content','https://github.com/bass1234sad','bass.png'],
];
$('#memberGrid').innerHTML = MEMBERS.map((m, i) => {
  const link = /^https?:\/\//.test(m[3]) ? m[3] : 'https://' + m[3];
  return `
  <div class="panel member reveal d${(i % 3)}">
    <div class="avatar"><img src="${m[4]}" alt="${m[1]}" onerror="this.remove()">${m[0]}</div>
    <h3>${m[1]}</h3>
    <div class="role">${m[2]}</div>
    <a class="btn btn-ghost btn-sm" href="${link}" target="_blank" rel="noopener">GitHub / Resume →</a>
  </div>`;
}).join('');

const views = { home: $('#view-home'), about: $('#view-about'), register: $('#view-register') };
function route() {
  const h = location.hash.slice(1);
  const page = views[h] ? h : 'home';
  Object.entries(views).forEach(([k, el]) => el.classList.toggle('active', k === page));
  $$('[data-nav]').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + (h || 'top') || (page !== 'home' && a.dataset.nav === page)));
  if (page === 'home' && h && !views[h]) {
    const target = document.getElementById(h);
    if (target) requestAnimationFrame(() => target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }));
  } else if (page === 'home') {
    window.scrollTo({ top: 0, behavior: 'auto' });
  } else {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
  setTimeout(observeReveals, 30);
  $('#navLinks').classList.remove('open'); $('#burger').textContent = '☰';
}
window.addEventListener('hashchange', route);

window.addEventListener('scroll', () => $('#navbar').classList.toggle('scrolled', scrollY > 40), { passive: true });

const revObs = new IntersectionObserver((es, o) => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); o.unobserve(e.target); }
}), { threshold: 0.12 });
function observeReveals() { $$('.view.active .reveal:not(.in)').forEach(el => revObs.observe(el)); }

const countObs = new IntersectionObserver((es, o) => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target, end = +el.dataset.count, dec = +(el.dataset.dec || 0), suf = el.dataset.suffix || '';
  if (reduce) { el.textContent = end.toFixed(dec) + suf; o.unobserve(el); return; }
  const t0 = performance.now();
  const step = now => {
    const p = Math.min((now - t0) / 1500, 1);
    el.textContent = (end * (1 - Math.pow(1 - p, 3))).toFixed(dec) + suf;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step); o.unobserve(el);
}), { threshold: 0.6 });
$$('[data-count]').forEach(el => countObs.observe(el));

$('#burger').addEventListener('click', () => {
  const open = $('#navLinks').classList.toggle('open');
  $('#burger').textContent = open ? '✕' : '☰';
});

document.addEventListener('pointermove', e => {
  const card = e.target.closest && e.target.closest('.spot');
  if (!card) return;
  const r = card.getBoundingClientRect();
  card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
  card.style.setProperty('--my', (e.clientY - r.top) + 'px');
});

$('#downloadBtn').addEventListener('click', () => {
  const lines = ['MEEPLE HAVEN - แคตตาล็อกบอร์ดเกม 2026', '', ...GAMES.map(g =>
    `${g.name} | ซื้อ ${money(g.price)} | เช่า 3 วัน ${money(rentPrice(g))}`), '',
    'ติดต่อ: Facebook / Instagram / X / YouTube @meeplehaven'];
  const url = URL.createObjectURL(new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' }));
  const a = Object.assign(document.createElement('a'), { href: url, download: 'meeple-haven-catalog.txt' });
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  notify('กำลังดาวน์โหลดแคตตาล็อก 📄');
});

$$('[data-plan]').forEach(b => b.addEventListener('click', () => {
  $('#rPlan').value = b.dataset.plan;
  location.hash = 'register';
}));

renderGames();
renderCart();
route();
