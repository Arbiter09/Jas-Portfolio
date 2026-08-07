// Send a Raven — the bird sits until you scroll, then carries you down the page.

const dispatches = [
  {
    key: 'email',
    glyph: '✉',
    hue: 22,
    value: 'jasshah9513@gmail.com',
    href: 'mailto:jasshah9513@gmail.com',
    note: 'The fastest bird. Usually answered before the candle gutters.',
    copy: 'jasshah9513@gmail.com',
  },
  {
    key: 'github',
    glyph: '⑂',
    hue: 205,
    value: 'github.com/Arbiter09',
    href: 'https://github.com/Arbiter09',
    note: 'Everything unfinished, in public. The commit messages are honest.',
  },
  {
    key: 'linkedin',
    glyph: '❖',
    hue: 200,
    value: 'linkedin.com/in/jas-shah-709854233',
    href: 'https://www.linkedin.com/in/jas-shah-709854233/',
    note: 'The formal ledger. Wear shoes.',
  },
  {
    key: 'resume',
    glyph: '✎',
    hue: 45,
    value: 'the illustrated scroll (PDF)',
    href: `${import.meta.env.BASE_URL}resume.pdf`,
    note: 'One page. It took longer than this entire site.',
  },
];

export function initContact() {
  const scene = document.getElementById('contact-scene');
  const list = document.getElementById('dispatches');
  const raven = document.getElementById('raven');
  const svg = document.getElementById('flight-svg');
  const base = document.getElementById('flight-base');
  const line = document.getElementById('flight-line');

  // ---------- dispatch plaques ----------
  list.innerHTML = dispatches.map((d, i) => `
    <article class="dispatch" data-side="${i % 2 ? 'right' : 'left'}">
      <div class="dispatch-seal" style="--seal-hue:${d.hue}">
        <svg viewBox="0 0 48 48" width="48" height="48">
          <circle cx="24" cy="24" r="19" fill="hsl(${d.hue} 42% 26%)" stroke="hsl(${d.hue} 48% 44%)" stroke-width="1.2"/>
          <circle cx="24" cy="24" r="19" fill="url(#seal-shine)" opacity="0.28"/>
          <text x="24" y="30" text-anchor="middle" font-size="17" fill="hsl(${d.hue} 55% 76%)">${d.glyph}</text>
        </svg>
      </div>
      <div class="dispatch-main">
        <span class="dispatch-key">${d.key}</span>
        <a class="dispatch-val" href="${d.href}"${d.href.startsWith('mailto:') ? '' : ' target="_blank" rel="noopener"'}>${d.value}</a>
        <p class="dispatch-note">${d.note}</p>
      </div>
      ${d.copy ? `<button class="dispatch-copy" data-copy="${d.copy}">copy</button>` : ''}
    </article>`).join('');

  // shared gradient for the wax seals
  svg.insertAdjacentHTML('afterbegin', `<defs><radialGradient id="seal-shine" cx="0.34" cy="0.28" r="0.75">
    <stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>`);

  list.querySelectorAll('.dispatch-copy').forEach(btn => {
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy);
        btn.textContent = 'sealed';
      } catch {
        btn.textContent = 'copy it yourself';
      }
      setTimeout(() => { btn.textContent = 'copy'; }, 1800);
    });
  });

  // reveal each plaque as it enters
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('alighted'); });
  }, { threshold: 0.35 });
  list.querySelectorAll('.dispatch').forEach(d => io.observe(d));
  const altarIo = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) e.target.classList.add('alighted');
  }, { threshold: 0.4 });
  altarIo.observe(document.getElementById('altar'));

  // ---------- the flight path ----------
  let pathLen = 0;
  function layoutFlight() {
    const w = scene.clientWidth, h = scene.clientHeight;
    if (!w || !h) return;
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    svg.setAttribute('width', w);
    svg.setAttribute('height', h);

    // starts at the perch, weaves past each plaque, settles over the altar
    const pts = [
      [w * 0.78, 92],
      [w * 0.30, h * 0.20],
      [w * 0.74, h * 0.36],
      [w * 0.26, h * 0.53],
      [w * 0.72, h * 0.70],
      [w * 0.50, h * 0.89],
    ];
    const d = smooth(pts);
    base.setAttribute('d', d);
    line.setAttribute('d', d);
    pathLen = line.getTotalLength();
    line.style.strokeDasharray = pathLen;
    fly();
  }

  // ---------- scroll → position along the path ----------
  let prog = 0;
  function fly() {
    if (!pathLen) return;
    const rect = scene.getBoundingClientRect();
    const travel = rect.height - window.innerHeight;
    prog = travel > 0 ? Math.min(1, Math.max(0, -rect.top / travel)) : 0;

    line.style.strokeDashoffset = pathLen * (1 - prog);

    const p = line.getPointAtLength(pathLen * prog);
    const ahead = line.getPointAtLength(Math.min(pathLen, pathLen * prog + 14));
    let angle = Math.atan2(ahead.y - p.y, ahead.x - p.x) * 180 / Math.PI;

    // the raven is drawn facing right; flip rather than fly upside down
    let flip = 1;
    if (angle > 90 || angle < -90) { flip = -1; angle += 180; }
    angle = Math.max(-32, Math.min(32, angle)); // it banks, it does not dive

    const airborne = prog > 0.02 && prog < 0.985;
    raven.classList.toggle('flying', airborne);
    raven.classList.toggle('perched', !airborne);

    // a bird at rest sits level and faces out; only flight banks and flips
    if (!airborne) { angle = 0; flip = 1; }

    const bob = airborne ? Math.sin(performance.now() / 220) * 3 : 0;
    raven.style.transform =
      `translate(${p.x}px, ${p.y + bob}px) translate(-50%, -50%) rotate(${angle}deg) scaleX(${flip})`;
  }

  // one path sample per scroll event — cheap enough to run inline, and it
  // keeps the bird locked to the scrollbar instead of trailing a frame behind
  window.addEventListener('scroll', fly, { passive: true });
  window.addEventListener('resize', layoutFlight);
  // the tab is switched to display:block before this event fires, so the scene
  // already has real dimensions — no need to wait a frame
  window.addEventListener('tab:contact', layoutFlight);
  layoutFlight();

  // keep the wing-beat alive while airborne so the bob reads as flight
  (function idle() {
    if (raven.classList.contains('flying')) fly();
    requestAnimationFrame(idle);
  })();

  // ---------- release the raven ----------
  const feathers = document.getElementById('feather-layer');
  document.getElementById('release-raven').addEventListener('click', () => {
    const note = document.getElementById('altar-note');
    for (let i = 0; i < 14; i++) dropFeather(feathers);
    const flyer = raven.cloneNode(true);
    flyer.id = 'raven-flyer';
    flyer.classList.add('flying', 'departing');
    flyer.classList.remove('perched');
    document.body.appendChild(flyer);
    setTimeout(() => flyer.remove(), 2400);
    note.textContent = 'The raven is away. Expect a reply within one turn of the moon.';
    note.classList.add('sent');
    setTimeout(() => { window.location.href = 'mailto:jasshah9513@gmail.com'; }, 900);
  });
}

