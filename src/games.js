// Two arcade games for the handheld. Each returns a controller the console
// drives: input() takes a button, update() advances by elapsed ms, draw()
// paints one frame. No game owns a loop or a listener of its own.

const INK = '#f0a94e';
const DIM = '#8a6234';
const HOT = '#ffd9a0';
const BG = '#17110a';
const GRID = 'rgba(240,169,78,0.07)';

const mono = (size, weight = 400) => `${weight} ${size}px "JetBrains Mono", monospace`;

function best(key, score) {
  const k = `jas.${key}.best`;
  let b = 0;
  try { b = Number(localStorage.getItem(k)) || 0; } catch { /* private mode */ }
  if (score > b) { b = score; try { localStorage.setItem(k, String(b)); } catch { /* ignore */ } }
  return b;
}

function centreText(ctx, w, h, lines) {
  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(23,17,10,0.82)';
  ctx.fillRect(0, 0, w, h);
  let y = h / 2 - (lines.length - 1) * 15;
  for (const [text, size, colour] of lines) {
    ctx.fillStyle = colour;
    ctx.font = mono(size, 600);
    ctx.fillText(text, w / 2, y);
    y += size + 14;
  }
  ctx.textAlign = 'left';
}

/* ————— SERPENT: eat embers, grow, do not touch the walls ————— */
function createSerpent(w, h) {
  const cell = Math.max(10, Math.floor(Math.min(w / 26, h / 17)));
  const cols = Math.floor(w / cell), rows = Math.floor(h / cell);
  const ox = Math.floor((w - cols * cell) / 2), oy = Math.floor((h - rows * cell) / 2);

  let snake, dir, queued, food, score, dead, started, stepMs, acc, high;

  function reset() {
    snake = [{ x: 4, y: (rows / 2) | 0 }, { x: 3, y: (rows / 2) | 0 }, { x: 2, y: (rows / 2) | 0 }];
    dir = { x: 1, y: 0 };
    queued = null;
    score = 0; dead = false; started = false;
    stepMs = 132; acc = 0;
    placeFood();
    high = best('serpent', 0);
  }

  function placeFood() {
    let spot;
    do {
      spot = { x: (Math.random() * cols) | 0, y: (Math.random() * rows) | 0 };
    } while (snake.some(s => s.x === spot.x && s.y === spot.y));
    food = spot;
  }

  function step() {
    if (queued) { dir = queued; queued = null; }
    const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };
    const hitWall = head.x < 0 || head.y < 0 || head.x >= cols || head.y >= rows;
    const hitSelf = snake.some(s => s.x === head.x && s.y === head.y);
    if (hitWall || hitSelf) { dead = true; high = best('serpent', score); return; }
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
      score++;
      stepMs = Math.max(68, stepMs - 3);
      placeFood();
    } else {
      snake.pop();
    }
  }

  reset();

  return {
    hud: () => `SOULS ${score}   BEST ${high}`,
    input(btn) {
      if (!started) { if (btn === 'a') started = true; return; }
      if (dead) { if (btn === 'a') reset(); return; }
      // a serpent cannot double back on itself
      const want = { up: { x: 0, y: -1 }, down: { x: 0, y: 1 }, left: { x: -1, y: 0 }, right: { x: 1, y: 0 } }[btn];
      if (want && (want.x !== -dir.x || want.y !== -dir.y)) queued = want;
    },
    update(dt) {
      if (!started || dead) return;
      acc += dt;
      while (acc >= stepMs) { acc -= stepMs; step(); if (dead) break; }
    },
    draw(ctx) {
      ctx.fillStyle = BG; ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = GRID; ctx.lineWidth = 1;
      for (let c = 0; c <= cols; c++) {
        ctx.beginPath(); ctx.moveTo(ox + c * cell + 0.5, oy); ctx.lineTo(ox + c * cell + 0.5, oy + rows * cell); ctx.stroke();
      }
      for (let r = 0; r <= rows; r++) {
        ctx.beginPath(); ctx.moveTo(ox, oy + r * cell + 0.5); ctx.lineTo(ox + cols * cell, oy + r * cell + 0.5); ctx.stroke();
      }

      // the ember
      const fx = ox + food.x * cell + cell / 2, fy = oy + food.y * cell + cell / 2;
      const glow = ctx.createRadialGradient(fx, fy, 0, fx, fy, cell);
      glow.addColorStop(0, 'rgba(255,217,160,0.9)');
      glow.addColorStop(1, 'rgba(255,179,92,0)');
      ctx.fillStyle = glow;
      ctx.fillRect(fx - cell, fy - cell, cell * 2, cell * 2);
      ctx.fillStyle = HOT;
      ctx.beginPath(); ctx.arc(fx, fy, cell * 0.26, 0, Math.PI * 2); ctx.fill();

      snake.forEach((s, i) => {
        ctx.fillStyle = i === 0 ? HOT : INK;
        ctx.globalAlpha = i === 0 ? 1 : Math.max(0.28, 1 - i / (snake.length + 6));
        ctx.fillRect(ox + s.x * cell + 1, oy + s.y * cell + 1, cell - 2, cell - 2);
      });
      ctx.globalAlpha = 1;

      if (!started) centreText(ctx, w, h, [['SERPENT', 22, INK], ['it eats embers and grows', 11, DIM], ['A  ▸  BEGIN', 13, HOT]]);
      else if (dead) centreText(ctx, w, h, [['YOU DIED', 24, '#d97b6c'], [`souls gathered: ${score}`, 12, DIM], ['A  ▸  AGAIN    B  ▸  LEAVE', 11, HOT]]);
    },
  };
}

