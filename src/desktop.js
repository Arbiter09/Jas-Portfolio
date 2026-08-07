// The workbench: wax-sealed folders, scroll-windows, and a crow with opinions.

const projects = [
  {
    id: 'papermind',
    name: 'PaperMind',
    sub: 'research copilot',
    sealHue: 18,
    crow: 'Ah yes, PaperMind. It reads the papers so he can pretend he did.',
    blurb: 'An agentic research assistant that ingests arXiv papers, builds a citation-aware knowledge graph, and answers questions with sources pinned to the exact passage.',
    scry: `  [arXiv PDF] ──▶ <b>parser</b> ──▶ chunker ──▶ <b>Pinecone</b>
        │                                │
        ▼                                ▼
  <b>LangGraph agent</b> ◀──── retrieval ◀──┘
        │
        ▼
  cited answer · passage-pinned`,
    stack: ['LangGraph', 'Claude API', 'Pinecone', 'FastAPI', 'PyMuPDF'],
    links: [['repo', 'https://github.com/Arbiter09/papermind'], ['demo', '#']],
    shot: shotSvg('PaperMind', '#c98a4a', 'ask → retrieve → cite'),
  },
  {
    id: 'devmind',
    name: 'DevMind',
    sub: 'codebase agent',
    sealHue: 356,
    crow: 'He cut token costs 38% on DevMind. The other 62% remain, watching. Waiting.',
    blurb: 'A codebase Q&A agent with MCP tool access — semantic code search, AST-aware chunking, and a context-pruning layer that cut token spend by 38% without dropping answer quality.',
    scry: `  repo ──▶ AST chunker ──▶ embeddings
                 │
   query ──▶ <b>router</b> ──▶ [search | read | trace]
                 │            (MCP tools)
                 ▼
        <b>context pruner  −38% tokens</b>
                 ▼
              answer`,
    stack: ['MCP', 'Claude API', 'tree-sitter', 'FastAPI', 'SQLite'],
    links: [['repo', 'https://github.com/Arbiter09/devmind']],
    shot: shotSvg('DevMind', '#a04838', 'grep, but haunted'),
  },
  {
    id: 'moviepulse',
    name: 'MoviePulse',
    sub: 'ratings forecaster',
    sealHue: 205,
    crow: 'An RMSE of 0.84, he says. To predict whether humans like explosions. Groundbreaking.',
    blurb: 'End-to-end ratings prediction: feature pipelines over 45M ratings, matrix factorization plus gradient-boosted residuals, RMSE 0.84 on held-out users.',
    scry: `  45M ratings ──▶ feature store
                     │
        ┌────────────┴───────────┐
        ▼                        ▼
  <b>matrix factorization</b>    <b>XGBoost residuals</b>
        └───────────┬────────────┘
                    ▼
             blend · <b>RMSE 0.84</b>`,
    stack: ['PySpark', 'XGBoost', 'scikit-learn', 'Airflow', 'Postgres'],
    links: [['repo', 'https://github.com/Arbiter09/moviepulse']],
    shot: shotSvg('MoviePulse', '#4a6e8a', 'explosions: liked'),
  },
  {
    id: 'ethdenver',
    name: 'ETHDenver 2025',
    sub: '2nd place · $3,000',
    sealHue: 45,
    crow: 'Second place at ETHDenver. He mentions it roughly as often as I molt. Constantly.',
    blurb: 'A 36-hour build: an on-chain agent marketplace where autonomous agents negotiate and settle task bounties in USDC. Took 2nd overall — $3,000 USDC, most of which became conference coffee.',
    scry: `  agent A ──offer──▶ <b>escrow contract</b> ◀──bid── agent B
                          │
                    settle in USDC
                          │
                          ▼
                 <b>2nd place · $3,000</b>`,
    stack: ['Solidity', 'Base', 'Claude API', 'wagmi', 'Next.js'],
    links: [['devfolio', '#']],
    shot: shotSvg('ETHDenver', '#8a6e2a', '36 hrs, 0 sleep'),
  },
  {
    id: 'chest',
    name: 'Locked Chest',
    sub: 'sealed by riddle',
    sealHue: 270,
    locked: true,
    crow: 'The chest? Locked. The answer is a number he will not stop saying out loud.',
    riddle: 'I am counted one at a time, in stolen hours, on a site of leets. More than the days of a long year less sixty-five. How many have fallen?',
    answer: (v) => parseInt(v, 10) >= 300 && parseInt(v, 10) <= 400,
    blurb: 'The LeetCode grind: 300+ problems solved. No streak freezes, no editorial-first shortcuts. The souls counter on the home shrine ticks to this number — one soul per problem.',
    scry: `  problem ──▶ 25 min of hubris
                 │
                 ▼
        wrong answer × 3
                 │
                 ▼
        <b>accepted</b> · +1 soul  (×300+)`,
    stack: ['DSA', 'dynamic programming', 'graphs', 'stubbornness'],
    links: [['profile', 'https://leetcode.com/u/Jas_009/']],
    shot: shotSvg('The Grind', '#5a4a7a', '300+ souls acquired'),
  },
];

