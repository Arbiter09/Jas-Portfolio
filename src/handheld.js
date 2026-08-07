// The workbench handheld: a small console found in a drawer. D-pad browses the
// projects, A opens, B backs out. The crow's line lives in the description box,
// the way a creature entry would.

const GH = 'https://github.com/Arbiter09';

const projects = [
  {
    id: 'papermind',
    name: 'PAPERMIND',
    tag: 'research copilot',
    crow: 'It reads the papers so he can pretend he did.',
    lines: [
      'A multi-agent research assistant on LangGraph: planner, retriever and critic agents answering multi-hop questions over academic corpora.',
      '87% answer relevance on a 200-question arXiv CS evaluation set.',
      'The RAG pipeline ingests 3,000+ arXiv PDFs into Pinecone with hybrid retrieval (dense plus BM25 reranking), dropping the hallucination rate from 31% to 9% on factual citation queries.',
      'A critic node scores retrieved context against the query before generation and re-retrieves when confidence falls below threshold, cutting low-confidence responses 43%.',
    ],
    stack: ['LangGraph', 'LangChain', 'Pinecone', 'Claude API', 'FastAPI', 'Python'],
    link: GH,
  },
  {
    id: 'devmind',
    name: 'DEVMIND',
    tag: 'code review agent',
    crow: 'He cut token costs 38%. The other 62% remain. Watching.',
    lines: [
      'An autonomous multi-step code review agent tested across 500+ simulated pull requests, combining the Claude API with MCP-standardized GitHub integrations in an agentic loop.',
      'Redis caching of repeated MCP tool results (file reads, diff fetches) plus structured prompt compression cut Claude API token costs 38%, holding sub-2s p95 latency under concurrent runs.',
      'A self-evaluation loop critiques its own output against a rubric of 12 code quality dimensions, including security checks, before posting review comments.',
    ],
    stack: ['Claude API', 'MCP', 'FastAPI', 'Redis', 'React', 'OpenTelemetry', 'AWS EC2'],
    link: GH,
  },
  {
    id: 'moviepulse',
    name: 'MOVIEPULSE',
    tag: 'recommender',
    crow: 'An RMSE of 0.85. To predict whether humans like explosions. Groundbreaking.',
    lines: [
      'A hybrid recommendation engine combining ALS matrix factorization with content-based filtering on MovieLens 1M: 1M ratings, 6,040 users, 3,883 movies.',
      'RMSE of 0.85 on held-out test data, a 24% improvement over a global-mean baseline.',
      'Top-10 precision improved 56% (Precision@10 of 0.078 against 0.050) by tuning latent factor dimensionality and regularization through 5-fold cross-validation across 56 hyperparameter combinations.',
      'Inference latency cut from 6.9ms to 0.9ms (7.7x) by precomputing and caching top-N recommendations in Redis, serving 1,087 req/s at 200 concurrent requests with zero failures.',
    ],
    stack: ['Python', 'scikit-learn', 'FastAPI', 'Redis', 'PostgreSQL'],
    link: GH,
  },
  {
    id: 'ethdenver',
    name: 'ETHDENVER 2025',
    tag: '2nd place · $3,000',
    crow: 'Second place. He mentions it roughly as often as I molt. Constantly.',
    lines: [
      'A decentralized audio attribution platform, built at ETHDenver 2025.',
      'Took 2nd place, awarded $3,000 USDC.',
    ],
    stack: [],
    link: 'https://devfolio.co/',
  },
  {
    id: 'grind',
    name: 'THE GRIND',
    tag: 'sealed',
    locked: true,
    crow: 'Sealed. The answer is a number he will not stop saying out loud.',
    riddle: 'A number, counted one at a time, in stolen hours.',
    lines: [
      '300+ LeetCode problems solved, Hard and Medium.',
      'Graphs, dynamic programming, and advanced data structures.',
      'The souls counter on the shrine ticks to the same number. One soul per problem.',
    ],
    stack: ['graphs', 'dynamic programming', 'data structures', 'stubbornness'],
    link: 'https://leetcode.com/u/Jas_009/',
  },
];

