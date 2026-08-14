// The workbench handheld: a small console found in a drawer.
// Folders first, then works inside them. D-pad browses, A opens, B backs out.
// The crow's line lives in the description box, the way a creature entry would.
// The Games folder holds playable cartridges rather than write-ups.

import { games } from './games.js';


const categories = [
  {
    id: 'systems',
    name: 'DISTRIBUTED SYSTEMS',
    short: 'SYSTEMS',
    crow: 'Machines that cannot agree, taught to agree. Slowly, and in C++.',
    projects: [
      {
        name: 'REAL-TIME PIPELINE',
        tag: 'streaming, stress-tested',
        crow: 'He killed his own broker mid-stream to see what would happen. Repeatedly.',
        lines: [
          'A ride-hailing event pipeline built to be broken on purpose. Kafka into a checkpointed Spark Structured Streaming job into a three-node Cassandra ring for keyed reads, with PostgreSQL holding a star schema and Airflow running the rollups, the dead-letter drain and backfills. One Docker Compose file brings up the lot.',
          'A Kafka broker, a Spark executor and a Cassandra node were each SIGKILLed mid-stream under sustained load. Every event was accounted for across all six runs: written, or quarantined in a replayable dead letter queue. Nothing vanished. That is structural rather than lucky, resting on unclean leader election being disabled so an out-of-sync replica can never truncate acknowledged writes, and on Cassandra primary keys derived from the event so a replay upserts instead of duplicating.',
          'Sustained 1,200 events/sec, which is 3,600 Cassandra writes/sec at replication factor 3. Defined strictly: the highest rate where the producer holds its target, consumer lag stays flat, the backlog drains and reconciliation shows zero unaccounted events. 1,400/sec fails that bar.',
          'Three claims did not survive measurement and are documented rather than quietly dropped. Sub-second end-to-end latency was false, with a p95 floor near 5.4 seconds. A backoff A/B promising 95% less loss produced 87.7% on one batch and 18.4% on the next under identical config, which is noise. And permanent loss was zero regardless, because anything exhausting its retries lands in the DLQ, so there was never a loss percentage to reduce.',
          'Three brokers and three Cassandra nodes run on one physical host. That proves failover logic; it proves nothing about cross-host network partitions.',
        ],
        stack: ['Kafka', 'Spark Streaming', 'Cassandra', 'PostgreSQL', 'Airflow', 'Prometheus', 'Grafana', 'Docker'],
        link: 'https://github.com/Arbiter09/Real-Time-Data-Pipeline',
      },
      {
        name: 'MULTIPAXOSDB',
        tag: 'consensus store',
        crow: '10,081 transactions a second, up from 38. He will tell you the number again.',
        lines: [
          'A fault-tolerant distributed transaction system in C++ across 9 servers and 3 shards, implementing Multi-Paxos log replication and Two-Phase Commit over asynchronous gRPC on a single-threaded event loop.',
          'Crash recovery via Paxos ballot persistence and WAL replay. A duplicate-balance bug (474 duplicates) was fixed with idempotency guards, verified to exact 30,000/30,000 conservation under concurrent recovery.',
          'Transaction throughput went from 38 to a mean 10,081 TPS, a 265x improvement across seven runs of a Python harness. The bottleneck was neither the network nor consensus but batching: the system committed one transaction at a time, and the workload generator only ever drove a single shard leader instead of all three.',
        ],
        stack: ['C++', 'Multi-Paxos', '2PC', 'gRPC', 'LevelDB'],
        link: 'https://github.com/Arbiter09/MultiPaxosDB',
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
        link: 'https://github.com/Arbiter09/ArmForge',
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
        link: 'https://github.com/Arbiter09/Redis-Compatible-KeyValue-Storage-Engine',
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
        link: 'https://github.com/Arbiter09/Custom-User-Space-TCP-IP-Stack',
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
        name: 'MOVIEPULSE',
        tag: 'recommender',
        crow: 'Two hundred and eighty models trained, and recommending whatever is popular still beats it.',
        lines: [
          'MovieLens 1M read out of MongoDB, curated through PySpark into Apache Iceberg tables with a user-stratified split, trained with Spark MLlib ALS, batch-scored nightly into Redis and served from FastAPI.',
          'Plain L2-regularized ALS memorized the training set: 0.4736 train RMSE against 1.2121 on test, which is worse than predicting the global average rating (1.1464). A model losing to doing nothing is a sharper signal than a train/test gap alone. Scaling the penalty by each user and item rating count, the ALS-WR approach, brought test RMSE to 0.87.',
          'The useful finding came out of the search. Eight ranks by seven regularization values at five folds is 280 fits. Across the whole rank range test RMSE spanned 0.0018, indistinguishable from noise, while Precision@10 moved monotonically from 0.0202 to 0.0492, a 2.4x difference. Selecting on error alone would have called the smallest rank equivalent and shipped less than half the ranking quality.',
          'Serving does atomic model versioning: Redis keys are namespaced by version, and the batch job writes every user under the new one while the live pointer still names the old. A retrain that dies partway never publishes, and rollback is a single pointer write because the old keys were never deleted.',
          'A popularity baseline, recommending the most-rated films to everyone, scores 0.0784 on Precision@10 and beats the tuned model. Explicit-feedback ALS optimizes squared error on observed ratings, so an obscure film with two five-star ratings can outrank a broadly loved one.',
        ],
        stack: ['PySpark', 'Spark MLlib', 'Apache Iceberg', 'MongoDB', 'Redis', 'FastAPI'],
        link: 'https://github.com/Arbiter09/MoviePulse',
      },
      {
        name: 'DEVMIND',
        tag: 'PR review agent',
        crow: 'It decides for itself what evidence it needs. He still asks me.',
        lines: [
          'A pull request review agent, where the question was never whether a model can write a review but whether it can decide what it needs to know. Claude gets nine MCP tool schemas and up to fifteen turns, choosing each call from what the last one returned. A documentation-only change never triggers vulnerability scanning; one touching dependencies does. The sequence is hardcoded nowhere.',
          'A second pass scores the draft against twelve quality dimensions covering correctness, security, performance, error handling and test coverage, then rewrites its three weakest until it clears 3.5 out of 5 or hits three iterations. The diff sits in the cached system prompt, so a refinement pass costs roughly a tenth of the input tokens.',
          'The worker fleet autoscales 4 to 15 pods on queue depth rather than CPU, because an agent waiting on the Anthropic and GitHub APIs idles near 2% of a core and a CPU-targeted autoscaler would never fire however deep the backlog grew. KEDA reads Redis stream lag and drives an ordinary HorizontalPodAutoscaler from it. Backlog held between 89 and 134 across 946 jobs.',
          'Two traps worth naming. KEDA\'s default Redis trigger counts pending entries, which includes work already claimed, so adding pods raises the very metric being scaled on; switching to lag count breaks that feedback loop. And Argo CD with self-heal treats every scale-up as drift and scales the fleet straight back down, unless the Deployment omits replicas entirely and the Application ignores that path.',
          'Published as @arbiter09/github-mcp on npm and registered on Smithery, usable standalone in Cursor or Claude Desktop. The deployed target is a local four-node kind cluster, so the scaling figures and Jaeger traces were measured there, not on EKS.',
        ],
        stack: ['Claude API', 'MCP', 'FastAPI', 'Redis Streams', 'Kubernetes', 'KEDA', 'Argo CD', 'OpenTelemetry'],
        link: 'https://github.com/Arbiter09/DevMind',
      },
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
        link: 'https://github.com/Arbiter09/PaperMind',
      },
      {
        name: 'MCPTRACE',
        tag: 'agent inspector',
        crow: 'He built surveillance for his own agents. They have no idea.',
        lines: [
          'A transparent inspection and debugging layer that sits between an agent and its MCP server. Every tool call passing through is intercepted, logged, timed and streamed to a live terminal-style dashboard, replacing print-debugging across long agentic loops.',
          'Runs as a transparent proxy, so agents behave identically with or without it in front. A mock mode replays captured snapshots offline, decoupling test runs from live APIs.',
          'A pytest plugin ships session-scoped fixtures and assertion helpers: assert a tool was called, with which arguments, how many times, whether every response matches a JSON schema, and diff a run against a saved baseline to catch trace regressions.',
          'The React dashboard streams over SSE with expandable JSON rows, per-tool latency charts that turn amber above 500ms, and a replay button that re-fires any recorded call through the mock server. Traces persist in SQLite and export as JSON snapshots.',
        ],
        stack: ['FastAPI', 'SQLModel', 'SQLite', 'SSE', 'React', 'TypeScript', 'pytest', 'Docker'],
        link: 'https://github.com/Arbiter09/MCPTrace',
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
        link: 'https://github.com/Arbiter09/NeuralServe',
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
        link: 'https://github.com/Arbiter09/Crypto-Collateralized-Stablecoin-WETH-WBTC-',
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
        link: 'https://github.com/Arbiter09/Cross-Chain-Rebase-Token',
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
        link: 'https://github.com/Arbiter09/MintCats',
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
    id: 'fullstack',
    name: 'FULL-STACK',
    short: 'FULL-STACK',
    crow: 'The ones with actual users. He worries about those.',
    projects: [
      {
        name: 'RENTIFUL',
        tag: 'rental platform',
        crow: 'A rental platform with geospatial queries. He has never rented out anything.',
        lines: [
          'A production-oriented real estate rental platform: Next.js with server rendering on the front, Node and Express behind it, and Prisma over PostgreSQL with the PostGIS extension for geospatial property queries.',
          'Mapbox GL drives interactive property mapping, alongside advanced filtering across listings and full CRUD over properties, leases and applications.',
          'AWS Cognito handles authentication and authorization, with the backend on EC2, the database on RDS, media in S3, and the frontend deployed through Amplify.',
          'Redux Toolkit and RTK Query manage state and API interaction, React Hook Form with Zod handles validation, and Shadcn UI over Tailwind carries the interface.',
        ],
        stack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'Prisma', 'PostGIS', 'Mapbox GL', 'AWS Cognito', 'Amplify'],
        link: 'https://github.com/Arbiter09/Rentiful',
      },
      {
        name: 'NETFLIXGEMINI',
        tag: 'AI movie discovery',
        crow: 'Netflix, except it argues with you about what to watch.',
        lines: [
          'A Netflix-style movie discovery interface on Vite and React, with Gemini AI powering natural-language search: a query like "funny sci-fi from the 90s" is parsed by Gemini and reconciled against TMDB results.',
          'Firebase handles authentication, profile management and protected routing, while Redux Toolkit splits global state across user, movies and Gemini slices.',
          'A custom hook per data need (now playing, popular, top rated, upcoming, trailers), memoized selectors for performance, and embedded YouTube trailers that autoplay muted.',
          'Deployed on Firebase Hosting with every API key managed through environment variables.',
        ],
        stack: ['Vite', 'React', 'Redux Toolkit', 'Firebase', 'Gemini API', 'TMDB', 'Tailwind'],
        link: 'https://github.com/Arbiter09/NetflixGemini-AI-Movie-Recommendation-App',
      },
      {
        name: 'EPICURIA',
        tag: 'food ordering',
        crow: 'A food app. He wrote tests for it, which is more than he does for dinner.',
        lines: [
          'A React restaurant discovery and food ordering app: browse restaurants by rating, cuisine, pricing and delivery estimate, then drill into full menus with per-item descriptions, pricing and vegetarian indicators.',
          'A custom useRestaurantMenu hook abstracts the API layer with its loading and error states, while shimmer skeletons that mirror the real component structure keep loading from feeling broken.',
          'Routing through React Router, a mobile-first responsive grid in Tailwind, and imagery optimized through a Cloudinary CDN.',
          'Covered by a Jest suite spanning the app\'s components and user flows.',
        ],
        stack: ['React', 'React Router', 'Redux Toolkit', 'Tailwind', 'Jest', 'Parcel', 'Cloudinary'],
        link: 'https://github.com/Arbiter09/Epicuria',
      },
      {
        name: 'POKEDEX',
        tag: 'all 151',
        crow: 'All 151. He cached them locally, in case they escape.',
        lines: [
          'A Vite and React Pokedex for the original 151, pulling stats, types, abilities, moves and sprite variants from the PokeAPI.',
          'Search filters the roster by name or number, and clicking any move opens a modal with its details.',
          'localStorage caching keeps Pokemon and move data on the client between visits, so repeat views never re-fetch.',
          'Responsive layout with a persistent sidebar on desktop that collapses behind a menu button on mobile.',
        ],
        stack: ['React', 'Vite', 'PokeAPI', 'localStorage', 'CSS'],
        link: 'https://github.com/Arbiter09/React-PokeDex',
      },
    ],
  },
  {
    id: 'games',
    name: 'GAMES',
    short: 'GAMES',
    crow: 'He built a console, then built things to do on it. This is called avoidance.',
    projects: games.map(g => ({ name: g.name, tag: g.tag, crow: g.crow, game: g })),
  },
];

