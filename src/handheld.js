// The workbench handheld: a small console found in a drawer.
// Folders first, then works inside them. D-pad browses, A opens, B backs out.
// The crow's line lives in the description box, the way a creature entry would.

const GH = 'https://github.com/Arbiter09';

const categories = [
  {
    id: 'systems',
    name: 'DISTRIBUTED SYSTEMS',
    short: 'SYSTEMS',
    crow: 'Machines that cannot agree, taught to agree. Slowly, and in C++.',
    projects: [
      {
        name: 'MULTIPAXOSDB',
        tag: 'consensus store',
        crow: '10,081 transactions a second, up from 38. He will tell you the number again.',
        lines: [
          'A fault-tolerant distributed transaction system in C++ across 9 servers and 3 shards, implementing Multi-Paxos log replication and Two-Phase Commit over asynchronous gRPC on a single-threaded event loop.',
          'Crash recovery via Paxos ballot persistence and WAL replay. A duplicate-balance bug (474 duplicates) was fixed with idempotency guards, verified to exact 30,000/30,000 conservation under concurrent recovery.',
          'Transaction throughput increased 272x to a mean 10,081 TPS, up from 38, by diagnosing single-transaction batching bottlenecks and generating concurrent workloads across all 3 shard leaders.',
        ],
        stack: ['C++', 'Multi-Paxos', '2PC', 'gRPC', 'LevelDB'],
        link: GH,
      },
      {
        name: 'ARMFORGE',
        tag: 'bare metal OS',
        crow: 'He wrote an operating system for a computer that does not exist.',
        lines: [
          'An open-source AArch64 kernel on QEMU, extended with a fixed-priority RTOS scheduler implementing rate-monotonic scheduling, periodic tasks, mutexes, semaphores, priority inheritance and POSIX signals. 4 microsecond WCRT with zero deadline misses.',
          'A PL011 UART driver with interrupt-driven receive, a 256-byte ring buffer, CRC-framed protocol and ACK/NACK retransmission, exposed as a Unix character device at 0.32ms mean round trip.',
          'An eBPF/XDP network monitor using libbpf CO-RE in SKB mode, classifying guest traffic into BPF map counters and ring-buffer events. Verified on AWS EC2 Graviton2 capturing 10/10 ICMP packets.',
        ],
        stack: ['C', 'AArch64', 'QEMU', 'RTOS', 'eBPF/XDP', 'libbpf'],
        link: GH,
      },
      {
        name: 'KV STORE',
        tag: 'in-memory engine',
        crow: '836,183 operations a second, to store things he will forget by Tuesday.',
        lines: [
          'A Redis-compatible storage engine in C++17 with kqueue/epoll I/O, mmap persistence and a CRC-32 WAL, reaching 836,183 ops/s on loopback. Validated by 5,100 assertions and 50k libFuzzer and ASan iterations.',
          '396,336 ops/s under an 80/20 mixed workload via seqlock RCU concurrent reader threads and WAL group commit, cutting sync overhead 13x, with MVCC snapshot isolation whose transactions survive kill -9.',
          'Hardened with in-process OpenSSL TLS 1.3, AUTH and a Prometheus metrics endpoint. 74 integration tests, CI on Linux and macOS on every push.',
        ],
        stack: ['C++17', 'kqueue/epoll', 'mmap', 'MVCC', 'OpenSSL', 'Prometheus'],
        link: GH,
      },
      {
        name: 'TCP/IP STACK',
        tag: 'user-space networking',
        crow: 'He rebuilt the internet\'s plumbing. The original was working fine.',
        lines: [
          'A user-space TCP/IP stack over raw AF_PACKET sockets with ARP resolution, IP fragmentation and reassembly, and a sliding-window TCP state machine, sustaining 850 Mbps across a 2-node benchmark.',
          'Connection handshake latency cut 35% by replacing per-packet heap allocation with mmap-backed ring buffers for zero-copy packet processing, bringing average SYN-to-ACK down to 46 microseconds.',
          'Diagnosed and fixed a congestion-collapse bug under simulated packet loss with a simplified Reno-style congestion control algorithm, improving throughput stability from 40% to 92% of theoretical link capacity under 5% loss.',
        ],
        stack: ['C++', 'raw sockets', 'epoll', 'Netfilter', 'TCP/IP'],
        link: GH,
      },
    ],
  },
  {
    id: 'aiml',
    name: 'AI / ML',
    short: 'AI / ML',
    crow: 'He builds things that build things now. I remain unemployed.',
    projects: [
      {
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
        name: 'NEURALSERVE',
        tag: 'fine-tune + serving',
        crow: 'He made an 8-billion-parameter model 98.6% less work to train. The other 1.4% took a week.',
        lines: [
          'Fine-tuned LLaMA 3.1 8B on a 12K-sample instruction dataset using LoRA at rank 16 with PyTorch and HuggingFace PEFT, cutting trainable parameters by 98.6% while improving ROUGE-L from 0.29 to 0.41 over the frozen baseline.',
          'A batched inference server in FastAPI with dynamic request batching and Redis-backed KV-cache eviction, sustaining 180 req/min at p95 latency under 420ms on a single AWS EC2 g4dn.xlarge instance.',
          'The serving pipeline is instrumented with OpenTelemetry and a Prometheus and Grafana dashboard tracking token throughput, GPU utilization and cache hit rate across 3 model versions, to catch latency regressions early.',
        ],
        stack: ['PyTorch', 'LoRA', 'HuggingFace', 'FastAPI', 'Redis', 'Docker', 'AWS EC2'],
        link: GH,
      },
      {
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
    ],
  },
  {
    id: 'web3',
    name: 'WEB3',
    short: 'WEB3',
    crow: 'Contracts that hold other people\'s money. He tested them, at least.',
    projects: [
      {
        name: 'STABLECOIN',
        tag: 'WETH / WBTC',
        crow: 'A dollar he invented, backed by two coins that refuse to sit still.',
        lines: [
          'A decentralized, over-collateralized stablecoin protocol in Solidity, letting users mint a USD-pegged token (DSC) against WETH and WBTC collateral through a central DSCEngine contract.',
          'Protocol solvency is enforced by real-time health-factor calculations and a permissionless liquidation mechanism in DSCEngine.sol, using Chainlink price feeds validated through a custom OracleLib to prevent stale-price exploits.',
          'Correctness validated with Foundry: unit tests for the core protocol flows, plus fuzz and invariant suites that continuously verified the system stayed fully over-collateralized under randomized inputs.',
        ],
        stack: ['Solidity', 'Foundry', 'Chainlink', 'DSCEngine', 'invariant tests'],
        link: GH,
      },
      {
        name: 'REBASE TOKEN',
        tag: 'cross-chain',
        crow: 'Interest that follows you across three chains. Like a debt collector, but polite.',
        lines: [
          'A cross-chain, interest-bearing ERC20 rebase token. Users deposit ETH into an L1 Vault to mint RebaseToken, with balances computed dynamically on-chain as principal plus continuously accrued interest.',
          'A custom Chainlink CCIP TokenPool burns tokens on the source chain and encodes each user\'s locked interest rate into the message payload, preserving it on mint across Sepolia, Arbitrum Sepolia and ZKsync Sepolia.',
          'Enforced a monotonically decreasing global rate with per-user rate locking, validated with Foundry unit, fuzz and fork-based cross-chain integration tests.',
        ],
        stack: ['Solidity', 'Foundry', 'Chainlink CCIP', 'ERC20', 'ZKsync'],
        link: GH,
      },
      {
        name: 'NFT & ERC20',
        tag: 'token contracts',
        crow: 'He minted cats. On-chain. Base64-encoded cats.',
        lines: [
          'Two independent Foundry-based Solidity projects. MintCats is an ERC721 suite: a standard BasicNft contract with IPFS-stored metadata, and a dynamic MoodNft that stores fully on-chain Base64-encoded metadata and lets users flip the NFT\'s mood between happy and sad.',
          'OurToken is a custom ERC20 built on OpenZeppelin\'s standard library, with a Foundry deployment script that mints the initial supply to the deployer on broadcast.',
          'A Solidity test suite in Foundry\'s forge covers transfers, allowances and revert conditions, with deployment automated across both projects via Anvil local nodes and testnet RPC configurations.',
        ],
        stack: ['Solidity', 'Foundry', 'OpenZeppelin', 'ERC721', 'ERC20', 'IPFS'],
        link: GH,
      },
      {
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
    ],
  },
  {
    id: 'grind',
    name: 'THE GRIND',
    short: 'THE GRIND',
    locked: true,
    riddle: 'A number, counted one at a time, in stolen hours.',
    crow: 'Sealed. The answer is a number he will not stop saying out loud.',
    projects: [
      {
        name: 'THE GRIND',
        tag: 'unsealed',
        crow: 'Three hundred and counting. He is not well.',
        lines: [
          '300+ LeetCode problems solved, Hard and Medium.',
          'Graphs, dynamic programming, and advanced data structures.',
          'The souls counter on the shrine ticks to the same number. One soul per problem.',
        ],
        stack: ['graphs', 'dynamic programming', 'data structures', 'stubbornness'],
        link: 'https://leetcode.com/u/Jas_009/',
      },
    ],
  },
];

const BODY_STEP = 34; // pixels the D-pad scrolls a detail pane per press

export function initHandheld() {
  const screen = document.getElementById('hh-screen');
  const root = document.getElementById('handheld');

  const state = {
    power: true,
    booting: false,
    view: 'cats',      // cats | menu | detail | lock
    cat: 0,
    proj: 0,
    digits: [0, 0, 0],
    cursor: 0,
    unlocked: false,
    sound: false,
    shake: false,
  };

  const cat = () => categories[state.cat];
  const proj = () => cat().projects[state.proj];

  // ---------- rendering ----------
  function render() {
    if (!state.power || state.booting) return;
    if (state.view === 'cats') return renderCats();
    if (state.view === 'menu') return renderMenu();
    if (state.view === 'lock') return renderLock();
    return renderDetail();
  }

  function renderCats() {
    const c = cat();
    const sealed = x => x.locked && !state.unlocked;
    screen.innerHTML = `
      <div class="scr-head"><span>THE WORKBENCH</span></div>
      <div class="scr-menu">
        ${categories.map((x, i) => `
          <div class="scr-row${i === state.cat ? ' on' : ''}">
            <span class="scr-caret">${i === state.cat ? '▶' : ''}</span>
            <span class="scr-folder">${sealed(x) ? '🔒' : '▤'}</span>
            <span class="scr-name">${x.short}</span>
            <span class="scr-count">${sealed(x) ? '?' : x.projects.length}</span>
          </div>`).join('')}
      </div>
      <div class="scr-box scr-desc"><span class="scr-crow">"${c.crow}"</span></div>
      <div class="scr-foot">
        <span>${sealed(c) ? 'sealed' : c.projects.length + ' works'}</span><span>A ▸ OPEN</span>
      </div>`;
  }

  function renderMenu() {
    const p = proj();
    screen.innerHTML = `
      <div class="scr-head"><span>${cat().short}</span><span class="scr-crumb">B ▸ FOLDERS</span></div>
      <div class="scr-menu">
        ${cat().projects.map((x, i) => `
          <div class="scr-row${i === state.proj ? ' on' : ''}">
            <span class="scr-caret">${i === state.proj ? '▶' : ''}</span>
            <span class="scr-name">${x.name}</span>
          </div>`).join('')}
      </div>
      <div class="scr-box scr-desc"><span class="scr-crow">"${p.crow}"</span></div>
      <div class="scr-foot"><span>${p.tag}</span><span>A ▸ OPEN</span></div>`;
  }

  function renderDetail() {
    const p = proj();
    screen.innerHTML = `
      <div class="scr-head"><span>${p.name}</span><span class="scr-crumb">${cat().short}</span></div>
      <div class="scr-box scr-body" id="scr-body">
        ${p.lines.map(l => `<p>${l}</p>`).join('')}
        ${p.stack.length ? `<div class="scr-stack">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>` : ''}
      </div>
      <div class="scr-foot">
        <span>◀ ▶ SWITCH · ▲ ▼ SCROLL</span><span>A ▸ LINK · B ▸ BACK</span>
      </div>`;
  }

  function renderLock() {
    screen.innerHTML = `
      <div class="scr-head"><span>SEALED</span><span class="scr-crumb">${cat().short}</span></div>
      <div class="scr-box scr-lock${state.shake ? ' wrong' : ''}">
        <p class="scr-riddle">${cat().riddle}</p>
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
    // a cold CRT warming up: a line opens out, then the folders arrive
    state.booting = true;
    state.view = 'cats';
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
    if (btn === 'start') { state.view = 'cats'; render(); return; }

    if (state.view === 'cats') return catsInput(btn);
    if (state.view === 'menu') return menuInput(btn);
    if (state.view === 'lock') return lockInput(btn);
    return detailInput(btn);
  }

  function catsInput(btn) {
    if (btn === 'up') state.cat = (state.cat - 1 + categories.length) % categories.length;
    else if (btn === 'down') state.cat = (state.cat + 1) % categories.length;
    else if (btn === 'a') {
      state.proj = 0;
      if (cat().locked && !state.unlocked) {
        state.view = 'lock';
        state.digits = [0, 0, 0];
        state.cursor = 0;
      } else {
        state.view = 'menu';
      }
    } else return;
    render();
  }

  function menuInput(btn) {
    const list = cat().projects;
    if (btn === 'up') state.proj = (state.proj - 1 + list.length) % list.length;
    else if (btn === 'down') state.proj = (state.proj + 1) % list.length;
    else if (btn === 'b') { state.view = 'cats'; }
    else if (btn === 'a') { state.view = 'detail'; }
    else return;
    render();
  }

  function detailInput(btn) {
    const body = document.getElementById('scr-body');
    if (btn === 'up' && body) { body.scrollTop -= BODY_STEP; return; }
    if (btn === 'down' && body) { body.scrollTop += BODY_STEP; return; }
    if (btn === 'left' || btn === 'right') {
      const list = cat().projects;
      state.proj = (state.proj + (btn === 'right' ? 1 : -1) + list.length) % list.length;
      render();
      return;
    }
    if (btn === 'a') { window.open(proj().link, '_blank', 'noopener'); return; }
    if (btn === 'b') { state.view = 'menu'; render(); }
  }

  function lockInput(btn) {
    if (btn === 'b') { state.view = 'cats'; render(); return; }
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

export { categories };
