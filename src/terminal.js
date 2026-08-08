// The hatch: a real shell down to the archive.

const RUNES = ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ'];

export function initTerminal(navigateTo) {
  const out = document.getElementById('term-output');
  const input = document.getElementById('term-input');
  const screen = document.getElementById('term-screen');
  const history = [];
  let histIdx = -1;
  let game = null; // active rune game state

  const print = (html = '') => {
    const div = document.createElement('div');
    div.innerHTML = html;
    out.appendChild(div);
    screen.scrollTop = screen.scrollHeight;
  };

  print(`<span class="dim">last login: a Sunday, well past midnight — candle at 40%</span>`);
  print(`type <span class="warm">help</span> to see what the archive holds\n`);

  screen.addEventListener('click', () => input.focus());

  const files = {
    'experience.md': `<span class="gold"># experience.md</span>

<span class="warm">## Software Developer (Research)</span> — Stony Brook University <span class="dim">(Aug 2025–present)</span>
- Fair Representation Act rules translated into a graph-based gluing
  algorithm: contiguity, compactness, proportional seats via BFS, 50 states
- 5,000+ MCMC ensemble simulations (MGGG GerryChain) on Seawulf HPC;
  Slurm scheduling lifted throughput 35%

<span class="warm">## Software Developer Intern</span> — Good Ai, San Francisco <span class="dim">(remote, Jul 2025–Jun 2026)</span>
- AWS SQS + Kinesis event pipeline, least-privilege IAM across 6 consumers,
  200K+ events/day at sub-150ms lag
- 30+ reusable React + TypeScript components, WCAG 2.1, 95%+ Vitest coverage
- OpenTelemetry + Prometheus/Grafana across 5+ services, MTTD down 35%

<span class="warm">## MS, Data Science</span> <span class="dim">(CS track)</span> — Stony Brook University <span class="dim">(Aug 2024–May 2026)</span>
- GPA 3.73/4.00, top 10%

<span class="warm">## Software Developer Intern</span> — Kotton King, Singapore <span class="dim">(remote, Mar 2024–Aug 2024)</span>
- Java/Spring Boot + PostgreSQL: response latency down 40%, 10K+ daily requests
- 8 endpoints hardened against SQL injection; fixed-window rate limiting
- Webhook-driven CI/CD (Actions, Docker, K8s): deploys 20% faster, 3 services

<span class="warm">## B.E., Information Technology</span> — University of Mumbai <span class="dim">(Aug 2020–Jun 2024)</span> · GPA 9.2/10`,
    'skills.json': `{
  <span class="warm">"ai_ml"</span>:     ["Claude API", "MCP", "LangChain", "DSPy", "PyTorch",
                "HuggingFace Transformers", "scikit-learn", "LoRA fine-tuning"],
  <span class="warm">"systems"</span>:   ["Multi-Paxos", "2PC", "raw sockets", "TCP/IP", "epoll/kqueue",
                "gRPC", "eBPF/XDP", "RTOS", "LevelDB", "MVCC"],
  <span class="warm">"languages"</span>: ["Python", "C/C++", "Java", "Go", "JavaScript", "TypeScript", "SQL", "Bash"],
  <span class="warm">"data_cloud"</span>:["AWS (EC2, RDS, S3, IAM)", "GCP", "Databricks", "Spark",
                "Kafka", "PostgreSQL", "Redis", "MongoDB"],
  <span class="warm">"backend"</span>:   ["FastAPI", "Spring Boot", "REST", "GraphQL", "gRPC",
                "Docker", "Kubernetes", "CI/CD", "OpenTelemetry"],
  <span class="warm">"frontend"</span>:  ["React", "Next.js", "Redux Toolkit", "Tailwind", "Vitest", "WCAG 2.1"],
  <span class="warm">"web3"</span>:      ["Solidity", "Foundry", "Chainlink", "Chainlink CCIP", "OpenZeppelin",
                "ERC20", "ERC721", "invariant + fuzz testing", "Anvil"],
  <span class="warm">"misc"</span>:      ["candle maintenance", "crow diplomacy", <span class="gold">"shipping on Sundays"</span>]
}`,
    'grind.txt': `leetcode: 300+ solved (hard/medium). graphs, DP, advanced data structures.
the sealed chest on the handheld knows the number.`,
  };

  const projectsLs = `<span class="warm">systems/</span>
  <span class="gold">multipaxosdb/</span>  9 servers · 3 shards · Multi-Paxos + 2PC · 10,081 TPS
  <span class="gold">armforge/</span>      AArch64 bare metal · RTOS scheduler · 4µs WCRT
  <span class="gold">kvstore/</span>       Redis-compatible C++17 engine · 836,183 ops/s
  <span class="gold">tcpip/</span>         user-space stack · 850 Mbps · 46µs SYN-to-ACK

<span class="warm">ai-ml/</span>
  <span class="gold">papermind/</span>     multi-agent research assistant · 87% answer relevance
  <span class="gold">devmind/</span>       code review agent · MCP · −38% token spend
  <span class="gold">neuralserve/</span>   LLaMA 3.1 8B LoRA · ROUGE-L 0.29→0.41 · p95 &lt;420ms
  <span class="gold">moviepulse/</span>    hybrid recommender · RMSE 0.85 · 7.7x faster inference

<span class="warm">web3/</span>
  <span class="gold">stablecoin/</span>    over-collateralized DSC · WETH/WBTC · Chainlink oracles
  <span class="gold">rebase-token/</span>  cross-chain interest-bearing ERC20 · Chainlink CCIP
  <span class="gold">nft-erc20/</span>     MintCats ERC721 + on-chain Base64 MoodNft · OurToken
  <span class="gold">ethdenver/</span>     decentralized audio attribution · 2nd · $3,000 USDC

<span class="warm">the-grind/</span>     <span class="err">sealed</span> — boot the handheld in Projects, bring a number`;

  const commands = {
    help: () => `<span class="gold">the archive responds to:</span>
  whoami            ls [projects]      cat &lt;file&gt;
  cd projects       open resume        sudo hire-me
  runes             clear              history
<span class="dim">  ...and a few words it does not advertise.</span>`,
    whoami: () => `jas — backend engineer · agent builder · weekend shipper
<span class="dim">uid=1000(jas) gid=1000(bench) groups=chai,hpc,hunters-dream</span>`,
    pwd: () => `/home/jas/archive`,
    date: () => new Date().toString(),
    ls: (args) => {
      if (args[0] === 'projects') return projectsLs;
      return `<span class="gold">projects/</span>  experience.md  skills.json  grind.txt  <span class="dim">.secrets</span>`;
    },
    cat: (args) => {
      const f = args.join(' ');
      if (!f) return `<span class="err">cat: which scroll?</span>`;
      if (f === '.secrets') return `<span class="dim">nice try. the crow ate them.</span>`;
      if (f === 'resume' || f === 'resume.pdf') return commands.open(['resume']);
      return files[f] || `<span class="err">cat: ${esc(f)}: no such scroll in the archive</span>`;
    },
    cd: (args) => {
      const t = (args[0] || '').replace(/\/$/, '');
      const map = { projects: 'projects', experience: 'experience', shiplog: 'shiplog', home: 'home', contact: 'contact', '~': 'home' };
      if (map[t]) {
        setTimeout(() => navigateTo(map[t]), 450);
        return `<span class="dim">passing through the fog gate → ${map[t]}...</span>`;
      }
      return `<span class="err">cd: ${esc(t) || '(nowhere)'}: the path is barred</span>`;
    },
    open: (args) => {
      if (args[0] === 'resume') {
        return `<span class="dim">unfurling the illustrated scroll...</span>
resume: <a href="${import.meta.env.BASE_URL}resume.pdf" target="_blank">resume.pdf</a> <span class="dim">(place your PDF at /public/resume.pdf)</span>`;
      }
      return `<span class="err">open: only the resume unrolls from here</span>`;
    },
    sudo: (args) => {
      if (args.join(' ').startsWith('hire-me')) {
        return `<span class="dim">[sudo] password for jas: ********</span>
<span class="gold">╔══════════════════════════════════════╗
║   PRIVILEGE ESCALATION SUCCESSFUL    ║
║   role: whatever needs shipping      ║
║   start date: negotiable             ║
║   contact: jasshah9513@gmail.com     ║
╚══════════════════════════════════════╝</span>
<span class="warm">HR daemon notified. A raven has been dispatched.</span>`;
      }
      return `<span class="err">jas is not in the sudoers file. this incident will be reported to the crow.</span>`;
    },
    history: () => history.map((h, i) => `  ${i + 1}  ${esc(h)}`).join('\n') || '<span class="dim">(empty)</span>',
    clear: () => { out.innerHTML = ''; return null; },
    echo: (args) => esc(args.join(' ')),
    // ——— the unadvertised words ———
    'praise': () => `<span class="gold">\\[T]/  PRAISE THE SUN  \\[T]/</span>`,
    bonfire: () => `<span class="warm">bonfire lit.</span> <span class="dim">progress saved. it was always saved — git exists.</span>`,
    moth: () => `<span class="dim">it circles the lantern still. it does not answer to you.</span>`,
    souls: () => `<span class="gold">souls held: 300+</span> <span class="dim">(one per leetcode problem. no shortcuts were taken.)</span>`,
    crow: () => `<span class="dim">"caw," it says, meaning: your RMSE flex impresses no one.</span>`,
    humanity: () => `<span class="dim">restored. briefly. then a flaky test appeared.</span>`,
    chai: () => `<span class="warm">☕ brewing...</span> <span class="dim">productivity +12%, sleep schedule −40%</span>`,
    vim: () => `<span class="err">you are now trapped. (kidding — this shell is merciful. :q respected.)</span>`,
    ':q': () => `<span class="dim">you were never in vim. but the instinct is respected.</span>`,
    runes: () => { startGame(); return null; },
  };

  function startGame() {
    game = { round: 1, seq: [], awaiting: false };
    print(`<span class="gold">— THE RUNE TRIAL —</span>
<span class="dim">the stones flash a sequence. type it back using keys 1–6.
three rounds. the lantern is watching.</span>
  <span class="warm">1=ᚠ 2=ᚢ 3=ᚦ 4=ᚨ 5=ᚱ 6=ᚲ</span>   (type "q" to flee)`);
    nextRound();
  }

  function nextRound() {
    const len = 2 + game.round;
    game.seq = Array.from({ length: len }, () => 1 + Math.floor(Math.random() * 6));
    game.awaiting = false;
    const shown = game.seq.map(n => RUNES[n - 1]).join(' ');
    print(`\n<span class="dim">round ${game.round} — attend:</span>`);
    const line = document.createElement('div');
    line.innerHTML = `<span class="gold" style="font-size:19px; letter-spacing:8px;">${shown}</span>`;
    out.appendChild(line);
    screen.scrollTop = screen.scrollHeight;
    setTimeout(() => {
      line.innerHTML = `<span class="dim" style="font-size:19px; letter-spacing:8px;">${'· '.repeat(len).trim()}</span>`;
      print(`<span class="dim">the stones go dark. speak the sequence (e.g. ${game.seq.map(() => '#').join('')}):</span>`);
      game.awaiting = true;
    }, 1400 + len * 450);
  }

  function handleGameInput(v) {
    if (v.trim().toLowerCase() === 'q') {
      print(`<span class="dim">you flee. the runes dim, unjudging. mostly.</span>`);
      game = null;
      return;
    }
    if (!game.awaiting) { print(`<span class="dim">patience. the stones are still speaking.</span>`); return; }
    const guess = v.replace(/\s/g, '').split('').map(Number);
    const ok = guess.length === game.seq.length && guess.every((g, i) => g === game.seq[i]);
    if (!ok) {
      print(`<span class="err">the runes flare and reject you. the sequence was ${game.seq.join('')}.</span>
<span class="dim">YOU DIED. (type "runes" to try again — there is always another attempt)</span>`);
      game = null;
      return;
    }
    if (game.round === 3) {
      print(`<span class="gold">the third seal breaks. RUNE TRIAL COMPLETE.</span>
<span class="warm">reward: the knowledge that you'd pass a memorization interview round.</span>
<span class="dim">achievement noted in no permanent record whatsoever.</span>`);
      game = null;
      return;
    }
    game.round++;
    print(`<span class="gold">correct.</span> <span class="dim">the stones brighten...</span>`);
    setTimeout(nextRound, 700);
  }

  function exec(raw) {
    const v = raw.trim();
    print(`<span class="warm">jas@thebench:~$</span> ${esc(v)}`);
    if (!v) return;
    history.push(v);
    histIdx = history.length;
    if (game) { handleGameInput(v); return; }
    const [cmd, ...args] = v.split(/\s+/);
    const fn = commands[cmd.toLowerCase()];
    if (fn) {
      const res = fn(args);
      if (res) print(res);
    } else {
      print(`<span class="err">${esc(cmd)}: not found in the archive.</span> <span class="dim">try "help" — or guess. guessing is traditional.</span>`);
    }
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { exec(input.value); input.value = ''; }
    else if (e.key === 'ArrowUp') { e.preventDefault(); if (histIdx > 0) input.value = history[--histIdx] || ''; }
    else if (e.key === 'ArrowDown') { e.preventDefault(); if (histIdx < history.length) input.value = history[++histIdx] || ''; }
    else if (e.key === 'Tab') {
      e.preventDefault();
      const v = input.value.toLowerCase();
      const match = Object.keys(commands).find(c => c.startsWith(v) && v);
      if (match) input.value = match + ' ';
    }
  });
}

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
