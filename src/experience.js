// The pilgrim's road — a path that draws itself as you walk it.

const skyline = {
  mumbai: `<svg width="54" height="20" viewBox="0 0 54 20" class="ms-skyline" aria-label="Mumbai"><path d="M2 19 v-7 h4 v7 M9 19 v-11 h3 v11 M15 19 v-6 l3 -4 3 4 v6 M25 19 v-13 h2 l1 -4 1 4 h2 v13 M35 19 v-8 h4 v8 M43 19 v-5 a4 4 0 0 1 8 0 v5" fill="none" stroke="currentColor" stroke-width="1.1"/></svg>`,
  singapore: `<svg width="44" height="20" viewBox="0 0 44 20" class="ms-skyline" aria-label="Singapore outpost"><path d="M4 19 v-9 M9 19 v-9 M14 19 v-9 M2 10 h14 M6 10 l3 -5 3 5 M24 19 v-12 h4 v12 M33 19 v-7 l4 -3 v10" fill="none" stroke="currentColor" stroke-width="1.1" stroke-dasharray="2.5 2"/></svg>`,
  ny: `<svg width="54" height="22" viewBox="0 0 54 22" class="ms-skyline" aria-label="New York"><path d="M4 21 v-10 h5 v10 M12 21 v-16 h4 l0 16 M14 5 v-3 M21 21 v-12 h5 v12 M30 21 v-18 l3 -2 3 2 v18 M40 21 v-8 h5 v8 M48 21 v-13 h4 v13" fill="none" stroke="currentColor" stroke-width="1.1"/></svg>`,
  sf: `<svg width="48" height="20" viewBox="0 0 48 20" class="ms-skyline" aria-label="San Francisco outpost"><path d="M2 14 h10 M4 14 v5 M10 14 v5 M2 14 q5 -8 10 0 M18 19 v-9 l3 -6 3 6 v9 M30 19 v-7 h4 v7 M38 19 v-10 h5 v10" fill="none" stroke="currentColor" stroke-width="1.1" stroke-dasharray="2.5 2"/></svg>`,
};

const milestones = [
  {
    role: 'B.E. in Information Technology',
    org: 'University of Mumbai',
    dates: 'Aug 2020 — Jun 2024',
    loc: 'Mumbai, IN',
    city: 'mumbai',
    bullets: [
      'GPA 9.2/10 across operating systems, databases, distributed systems, and networking.',
      'Where the grind began: DSA by day, side projects by night.',
    ],
    badges: ['GPA 9.2 / 10'],
  },
  {
    role: 'Software Developer Intern',
    org: 'Kotton King',
    dates: 'Mar 2024 — Aug 2024',
    loc: 'Singapore · remote',
    city: 'singapore',
    remote: true,
    bullets: [
      'Cut response latency 40% on Java (Spring Boot) and PostgreSQL services through query optimization and multithreaded concurrency tuning, while scaling to 10K+ daily requests.',
      'Hardened 8 endpoints against SQL injection with parameterized queries, input sanitization, and fixed-window rate limiting.',
      'Built a webhook-driven CI/CD pipeline on GitHub Actions, Docker, and Kubernetes rolling deploys: 20% faster releases across 3 services.',
    ],
  },
  {
    role: 'MS in Data Science',
    org: 'Stony Brook University',
    dates: 'Aug 2024 — May 2026',
    loc: 'New York, US',
    city: 'ny',
    bullets: [
      'Computer Science track. GPA 3.73/4.00, top 10% of the cohort.',
      'Statistical learning, reinforcement learning, big data, and programming abstractions.',
    ],
    badges: ['Top 10% · GPA 3.73', 'ETHDenver 2025 · 2nd place'],
  },
  {
    role: 'Software Developer Intern',
    org: 'Good Ai',
    dates: 'Jul 2025 — Jun 2026',
    loc: 'San Francisco · remote',
    city: 'sf',
    remote: true,
    bullets: [
      'Migrated inter-service event delivery to an AWS SQS + Kinesis pipeline with least-privilege IAM across 6 consumers, sustaining 200K+ events/day at sub-150ms lag.',
      'Built 30+ reusable React and TypeScript components for AI dashboards, holding WCAG 2.1 accessibility and 95%+ test coverage in Vitest.',
      'Instrumented FastAPI microservices with OpenTelemetry tracing plus Prometheus and Grafana alerting, cutting mean time to detect incidents 35%.',
    ],
  },
  {
    role: 'Software Developer (Research)',
    org: 'Stony Brook University',
    dates: 'Aug 2025 — present',
    loc: 'New York, US',
    city: 'ny',
    current: true,
    bullets: [
      'Translated Fair Representation Act requirements into a graph-based gluing algorithm enforcing contiguity, compactness, and proportional seat allocation via BFS across all 50 states.',
      'Ran 5,000+ Monte Carlo Markov Chain ensemble simulations with MGGG GerryChain on the Seawulf HPC cluster; Slurm scheduling lifted throughput 35%.',
    ],
  },
];

