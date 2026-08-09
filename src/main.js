import './style.css';
import { initHero } from './hero.js';
import { initHandheld } from './handheld.js';
import { initExperience } from './experience.js';
import { initTerminal } from './terminal.js';
import { initContact } from './contact.js';

// Some of the motion here is driven from JS, so CSS alone cannot honour the
// reduced-motion preference. Each module reads the same query.
const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- tab router with fog transitions + rune underline ----------
const tabs = [...document.querySelectorAll('.nav-tab')];
const underline = document.getElementById('rune-underline');
const fog = document.getElementById('fog-transition');
let currentTab = 'home';

function placeUnderline(tab) {
  const btn = tabs.find(t => t.dataset.tab === tab);
  if (!btn) return;
  const parent = btn.parentElement.getBoundingClientRect();
  const r = btn.getBoundingClientRect();
  underline.style.left = (r.left - parent.left) + 'px';
  underline.style.width = r.width + 'px';
}

export function navigateTo(tab, instant = false) {
  if (tab === currentTab) return;
  const go = () => {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + tab).classList.add('active');
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    placeUnderline(tab);
    currentTab = tab;
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (tab === 'terminal') setTimeout(() => document.getElementById('term-input').focus(), 350);
    window.dispatchEvent(new Event('tab:' + tab));
  };
  if (instant || REDUCED) { go(); return; }
  fog.classList.add('on');
  setTimeout(() => { go(); fog.classList.remove('on'); }, 320);
}

tabs.forEach(t => t.addEventListener('click', () => navigateTo(t.dataset.tab)));
document.querySelector('.nav-sigil').addEventListener('click', (e) => { e.preventDefault(); navigateTo('home'); });
window.addEventListener('resize', () => placeUnderline(currentTab));
placeUnderline('home');

// ---------- role typing + item-pickup banner ----------
const roles = ['backend engineer', 'forward deployed engineer', 'agent builder', 'weekend shipper'];
const roleEl = document.getElementById('role-type');
const banner = document.getElementById('acquire-banner');
const bannerItem = document.getElementById('acquire-item');
let roleIdx = 0;

function typeRole() {
  const role = roles[roleIdx];
  // reduced motion: swap the title outright, no per-character typing, no banner
  if (REDUCED) {
    roleEl.textContent = role;
    roleIdx = (roleIdx + 1) % roles.length;
    setTimeout(typeRole, 5000);
    return;
  }
  // flash the acquisition banner first, like an item pickup
  bannerItem.textContent = role.replace(/\b\w/g, c => c.toUpperCase());
  if (currentTab === 'home' && window.scrollY < window.innerHeight * 0.6) {
    banner.classList.add('show');
    setTimeout(() => banner.classList.remove('show'), 1700);
  }
  let i = 0;
  roleEl.textContent = '';
  const tick = setInterval(() => {
    roleEl.textContent = role.slice(0, ++i);
    if (i >= role.length) {
      clearInterval(tick);
      setTimeout(eraseRole, 3400);
    }
  }, 65);
}
function eraseRole() {
  const erase = setInterval(() => {
    roleEl.textContent = roleEl.textContent.slice(0, -1);
    if (!roleEl.textContent) {
      clearInterval(erase);
      roleIdx = (roleIdx + 1) % roles.length;
      setTimeout(typeRole, 350);
    }
  }, 30);
}
setTimeout(typeRole, 1100);

// ---------- souls counter: ticks quietly to the real number ----------
const soulsEl = document.getElementById('souls-value');
let souls = 0;
const soulsTick = REDUCED ? (soulsEl.textContent = '300+', null) : setInterval(() => {
  souls += Math.ceil((300 - souls) * 0.012) || 1;
  if (souls >= 300) { souls = 300; clearInterval(soulsTick); soulsEl.textContent = '300+'; return; }
  soulsEl.textContent = souls;
}, 90);

// ---------- moonlit shift when deep in the page ----------
window.addEventListener('scroll', () => {
  document.body.classList.toggle('moonlit', currentTab === 'home' && window.scrollY > window.innerHeight * 0.9);
}, { passive: true });

// ---------- ember sparks on press ----------
document.addEventListener('pointerdown', (e) => {
  if (REDUCED) return;
  const btn = e.target.closest('.ember-btn, .nav-tab, .hh-round, .hh-pill, .dp');
  if (!btn) return;
  for (let i = 0; i < 7; i++) {
    const s = document.createElement('div');
    s.className = 'spark';
    s.style.left = e.clientX + 'px';
    s.style.top = e.clientY + 'px';
    const a = Math.random() * Math.PI * 2, d = 18 + Math.random() * 34;
    s.style.setProperty('--sx', Math.cos(a) * d + 'px');
    s.style.setProperty('--sy', (Math.sin(a) * d - 22) + 'px');
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 750);
  }
});

// ---------- init sections ----------
initHero();
initHandheld();
initExperience();
initTerminal(navigateTo);
initContact();