// The D-pad scrolls a detail pane by most of a screenful rather than a fixed
// nudge. The longest write-ups run several hundred pixels past the pane, and a
// 34px step turned those into a dozen presses.
const BODY_STEP_RATIO = 0.68;
const BODY_STEP_MIN = 90;
const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initHandheld() {
  const screen = document.getElementById('hh-screen');
  const root = document.getElementById('handheld');

  const state = {
    power: true,
    booting: false,
    view: 'cats',      // cats | menu | detail | game
    cat: 0,
    proj: 0,
    sound: false,
  };

  let game = null, gameRaf = 0, gameLast = 0, gameHud = null;
  // Which buttons are currently down. Discrete presses are enough to browse a
  // menu, but a paddle has to slide for as long as you lean on a direction.
  const held = new Set();

  const cat = () => categories[state.cat];
  const proj = () => cat().projects[state.proj];

  // ---------- rendering ----------
  function render() {
    if (!state.power || state.booting) return;
    if (state.view === 'cats') return renderCats();
    if (state.view === 'menu') return renderMenu();
    if (state.view === 'game') return renderGame();
    return renderDetail();
  }

  function renderCats() {
    const c = cat();
    screen.innerHTML = `
      <div class="scr-head"><span>THE WORKBENCH</span></div>
      <div class="scr-menu">
        ${categories.map((x, i) => `
          <div class="scr-row${i === state.cat ? ' on' : ''}">
            <span class="scr-caret">${i === state.cat ? '▶' : ''}</span>
            <span class="scr-folder">▤</span>
            <span class="scr-name">${x.short}</span>
            <span class="scr-count">${x.projects.length}</span>
          </div>`).join('')}
      </div>
      <div class="scr-box scr-desc"><span class="scr-crow">"${c.crow}"</span></div>
      <div class="scr-foot">
        <span>${c.projects.length} works</span><span>A ▸ OPEN</span>
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

  // ---------- cartridges ----------
  // The console owns the loop and the input; a game only knows how to advance
  // itself and paint. Leaving the view, cutting the power or switching tabs all
  // stop it, so nothing keeps running behind a screen nobody is looking at.
  function renderGame() {
    const g = proj().game;
    screen.innerHTML = `
      <div class="scr-head"><span>${g.name}</span><span class="scr-crumb">GAMES</span></div>
      <canvas class="scr-canvas" id="game-canvas"></canvas>
      <div class="scr-foot"><span id="game-hud">${g.hint}</span><span>B ▸ LEAVE</span></div>`;

    const canvas = document.getElementById('game-canvas');
    gameHud = document.getElementById('game-hud');
    // lay out first so the canvas has its real box, then match the backing store
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cw = Math.round(rect.width), ch = Math.round(rect.height);
    canvas.width = cw * dpr;
    canvas.height = ch * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    held.clear();
    game = g.create(cw, ch, held);
    gameLast = performance.now();
    cancelAnimationFrame(gameRaf);
    const loop = (t) => {
      gameRaf = requestAnimationFrame(loop);
      // Clamp the delta. A delayed first frame, a background tab or a stalled
      // renderer would otherwise hand the game hundreds of milliseconds at
      // once, and a fixed-timestep game would fast-forward several moves and
      // kill the player before they touched anything.
      const dt = Math.min(t - gameLast, 64);
      gameLast = t;
      // freeze rather than tear down while the tab is elsewhere
      if (!document.getElementById('page-projects').classList.contains('active')) return;
      game.update(dt);
      game.draw(ctx);
      if (gameHud) gameHud.textContent = game.hud();
    };
    gameRaf = requestAnimationFrame(loop);
  }

  function stopGame() {
    cancelAnimationFrame(gameRaf);
    gameRaf = 0; game = null; gameHud = null;
    held.clear();
  }

  // ---------- power ----------
  const powerBtn = document.getElementById('hh-power');

  function setPower(on) {
    state.power = on;
    root.classList.toggle('off', !on);
    powerBtn.setAttribute('aria-checked', String(on));

    if (!on) {
      state.booting = false;
      stopGame();
      screen.innerHTML = '';
      return;
    }
    state.view = 'cats';
    if (REDUCED) { state.booting = false; render(); return; }
    // a cold CRT warming up: a line opens out, then the folders arrive
    state.booting = true;
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
    if (btn === 'start') { stopGame(); state.view = 'cats'; render(); return; }

    if (state.view === 'game') {
      if (btn === 'b') { stopGame(); state.view = 'menu'; render(); return; }
      if (game) game.input(btn);
      return;
    }
    if (state.view === 'cats') return catsInput(btn);
    if (state.view === 'menu') return menuInput(btn);
    return detailInput(btn);
  }

  function catsInput(btn) {
    if (btn === 'up') state.cat = (state.cat - 1 + categories.length) % categories.length;
    else if (btn === 'down') state.cat = (state.cat + 1) % categories.length;
    else if (btn === 'a') { state.proj = 0; state.view = 'menu'; }
    else return;
    render();
  }

  function menuInput(btn) {
    const list = cat().projects;
    if (btn === 'up') state.proj = (state.proj - 1 + list.length) % list.length;
    else if (btn === 'down') state.proj = (state.proj + 1) % list.length;
    else if (btn === 'b') { state.view = 'cats'; }
    else if (btn === 'a') { state.view = proj().game ? 'game' : 'detail'; }
    else return;
    render();
  }

  function detailInput(btn) {
    const body = document.getElementById('scr-body');
    const step = body ? Math.max(BODY_STEP_MIN, body.clientHeight * BODY_STEP_RATIO) : 0;
    if (btn === 'up' && body) { body.scrollTop -= step; return; }
    if (btn === 'down' && body) { body.scrollTop += step; return; }
    if (btn === 'left' || btn === 'right') {
      const list = cat().projects;
      state.proj = (state.proj + (btn === 'right' ? 1 : -1) + list.length) % list.length;
      render();
      return;
    }
    if (btn === 'a') { window.open(proj().link, '_blank', 'noopener'); return; }
    if (btn === 'b') { state.view = 'menu'; render(); }
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

  // Clicking anywhere on the shell hands focus to the screen, so the device is
  // playable straight after a tap without stealing keys from the rest of the page.
  root.querySelector('.hh-shell').addEventListener('pointerdown', (e) => {
    if (!e.target.closest('[data-btn]') && !e.target.closest('#hh-power')) screen.focus();
  });
  root.querySelectorAll('[data-btn]').forEach(b => {
    b.addEventListener('click', () => screen.focus());
    // holding a control with the pointer counts as holding it, so a press and
    // hold on the on-screen D-pad slides the paddle just like the arrow keys
    b.addEventListener('pointerdown', () => held.add(b.dataset.btn));
    b.addEventListener('pointerup', () => held.delete(b.dataset.btn));
    b.addEventListener('pointerleave', () => held.delete(b.dataset.btn));
    b.addEventListener('pointercancel', () => held.delete(b.dataset.btn));
  });

  // a key released outside the page, or a lost window, must not leave a
  // direction stuck down
  window.addEventListener('keyup', (e) => { const b = KEYS[e.key]; if (b) held.delete(b); });
  window.addEventListener('blur', () => held.clear());

  window.addEventListener('keydown', (e) => {
    // Only swallow the D-pad keys while the device actually holds focus.
    // Otherwise the arrows belong to the page, and this tab is tall enough
    // that people need them to scroll.
    if (!root.contains(document.activeElement)) return;
    if (!state.power || state.booting) return;
    const btn = KEYS[e.key];
    if (!btn) return;
    e.preventDefault();
    held.add(btn);
    press(btn);
    const el = root.querySelector(`[data-btn="${btn}"]`);
    if (el) { el.classList.add('pressed'); setTimeout(() => el.classList.remove('pressed'), 110); }
  });

  render();
}

export { categories };