const BODY_STEP = 26; // pixels the D-pad scrolls a detail pane per press

export function initHandheld() {
  const screen = document.getElementById('hh-screen');
  const root = document.getElementById('handheld');

  const state = {
    power: true,
    booting: false,
    view: 'menu',      // menu | detail | lock
    index: 0,
    digits: [0, 0, 0],
    cursor: 0,         // which digit is selected in the lock view
    unlocked: false,
    sound: false,
    shake: false,
  };

  // ---------- rendering ----------
  function render() {
    if (!state.power || state.booting) return;
    if (state.view === 'menu') return renderMenu();
    if (state.view === 'lock') return renderLock();
    return renderDetail();
  }

  function renderMenu() {
    const p = projects[state.index];
    screen.innerHTML = `
      <div class="scr-head">SELECT A WORK</div>
      <div class="scr-menu">
        ${projects.map((x, i) => `
          <div class="scr-row${i === state.index ? ' on' : ''}">
            <span class="scr-caret">${i === state.index ? '▶' : ''}</span>
            <span class="scr-name">${x.locked && !state.unlocked ? '🔒 ' : ''}${x.name}</span>
          </div>`).join('')}
      </div>
      <div class="scr-box scr-desc">
        <span class="scr-crow">"${p.crow}"</span>
      </div>
      <div class="scr-foot"><span>${p.tag}</span><span>A ▸ OPEN</span></div>`;
  }

  function renderDetail() {
    const p = projects[state.index];
    screen.innerHTML = `
      <div class="scr-head">${p.name}</div>
      <div class="scr-box scr-body" id="scr-body">
        ${p.lines.map(l => `<p>${l}</p>`).join('')}
        ${p.stack.length ? `<div class="scr-stack">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>` : ''}
      </div>
      <div class="scr-foot">
        <span>◀ ▶ SWITCH · ▲ ▼ SCROLL</span><span>A ▸ LINK · B ▸ BACK</span>
      </div>`;
  }

  function renderLock() {
    const p = projects[state.index];
    screen.innerHTML = `
      <div class="scr-head">SEALED</div>
      <div class="scr-box scr-lock${state.shake ? ' wrong' : ''}">
        <p class="scr-riddle">${p.riddle}</p>
        <div class="scr-digits">
          ${state.digits.map((d, i) => `
            <span class="scr-digit${i === state.cursor ? ' on' : ''}">${d}</span>`).join('')}
        </div>
        <div class="scr-digit-hint">▲ ▼ CHANGE · ◀ ▶ MOVE</div>
      </div>
      <div class="scr-foot"><span>the crow refuses to help</span><span>A ▸ TRY · B ▸ BACK</span></div>`;
  }

  // ---------- power ----------
  const powerBtn = document.getElementById('hh-power');

  function setPower(on) {
    state.power = on;
    root.classList.toggle('off', !on);
    powerBtn.setAttribute('aria-checked', String(on));

    if (!on) {
      state.booting = false;
      screen.innerHTML = '';
      return;
    }
    // a cold CRT warming up: a line opens out, then the menu arrives
    state.booting = true;
    state.view = 'menu';
    screen.innerHTML = `<div class="scr-bootline"></div>`;
    beep(880);
    setTimeout(() => { state.booting = false; render(); beep(1180); }, 620);
  }

  powerBtn.addEventListener('click', () => setPower(!state.power));

  // ---------- input ----------
  function press(btn) {
    if (!state.power || state.booting) return;
    beep(btn === 'a' ? 660 : btn === 'b' ? 330 : 520);

    if (btn === 'select') { state.sound = !state.sound; flash(`SOUND ${state.sound ? 'ON' : 'OFF'}`); return; }
    if (btn === 'start') { state.view = 'menu'; render(); return; }

    if (state.view === 'menu') return menuInput(btn);
    if (state.view === 'lock') return lockInput(btn);
    return detailInput(btn);
  }

  function menuInput(btn) {
    if (btn === 'up') state.index = (state.index - 1 + projects.length) % projects.length;
    else if (btn === 'down') state.index = (state.index + 1) % projects.length;
    else if (btn === 'a') {
      const p = projects[state.index];
      state.view = (p.locked && !state.unlocked) ? 'lock' : 'detail';
      if (state.view === 'lock') { state.digits = [0, 0, 0]; state.cursor = 0; }
    } else return;
    render();
  }

  function detailInput(btn) {
    const body = document.getElementById('scr-body');
    if (btn === 'up' && body) { body.scrollTop -= BODY_STEP; return; }
    if (btn === 'down' && body) { body.scrollTop += BODY_STEP; return; }
    if (btn === 'left' || btn === 'right') {
      const dir = btn === 'right' ? 1 : -1;
      // skip past the chest while it is still sealed
      let i = state.index, guard = 0;
      do {
        i = (i + dir + projects.length) % projects.length;
        guard++;
      } while (projects[i].locked && !state.unlocked && guard < projects.length);
      state.index = i;
      render();
      return;
    }
    if (btn === 'a') { window.open(projects[state.index].link, '_blank', 'noopener'); return; }
    if (btn === 'b') { state.view = 'menu'; render(); }
  }

  function lockInput(btn) {
    if (btn === 'b') { state.view = 'menu'; render(); return; }
    if (btn === 'left') state.cursor = (state.cursor + 2) % 3;
    else if (btn === 'right') state.cursor = (state.cursor + 1) % 3;
    else if (btn === 'up') state.digits[state.cursor] = (state.digits[state.cursor] + 1) % 10;
    else if (btn === 'down') state.digits[state.cursor] = (state.digits[state.cursor] + 9) % 10;
    else if (btn === 'a') {
      const value = Number(state.digits.join(''));
      if (value >= 300 && value <= 400) {
        state.unlocked = true;
        state.view = 'detail';
        flash('SEAL BROKEN');
      } else {
        state.shake = true;
        render();
        setTimeout(() => { state.shake = false; render(); }, 450);
        return;
      }
    } else return;
    render();
  }

  // ---------- feedback ----------
  function flash(text) {
    const el = document.createElement('div');
    el.className = 'scr-flash';
    el.textContent = text;
    screen.appendChild(el);
    setTimeout(() => el.remove(), 1100);
  }

  let audio;
  function beep(freq) {
    if (!state.sound) return;
    try {
      audio = audio || new (window.AudioContext || window.webkitAudioContext)();
      const osc = audio.createOscillator(), gain = audio.createGain();
      osc.type = 'square';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.035, audio.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 0.09);
      osc.connect(gain).connect(audio.destination);
      osc.start();
      osc.stop(audio.currentTime + 0.1);
    } catch { /* a console with no speaker still plays fine */ }
  }

  // ---------- wiring ----------
  root.querySelectorAll('[data-btn]').forEach(b => {
    b.addEventListener('click', () => press(b.dataset.btn));
  });

  const KEYS = {
    ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right',
    z: 'a', Z: 'a', Enter: 'a', x: 'b', X: 'b', Escape: 'b', Backspace: 'b',
  };
  window.addEventListener('keydown', (e) => {
    if (!document.getElementById('page-projects').classList.contains('active')) return;
    if (!state.power || state.booting) return;
    const btn = KEYS[e.key];
    if (!btn) return;
    e.preventDefault();
    press(btn);
    const el = root.querySelector(`[data-btn="${btn}"]`);
    if (el) { el.classList.add('pressed'); setTimeout(() => el.classList.remove('pressed'), 110); }
  });

  render();
}