export function initExperience() {
  const road = document.getElementById('road');

  // svg spine
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.id = 'road-svg';
  svg.innerHTML = `<path id="road-path-base" d=""/><path id="road-path" d=""/>`;
  road.appendChild(svg);

  // waymarkers live in their own layer so a card's reveal transform can never
  // drag them off the line
  const nodeLayer = document.createElement('div');
  nodeLayer.id = 'road-nodes';
  road.appendChild(nodeLayer);

  const stops = []; // { el, node, current }
  milestones.forEach((m, i) => {
    const el = document.createElement('div');
    el.className = 'milestone ' + (i % 2 ? 'side-left' : 'side-right')
      + (m.remote ? ' remote' : '') + (m.current ? ' current' : '');
    el.innerHTML = `
      <div class="ms-card">
        <div class="ms-crest">${skyline[m.city]}<span class="ms-loc">${m.loc}</span></div>
        <div class="ms-role">${m.role}</div>
        <div class="ms-org">${m.org}${m.current ? ' — current chapter' : ''}</div>
        <div class="ms-dates">${m.dates}</div>
        <ul>${m.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
        ${(m.badges || []).map(b => `<span class="wax-badge">${b}</span>`).join('')}
      </div>`;
    road.appendChild(el);

    const node = document.createElement('span');
    node.className = 'road-node' + (m.current ? ' current' : '');
    nodeLayer.appendChild(node);
    stops.push({ el, node });
  });

  // The road is built FROM the waymarkers, not alongside them: each milestone
  // contributes one point, the curve is fitted through those points, and the
  // dots are then pinned to the same coordinates. They cannot drift apart.
  // Re-run whenever the tab becomes visible — sizes under display:none are 0.
  const base = svg.querySelector('#road-path-base');
  const lit = svg.querySelector('#road-path');
  let len = 0;

  function layoutRoad() {
    const h = road.scrollHeight, w = road.clientWidth;
    if (!h || !w || !stops.length) return;
    svg.setAttribute('width', w);
    svg.setAttribute('height', h);
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

    const mid = w / 2;
    const pts = stops.map(({ el, node }, i) => {
      // offsetTop is layout-based, so a card's reveal transform doesn't move it
      const y = el.offsetTop + 38;
      const x = mid + (i % 2 ? -18 : 18); // a gentle wander, still centred
      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
      return [x, y];
    });

    // let the road run in from above the first stop and trail off past the last
    const first = pts[0], last = pts[pts.length - 1];
    const full = [[mid, Math.max(0, first[1] - 90)], ...pts, [mid, Math.min(h, last[1] + 110)]];

    const d = smooth(full);
    base.setAttribute('d', d);
    lit.setAttribute('d', d);
    len = lit.getTotalLength();
    lit.style.strokeDasharray = len;
    draw();
  }

  function draw() {
    if (!len) return;
    const rect = road.getBoundingClientRect();
    const prog = Math.min(1, Math.max(0, (window.innerHeight * 0.8 - rect.top) / rect.height));
    lit.style.strokeDashoffset = len * (1 - prog);
  }
  window.addEventListener('scroll', draw, { passive: true });
  window.addEventListener('resize', layoutRoad);
  window.addEventListener('tab:experience', layoutRoad);
  layoutRoad();

  // a milestone and its waymarker light together
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('lit');
      const stop = stops.find(s => s.el === e.target);
      if (stop) stop.node.classList.add('lit');
    });
  }, { threshold: 0.2 });
  stops.forEach(s => io.observe(s.el));
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

export { milestones };
