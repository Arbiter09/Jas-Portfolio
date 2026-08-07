// The shrine: a greatsword in a ring of cracked stone, lit by a hanging lantern.
// One deliberate spectacle — everything else on the page stays quiet.
import * as THREE from 'three';

const WARM = new THREE.Color(0xffa04a);
const MOON = new THREE.Color(0x6f9cc4);
const BG_WARM = new THREE.Color(0x0d0b09);
const BG_MOON = new THREE.Color(0x090b0f);

export function initHero() {
  const canvas = document.getElementById('hero-canvas');
  const hero = document.getElementById('hero');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;

  const scene = new THREE.Scene();
  scene.background = BG_WARM.clone();
  scene.fog = new THREE.FogExp2(0x0d0b09, 0.048);

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 2.6, 9.5);
  camera.lookAt(0, 1.6, 0);

  // ---------- lights ----------
  const ambient = new THREE.AmbientLight(0x3a3026, 0.9);
  scene.add(ambient);
  const lanternLight = new THREE.PointLight(WARM.clone(), 60, 30, 2);
  lanternLight.position.set(0, 4.6, 0.4);
  scene.add(lanternLight);
  const rim = new THREE.DirectionalLight(0x44506a, 0.5);
  rim.position.set(-6, 8, -8);
  scene.add(rim);

  // ---------- materials ----------
  const stoneMat = new THREE.MeshStandardMaterial({ color: 0x59534b, roughness: 0.95, metalness: 0.02, flatShading: true });
  const ashMat = new THREE.MeshStandardMaterial({ color: 0x35322c, roughness: 1, flatShading: true });
  const steelMat = new THREE.MeshStandardMaterial({ color: 0xb9bfc7, roughness: 0.3, metalness: 0.8 });
  const guardMat = new THREE.MeshStandardMaterial({ color: 0x6b5a3e, roughness: 0.5, metalness: 0.7 });
  const gripMat = new THREE.MeshStandardMaterial({ color: 0x3a2a20, roughness: 0.9 });

  const root = new THREE.Group();
  scene.add(root);

  // ---------- ground: broad ash disc ----------
  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(22, 48),
    new THREE.MeshStandardMaterial({ color: 0x1a1815, roughness: 1 })
  );
  ground.rotation.x = -Math.PI / 2;
  root.add(ground);

  // ---------- circuitry runes, revealed when fog thins ----------
  const runeCanvas = document.createElement('canvas');
  runeCanvas.width = runeCanvas.height = 512;
  const rc = runeCanvas.getContext('2d');
  rc.strokeStyle = '#8fd8e8';
  rc.lineWidth = 2;
  rc.translate(256, 256);
  for (let ring = 0; ring < 3; ring++) {
    const r = 92 + ring * 52;
    rc.beginPath(); rc.arc(0, 0, r, 0, Math.PI * 2); rc.globalAlpha = 0.35; rc.stroke();
    rc.globalAlpha = 0.9;
    const n = 10 + ring * 4;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + ring;
      const x = Math.cos(a) * r, y = Math.sin(a) * r;
      // circuit trace: radial stub with a right-angle jog and a node
      rc.beginPath();
      rc.moveTo(x, y);
      const x2 = Math.cos(a) * (r + 20), y2 = Math.sin(a) * (r + 20);
      rc.lineTo(x2, y2);
      rc.lineTo(x2 + Math.cos(a + Math.PI / 2) * 12, y2 + Math.sin(a + Math.PI / 2) * 12);
      rc.stroke();
      rc.beginPath(); rc.arc(x, y, 3.2, 0, Math.PI * 2); rc.fill();
      rc.fillStyle = '#8fd8e8';
    }
  }
  const runeTex = new THREE.CanvasTexture(runeCanvas);
  const runeMat = new THREE.MeshBasicMaterial({
    map: runeTex, transparent: true, opacity: 0,
    blending: THREE.AdditiveBlending, depthWrite: false,
  });
  const runes = new THREE.Mesh(new THREE.PlaneGeometry(9.4, 9.4), runeMat);
  runes.rotation.x = -Math.PI / 2;
  runes.position.y = 0.02;
  root.add(runes);

  // ---------- ring of cracked stones (spread apart on scroll) ----------
  const stones = [];
  const STONE_N = 11;
  for (let i = 0; i < STONE_N; i++) {
    const a = (i / STONE_N) * Math.PI * 2 + (i % 3) * 0.09;
    const geo = new THREE.DodecahedronGeometry(0.55 + (i % 4) * 0.13, 0);
    const pos = geo.attributes.position;
    for (let v = 0; v < pos.count; v++) {
      pos.setXYZ(v,
        pos.getX(v) * (0.9 + Math.sin(i * 7 + v) * 0.13),
        pos.getY(v) * 0.78,
        pos.getZ(v) * (0.9 + Math.cos(i * 5 + v) * 0.13));
    }
    geo.computeVertexNormals();
    const s = new THREE.Mesh(geo, i % 3 === 0 ? ashMat : stoneMat);
    const r0 = 2.35 + (i % 2) * 0.28;
    s.userData = { a, r0, y0: 0.28 + (i % 3) * 0.07, rot: Math.random() * Math.PI, drift: 0.7 + Math.random() * 1.4 };
    s.rotation.set(Math.random() * 0.4, s.userData.rot, Math.random() * 0.3);
    stones.push(s);
    root.add(s);
  }
  // central pedestal stone the blade is driven into
  const pedestal = new THREE.Mesh(new THREE.DodecahedronGeometry(0.95, 0), stoneMat);
  pedestal.scale.y = 0.5;
  pedestal.position.y = 0.32;
  root.add(pedestal);

  // ---------- the greatsword ----------
  const sword = new THREE.Group();
  // blade: tapered
  const bladeGeo = new THREE.BoxGeometry(0.26, 3.4, 0.06);
  {
    const p = bladeGeo.attributes.position;
    for (let v = 0; v < p.count; v++) {
      const y = p.getY(v);
      const t = (1.7 - y) / 3.4;          // 0 at guard (top), 1 at buried tip (bottom)
      p.setX(v, p.getX(v) * (1 - t * 0.55));
      p.setZ(v, p.getZ(v) * (1 - t * 0.4));
    }
    bladeGeo.computeVertexNormals();
  }
  const blade = new THREE.Mesh(bladeGeo, steelMat);
  blade.position.y = 2.5;
  sword.add(blade);
  // fuller line (thin dark strip)
  const fuller = new THREE.Mesh(new THREE.BoxGeometry(0.045, 2.2, 0.064),
    new THREE.MeshStandardMaterial({ color: 0x2e3238, roughness: 0.6, metalness: 0.6 }));
  fuller.position.y = 2.2;
  sword.add(fuller);
  // crossguard
  const guard = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.13, 0.17), guardMat);
  guard.position.y = 4.15;
  guard.rotation.z = 0.02;
  sword.add(guard);
  const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.075, 0.75, 8), gripMat);
  grip.position.y = 4.55;
  sword.add(grip);
  const pommel = new THREE.Mesh(new THREE.OctahedronGeometry(0.14, 0), guardMat);
  pommel.position.y = 4.98;
  sword.add(pommel);
  sword.rotation.z = 0.06; // driven in at the slightest angle — it was not placed gently
  sword.scale.setScalar(0.82);
  root.add(sword);

  // ---------- lantern, suspended ----------
  const lantern = new THREE.Group();
  const cageMat = new THREE.MeshStandardMaterial({ color: 0x21201d, roughness: 0.6, metalness: 0.8 });
  const cageTop = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.16, 6), cageMat);
  cageTop.position.y = 0.28;
  lantern.add(cageTop);
  const cageBot = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.12, 0.06, 6), cageMat);
  cageBot.position.y = -0.24;
  lantern.add(cageBot);
  for (let i = 0; i < 4; i++) {
    const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.5, 4), cageMat);
    const a = (i / 4) * Math.PI * 2;
    bar.position.set(Math.cos(a) * 0.16, 0, Math.sin(a) * 0.16);
    lantern.add(bar);
  }
  const flame = new THREE.Mesh(
    new THREE.SphereGeometry(0.11, 12, 12),
    new THREE.MeshBasicMaterial({ color: 0xffc878 })
  );
  lantern.add(flame);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeGlowTexture(), color: 0xffa860, transparent: true,
    blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.85,
  }));
  glow.scale.setScalar(2.2);
  lantern.add(glow);
  const chain = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 3.2, 4), cageMat);
  chain.position.y = 1.95;
  lantern.add(chain);
  lantern.position.set(0.55, 4.7, 0.5);
  root.add(lantern);

  // ---------- fog gate: low rippling shader plane ----------
  const fogUniforms = {
    uTime: { value: 0 },
    uThin: { value: 0 },        // 1 = hover, fog parts
    uCold: { value: 0 },        // 0 warm, 1 moonlit
  };
  const fogMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: fogUniforms,
    vertexShader: /* glsl */`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `,
    fragmentShader: /* glsl */`
      varying vec2 vUv;
      uniform float uTime, uThin, uCold;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p){
        vec2 i = floor(p), f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1,0)), f.x),
                   mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), f.x), f.y);
      }
      void main() {
        vec2 p = vUv * 6.0;
        // fog-gate ripple: slow sideways shimmer, not a static haze
        float n = noise(p + vec2(uTime * 0.14, uTime * 0.05));
        n += 0.5 * noise(p * 2.3 - vec2(uTime * 0.21, 0.0));
        n /= 1.5;
        float edge = smoothstep(0.0, 0.35, vUv.y) * smoothstep(1.0, 0.5, vUv.y);
        float ring = smoothstep(0.02, 0.25, distance(vUv, vec2(0.5))) * smoothstep(0.55, 0.38, distance(vUv, vec2(0.5)));
        float a = n * edge * (0.34 - uThin * 0.27) * (0.4 + ring);
        vec3 warm = vec3(0.55, 0.46, 0.36);
        vec3 cold = vec3(0.38, 0.47, 0.58);
        gl_FragColor = vec4(mix(warm, cold, uCold), a);
      }
    `,
  });
  const fogPlane = new THREE.Mesh(new THREE.PlaneGeometry(11, 11, 1, 1), fogMat);
  fogPlane.rotation.x = -Math.PI / 2;
  fogPlane.position.y = 0.55;
  root.add(fogPlane);

  // ---------- ash motes, rising ----------
  const MOTES = 260;
  const motePos = new Float32Array(MOTES * 3);
  const moteSeed = new Float32Array(MOTES);
  for (let i = 0; i < MOTES; i++) {
    motePos[i * 3] = (Math.random() - 0.5) * 14;
    motePos[i * 3 + 1] = Math.random() * 8;
    motePos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    moteSeed[i] = Math.random();
  }
  const moteGeo = new THREE.BufferGeometry();
  moteGeo.setAttribute('position', new THREE.BufferAttribute(motePos, 3));
  const moteMat = new THREE.PointsMaterial({
    size: 0.045, map: makeGlowTexture(), transparent: true,
    color: 0xd8b58a, opacity: 0.75, depthWrite: false,
    blending: THREE.AdditiveBlending, sizeAttenuation: true,
  });
  const motes = new THREE.Points(moteGeo, moteMat);
  root.add(motes);

  // ---------- one moth, circling the lantern ----------
  const moth = new THREE.Group();
  const wingGeo = new THREE.PlaneGeometry(0.065, 0.095);
  const wingMat = new THREE.MeshBasicMaterial({ color: 0xcbb89a, side: THREE.DoubleSide, transparent: true, opacity: 0.55 });
  const wingL = new THREE.Mesh(wingGeo, wingMat); wingL.position.x = -0.05;
  const wingR = new THREE.Mesh(wingGeo, wingMat); wingR.position.x = 0.05;
  moth.add(wingL, wingR);
  root.add(moth);

  // ---------- state driven by pointer + scroll ----------
  let mouseX = 0, mouseY = 0, tiltX = 0, tiltY = 0;
  let hoverThin = 0, hoverTarget = 0;
  let scrollProg = 0;

  window.addEventListener('pointermove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    hoverTarget = 1; // presence near the shrine parts the fog
    clearTimeout(initHero._ht);
    initHero._ht = setTimeout(() => { hoverTarget = 0; }, 1600);
  });

  function readScroll() {
    const rect = hero.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    scrollProg = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
  }
  window.addEventListener('scroll', readScroll, { passive: true });

  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (canvas.width !== w * renderer.getPixelRatio() || canvas.height !== h * renderer.getPixelRatio()) {
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
  }

  const tmpWarm = new THREE.Color(), tmpBg = new THREE.Color();
  const clock = new THREE.Clock();
  let visible = true;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 }).observe(hero);

  function frame() {
    requestAnimationFrame(frame);
    if (!visible) return;
    resize();
    const t = clock.getElapsedTime();
    const cold = Math.min(1, Math.max(0, (scrollProg - 0.25) / 0.6));

    // slow self-rotation + cinematic drift toward the cursor
    tiltX += ((mouseY * 0.06) - tiltX) * 0.018;
    tiltY += ((mouseX * 0.10) - tiltY) * 0.018;
    root.rotation.y = t * 0.07 + tiltY;
    root.rotation.x = tiltX * 0.5;
    camera.position.x = Math.sin(t * 0.05) * 0.25 + mouseX * 0.35;
    camera.position.y = 2.6 + mouseY * -0.15 + scrollProg * 0.9;
    camera.lookAt(0, 1.7 - scrollProg * 0.4, 0);

    // the ring cracks apart with scroll
    const spread = scrollProg * scrollProg;
    for (const s of stones) {
      const { a, r0, y0, drift } = s.userData;
      const r = r0 + spread * drift * 1.6;
      s.position.set(Math.cos(a) * r, y0 + spread * drift * 0.55 + Math.sin(t * 0.6 + a * 5) * spread * 0.05, Math.sin(a) * r);
      s.rotation.y = s.userData.rot + spread * drift * 0.7;
      s.rotation.x = spread * drift * 0.35;
    }

    // lantern sway + flame breathing
    lantern.rotation.z = Math.sin(t * 0.7) * 0.05;
    lantern.position.x = 0.55 + Math.sin(t * 0.5) * 0.06;
    const flick = 0.92 + Math.sin(t * 9.3) * 0.04 + Math.sin(t * 23.7) * 0.04;
    lanternLight.intensity = (46 + Math.sin(t * 1.3) * 5) * flick * (1 - cold * 0.45);
    glow.material.opacity = 0.75 * flick * (1 - cold * 0.3);

    // warm ember → moonlit blue as you descend
    tmpWarm.copy(WARM).lerp(MOON, cold);
    lanternLight.color.copy(tmpWarm);
    glow.material.color.copy(tmpWarm);
    flame.material.color.setHex(cold > 0.5 ? 0xa8cfe8 : 0xffc878);
    ambient.intensity = 0.9 - cold * 0.35;
    ambient.color.setHex(cold > 0.5 ? 0x26303c : 0x3a3026);
    rim.intensity = 0.5 + cold * 0.9;
    tmpBg.copy(BG_WARM).lerp(BG_MOON, cold);
    scene.background.copy(tmpBg);
    scene.fog.color.copy(tmpBg);

    // fog gate
    hoverThin += (hoverTarget - hoverThin) * 0.03;
    fogUniforms.uTime.value = t;
    fogUniforms.uThin.value = hoverThin;
    fogUniforms.uCold.value = cold;
    runeMat.opacity = hoverThin * 0.5 * (1 - spread * 0.6);

    // ash rises
    const p = moteGeo.attributes.position;
    for (let i = 0; i < MOTES; i++) {
      let y = p.getY(i) + 0.004 + moteSeed[i] * 0.006 + spread * 0.01;
      if (y > 8.5) y = 0;
      p.setY(i, y);
      p.setX(i, p.getX(i) + Math.sin(t * 0.5 + moteSeed[i] * 20) * 0.0015);
    }
    p.needsUpdate = true;
    moteMat.color.setHex(cold > 0.5 ? 0x9ab8d0 : 0xd8b58a);

    // the moth keeps its own counsel
    const ma = t * 0.9;
    moth.position.set(
      lantern.position.x + Math.cos(ma) * (0.55 + Math.sin(t * 0.31) * 0.15),
      lantern.position.y + Math.sin(t * 1.7) * 0.18,
      lantern.position.z + Math.sin(ma) * 0.5
    );
    moth.lookAt(lantern.position);
    const flap = Math.sin(t * 26) * 0.9;
    wingL.rotation.y = flap; wingR.rotation.y = -flap;

    renderer.render(scene, camera);
  }
  readScroll();
  frame();
}

function makeGlowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.35, 'rgba(255,255,255,0.4)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}
