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

<span class="warm">## Software Developer (Research)</span> — Stony Brook University <span class="dim">(2024–present)</span>
- 5,000+ MCMC simulation runs orchestrated on Seawulf HPC
- scheduling + checkpointing layer in Python/C++

<span class="warm">## Software Developer Intern</span> — Good Ai, SF <span class="dim">(remote, 2023)</span>
- SQS + Kinesis event pipeline, multi-million-event days
- idempotent consumers, dead-letter replay tooling

<span class="warm">## MS, Data Science</span> — Stony Brook University <span class="dim">(2022–2024)</span>

<span class="warm">## Software Developer Intern</span> — Kotton King, Singapore <span class="dim">(remote, 2022)</span>
- p95 API latency cut 40%

<span class="warm">## B.E., Information Technology</span> — University of Mumbai <span class="dim">(2018–2022)</span> · top-10% GPA`,
    'skills.json': `{
  <span class="warm">"languages"</span>: ["Python", "TypeScript", "C++", "SQL", "Solidity"],
  <span class="warm">"agents"</span>: ["Claude API", "LangGraph", "MCP", "tool design", "evals"],
  <span class="warm">"data"</span>: ["PySpark", "Airflow", "Kinesis", "SQS", "Postgres", "Pinecone"],
  <span class="warm">"serving"</span>: ["FastAPI", "Docker", "AWS", "HPC/Slurm"],
  <span class="warm">"misc"</span>: ["candle maintenance", "crow diplomacy", <span class="gold">"shipping on Sundays"</span>]
}`,
    'grind.txt': `leetcode: 300+ solved. the chest in Projects knows the number.`,
  };

  const projectsLs = `<span class="gold">papermind/</span>   research copilot — LangGraph · Claude · Pinecone
<span class="gold">devmind/</span>     codebase agent — MCP · −38% token spend
<span class="gold">moviepulse/</span>  ratings forecaster — RMSE 0.84
<span class="gold">ethdenver/</span>   2nd place · $3,000 USDC · 36 hours
<span class="warm">chest.lock</span>   sealed — see Projects tab, bring a number`;

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
resume: <a href="/resume.pdf" target="_blank">resume.pdf</a> <span class="dim">(place your PDF at /public/resume.pdf)</span>`;
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