function shotSvg(title, tint, caption) {
  // hand-drawn placeholder "screenshot" — a scrying pane, not a stock image
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 210'>
    <rect width='400' height='210' fill='%23131009'/>
    <rect x='10' y='10' width='380' height='190' rx='4' fill='none' stroke='${tint.replace('#','%23')}' stroke-opacity='0.5'/>
    <circle cx='26' cy='26' r='4' fill='${tint.replace('#','%23')}' fill-opacity='0.6'/>
    <rect x='40' y='21' width='120' height='9' rx='2' fill='%23d8cfc0' fill-opacity='0.25'/>
    <rect x='26' y='52' width='250' height='7' rx='2' fill='%23d8cfc0' fill-opacity='0.16'/>
    <rect x='26' y='68' width='320' height='7' rx='2' fill='%23d8cfc0' fill-opacity='0.12'/>
    <rect x='26' y='84' width='190' height='7' rx='2' fill='%23d8cfc0' fill-opacity='0.14'/>
    <rect x='26' y='108' width='348' height='64' rx='3' fill='${tint.replace('#','%23')}' fill-opacity='0.10'/>
    <text x='200' y='145' text-anchor='middle' font-family='monospace' font-size='13' fill='${tint.replace('#','%23')}' fill-opacity='0.9'>${title}</text>
    <text x='200' y='163' text-anchor='middle' font-family='monospace' font-size='9' fill='%239c948a'>${caption}</text>
  </svg>`;
  return `data:image/svg+xml,${svg.replace(/\n\s*/g, ' ')}`;
}

function sealSvg(hue, locked) {
  return `<svg viewBox="0 0 64 64" class="seal">
    <path d="M32 6 L54 16 L54 40 Q54 52 32 60 Q10 52 10 40 L10 16 Z"
      fill="hsl(30 12% 14%)" stroke="hsl(35 20% 35%)" stroke-width="1.2"/>
    <circle cx="32" cy="33" r="12.5" fill="hsl(${hue} 45% 30%)" stroke="hsl(${hue} 50% 45%)" stroke-width="1"/>
    <circle cx="32" cy="33" r="12.5" fill="url(#wax-shine)" opacity="0.3"/>
    ${locked
      ? `<path d="M28 33 v-4 a4 4 0 0 1 8 0 v4 M26 33 h12 v9 h-12 z" fill="none" stroke="hsl(${hue} 60% 72%)" stroke-width="1.6"/>`
      : `<path d="M32 26 l2 5 5 0 -4 3.5 1.5 5 -4.5 -3 -4.5 3 1.5 -5 -4 -3.5 5 0 z" fill="hsl(${hue} 55% 68%)" opacity="0.9"/>`}
    <defs><radialGradient id="wax-shine" cx="0.35" cy="0.3" r="0.8">
      <stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </radialGradient></defs>
  </svg>`;
}

let zTop = 20;
const openWindows = new Map();

export function initDesktop() {
  const iconsEl = document.getElementById('desktop-icons');
  const crowEl = document.getElementById('crow-caption');

  for (const p of projects) {
    const el = document.createElement('div');
    el.className = 'desk-icon';
    el.innerHTML = `${sealSvg(p.sealHue, p.locked)}<span class="label">${p.name}<small>${p.sub}</small></span>`;
    el.title = 'double-click to break the seal';
    let crowTimer;
    el.addEventListener('mouseenter', () => {
      crowEl.innerHTML = p.crow;
      crowEl.classList.add('show');
      clearTimeout(crowTimer);
    });
    el.addEventListener('mouseleave', () => {
      crowTimer = setTimeout(() => crowEl.classList.remove('show'), 900);
    });
    el.addEventListener('dblclick', () => openProject(p));
    // mobile: single tap opens
    el.addEventListener('click', () => { if (matchMedia('(hover: none)').matches) openProject(p); });
    iconsEl.appendChild(el);
  }
}

function openProject(p) {
  if (openWindows.has(p.id)) { focusWindow(openWindows.get(p.id)); return; }
  if (p.locked && !p.unlocked) { openRiddle(p); return; }
  spawnWindow(p.id, p.name, windowBody(p));
}

function windowBody(p) {
  return `
    <h4>What it is</h4><p>${p.blurb}</p>
    <h4>Scrying diagram</h4><div class="scry">${p.scry}</div>
    <h4>Glimpse</h4><img class="sw-shot" src="${p.shot}" alt="${p.name} screenshot" />
    <h4>Sigils</h4><div class="sigil-row">${p.stack.map(s => `<span class="sigil">${s}</span>`).join('')}</div>
    <h4>Passages</h4><div class="sw-links">${p.links.map(([t, u]) => `<a href="${u}" target="_blank" rel="noopener">${t} ↗</a>`).join('')}</div>`;
}

function openRiddle(p) {
  const w = spawnWindow('riddle', 'A Sealed Chest', `
    <div class="riddle-box">
      <p>${p.riddle}</p>
      <input type="text" inputmode="numeric" placeholder="answer" aria-label="riddle answer" />
      <p class="dim" style="font-size:12.5px; color: var(--bone-dim); margin-top:10px;">the crow refuses to help</p>
    </div>`);
  const input = w.querySelector('input');
  input.focus();
  input.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    if (p.answer(input.value)) {
      p.unlocked = true;
      closeWindow(w);
      spawnWindow(p.id, p.name + ' — unsealed', windowBody(p));
    } else {
      input.classList.remove('riddle-wrong');
      void input.offsetWidth;
      input.classList.add('riddle-wrong');
      input.value = '';
      input.placeholder = 'the chest remains shut';
    }
  });
}

function spawnWindow(id, title, bodyHtml) {
  const layer = document.getElementById('window-layer');
  const w = document.createElement('div');
  w.className = 'scroll-window';
  w.dataset.wid = id;
  const n = openWindows.size;
  w.style.left = `${36 + n * 34}px`;
  w.style.top = `${24 + n * 30}px`;
  w.style.width = '440px';
  w.style.height = '420px';
  w.innerHTML = `
    <div class="sw-titlebar"><span>❖ ${title}</span>
      <div class="sw-controls">
        <button class="sw-btn" data-act="min" title="seal as scroll">–</button>
        <button class="sw-btn" data-act="close" title="burn">✕</button>
      </div>
    </div>
    <div class="sw-body">${bodyHtml}</div>
    <div class="sw-resize"></div>`;
  layer.appendChild(w);
  openWindows.set(id, w);
  focusWindow(w);

  w.addEventListener('pointerdown', () => focusWindow(w));
  w.querySelector('[data-act="close"]').addEventListener('click', () => closeWindow(w));
  w.querySelector('[data-act="min"]').addEventListener('click', () => minimizeWindow(w, title));

  // drag
  const bar = w.querySelector('.sw-titlebar');
  bar.addEventListener('pointerdown', (e) => {
    if (e.target.closest('.sw-btn')) return;
    const layerRect = layer.getBoundingClientRect();
    const startX = e.clientX - w.offsetLeft, startY = e.clientY - w.offsetTop;
    const move = (ev) => {
      w.style.left = Math.max(0, Math.min(layerRect.width - 80, ev.clientX - startX)) + 'px';
      w.style.top = Math.max(0, Math.min(layerRect.height - 60, ev.clientY - startY)) + 'px';
    };
    const up = () => { removeEventListener('pointermove', move); removeEventListener('pointerup', up); };
    addEventListener('pointermove', move);
    addEventListener('pointerup', up);
  });

  // resize
  w.querySelector('.sw-resize').addEventListener('pointerdown', (e) => {
    e.preventDefault();
    const sw = w.offsetWidth - e.clientX, sh = w.offsetHeight - e.clientY;
    const move = (ev) => {
      w.style.width = Math.max(320, sw + ev.clientX) + 'px';
      w.style.height = Math.max(220, sh + ev.clientY) + 'px';
    };
    const up = () => { removeEventListener('pointermove', move); removeEventListener('pointerup', up); };
    addEventListener('pointermove', move);
    addEventListener('pointerup', up);
  });
  return w;
}

function focusWindow(w) {
  document.querySelectorAll('.scroll-window').forEach(x => x.classList.remove('focused'));
  w.classList.add('focused');
  w.style.zIndex = ++zTop;
  if (w.style.display === 'none') w.style.display = 'flex';
}

function closeWindow(w) {
  openWindows.delete(w.dataset.wid);
  const t = document.querySelector(`.task-scroll[data-wid="${w.dataset.wid}"]`);
  if (t) t.remove();
  w.remove();
}

function minimizeWindow(w, title) {
  w.style.display = 'none';
  const items = document.getElementById('taskbar-items');
  if (items.querySelector(`[data-wid="${w.dataset.wid}"]`)) return;
  const t = document.createElement('button');
  t.className = 'task-scroll';
  t.dataset.wid = w.dataset.wid;
  t.textContent = title.replace(/ — unsealed$/, '');
  t.addEventListener('click', () => { t.remove(); focusWindow(w); });
  items.appendChild(t);
}