/* ————— SIEGE: bring down the wall with a single ember ————— */
function createSiege(w, h) {
  const padW = Math.max(58, w * 0.16), padH = 9;
  const padY = h - 26;
  const COLS = 9, ROWS = 4;
  const bw = (w - 32) / COLS, bh = 15;

  let padX, ball, bricks, lives, score, started, over, won, high;

  function reset(full = true) {
    padX = w / 2 - padW / 2;
    ball = { x: w / 2, y: padY - 8, vx: 0, vy: 0, r: 5, stuck: true };
    if (full) {
      bricks = [];
      for (let r = 0; r < ROWS; r++)
        for (let c = 0; c < COLS; c++)
          bricks.push({ x: 16 + c * bw, y: 34 + r * (bh + 6), alive: true, row: r });
      lives = 3; score = 0; over = false; won = false; started = false;
      high = best('siege', 0);
    }
  }

  function launch() {
    ball.stuck = false;
    ball.vx = (Math.random() * 0.16 - 0.08) + 0.2;
    ball.vy = -0.34;
  }

  reset();

  return {
    hud: () => `WALL ${bricks.filter(b => b.alive).length}   LIVES ${lives}   BEST ${high}`,
    input(btn) {
      if (!started) { if (btn === 'a') started = true; return; }
      if (over) { if (btn === 'a') reset(true); return; }
      if (btn === 'left') padX = Math.max(0, padX - 26);
      if (btn === 'right') padX = Math.min(w - padW, padX + 26);
      if (btn === 'a' && ball.stuck) launch();
    },
    update(dt) {
      if (!started || over) return;
      const t = Math.min(dt, 32);
      if (ball.stuck) { ball.x = padX + padW / 2; ball.y = padY - 8; return; }

      ball.x += ball.vx * t;
      ball.y += ball.vy * t;

      if (ball.x < ball.r) { ball.x = ball.r; ball.vx *= -1; }
      if (ball.x > w - ball.r) { ball.x = w - ball.r; ball.vx *= -1; }
      if (ball.y < ball.r) { ball.y = ball.r; ball.vy *= -1; }

      // paddle: bounce angle depends on where it lands
      if (ball.vy > 0 && ball.y + ball.r >= padY && ball.y - ball.r <= padY + padH &&
          ball.x >= padX && ball.x <= padX + padW) {
        const hit = (ball.x - (padX + padW / 2)) / (padW / 2);
        ball.vy = -Math.abs(ball.vy);
        ball.vx = hit * 0.32;
        ball.y = padY - ball.r;
      }

      for (const b of bricks) {
        if (!b.alive) continue;
        if (ball.x > b.x && ball.x < b.x + bw - 4 && ball.y > b.y && ball.y < b.y + bh) {
          b.alive = false;
          ball.vy *= -1;
          score += ROWS - b.row;
          if (!bricks.some(x => x.alive)) { won = true; over = true; high = best('siege', score); }
          break;
        }
      }

      if (ball.y > h + 12) {
        lives--;
        if (lives <= 0) { over = true; high = best('siege', score); }
        else reset(false);
      }
    },
    draw(ctx) {
      ctx.fillStyle = BG; ctx.fillRect(0, 0, w, h);

      for (const b of bricks) {
        if (!b.alive) continue;
        ctx.fillStyle = `rgba(240,169,78,${0.28 + (ROWS - b.row) * 0.16})`;
        ctx.fillRect(b.x, b.y, bw - 4, bh);
        ctx.strokeStyle = 'rgba(23,17,10,0.7)'; ctx.lineWidth = 1;
        ctx.strokeRect(b.x + 0.5, b.y + 0.5, bw - 5, bh - 1);
      }

      ctx.fillStyle = INK;
      ctx.fillRect(padX, padY, padW, padH);

      const g = ctx.createRadialGradient(ball.x, ball.y, 0, ball.x, ball.y, 14);
      g.addColorStop(0, 'rgba(255,217,160,0.85)');
      g.addColorStop(1, 'rgba(255,179,92,0)');
      ctx.fillStyle = g; ctx.fillRect(ball.x - 14, ball.y - 14, 28, 28);
      ctx.fillStyle = HOT;
      ctx.beginPath(); ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2); ctx.fill();

      if (!started) centreText(ctx, w, h, [['SIEGE', 22, INK], ['one ember against a wall', 11, DIM], ['A  ▸  BEGIN', 13, HOT]]);
      else if (over) centreText(ctx, w, h, won
        ? [['THE WALL FALLS', 20, INK], [`score: ${score}`, 12, DIM], ['A  ▸  AGAIN    B  ▸  LEAVE', 11, HOT]]
        : [['YOU DIED', 24, '#d97b6c'], [`score: ${score}`, 12, DIM], ['A  ▸  AGAIN    B  ▸  LEAVE', 11, HOT]]);
      else if (ball.stuck) {
        ctx.textAlign = 'center'; ctx.fillStyle = DIM; ctx.font = mono(11, 600);
        ctx.fillText('A  ▸  LOOSE THE EMBER', w / 2, h / 2 + 40);
        ctx.textAlign = 'left';
      }
    },
  };
}

export const games = [
  {
    name: 'SERPENT',
    tag: 'eat · grow · die',
    crow: 'A snake that eats embers and grows. He has opinions about the physics.',
    hint: 'D-PAD TURNS · A BEGINS',
    create: createSerpent,
  },
  {
    name: 'SIEGE',
    tag: 'break the wall',
    crow: 'Knocking down a wall with one ember. Therapeutic, he claims.',
    hint: '◀ ▶ MOVES · A LAUNCHES',
    create: createSiege,
  },
];