function dropFeather(layer) {
  const f = document.createElement('div');
  f.className = 'feather';
  f.style.left = (18 + Math.random() * 64) + '%';
  f.style.setProperty('--drift', (Math.random() * 90 - 45) + 'px');
  f.style.setProperty('--spin', (Math.random() * 540 - 270) + 'deg');
  f.style.animationDuration = (2.6 + Math.random() * 2.4) + 's';
  f.style.animationDelay = (Math.random() * 0.7) + 's';
  f.innerHTML = `<svg viewBox="0 0 14 34" width="11" height="27">
    <path d="M7 1 C11 9, 12 21, 7 33 C2 21, 3 9, 7 1 Z" fill="#2a2724" stroke="#4a443c" stroke-width="0.7"/>
    <path d="M7 4 L7 30" stroke="#5c5348" stroke-width="0.7"/></svg>`;
  layer.appendChild(f);
  setTimeout(() => f.remove(), 5600);
}

// Catmull-Rom through the waypoints, emitted as cubic beziers
function smooth(pts) {
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i], p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    d += ` C ${p1[0] + (p2[0] - p0[0]) / 6} ${p1[1] + (p2[1] - p0[1]) / 6},` +
         ` ${p2[0] - (p3[0] - p1[0]) / 6} ${p2[1] - (p3[1] - p1[1]) / 6},` +
         ` ${p2[0]} ${p2[1]}`;
  }
  return d;
}
