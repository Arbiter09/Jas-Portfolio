# Jas Shah, Portfolio

A personal portfolio built to feel like a workshop kept after hours: dark, deliberate, and quiet, with exactly one piece of spectacle per section and no more. The visual language borrows from Souls games and Bloodborne (bonfire shrines, wax seals, fog gates, item pickup banners), but the restraint is the point. It should read as a site kept by someone who ships quietly, not as a theme park.

**Live at [arbiter09.github.io/Jas-Portfolio](https://arbiter09.github.io/Jas-Portfolio/)**

Built with Vite, Three.js, and vanilla JavaScript. No UI framework, no component library, no state management library, no CSS framework.

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Contents

- [Why no framework](#why-no-framework)
- [Running it](#running-it)
- [Project structure](#project-structure)
- [The sections](#the-sections)
- [Terminal reference](#terminal-reference)
- [Design system](#design-system)
- [How the tricky parts work](#how-the-tricky-parts-work)
- [Making it yours](#making-it-yours)
- [Deploying](#deploying)
- [Performance](#performance)
- [Known gaps](#known-gaps)

## Why no framework

The site is five static tabs and one WebGL scene. There is no server state, no routing beyond show/hide, no data fetching, and no shared mutable state worth modeling. React would have added a dependency, a build step, and a reconciliation layer to solve problems this project does not have.

What it uses instead:

- **Plain DOM APIs** for rendering. Each section module owns its markup and builds it from a data array at the top of the file. Editing content means editing an object, not hunting through templates.
- **CSS custom properties** for theming, so the palette lives in one place at the top of `style.css`.
- **`IntersectionObserver`** for reveal animations, which is cheaper and less jittery than scroll math.
- **SVG path sampling** (`getTotalLength`, `getPointAtLength`) for the two self-drawing paths. The browser does the curve math.

The cost of this choice is that there is no guardrail against DOM mistakes. The benefit is a 138 kB gzipped bundle where roughly 130 kB of that is Three.js, and a codebase where every file can be read top to bottom in one sitting.

## Running it

| Command | What it does |
| --- | --- |
| `npm install` | Installs Vite and Three.js. That is the entire dependency list. |
| `npm run dev` | Starts the Vite dev server with hot reload on port 5173. |
| `npm run build` | Produces a static site in `dist/`. |
| `npm run preview` | Serves the built `dist/` locally to check the production bundle. |

There is also `.claude/launch.json`, which pins a dev server to port 5183 for tooling that reads that config. It does not affect `npm run dev`.

## Project structure

```
index.html          markup for all six tabs, plus the raven and perch SVGs
src/
  main.js           tab router, rune underline, typing effect, souls counter, ember sparks
  hero.js           the Three.js shrine scene
  handheld.js       the Projects handheld: menu, detail views, digit lock
  experience.js     the pilgrim's road and its milestone data
  terminal.js       the shell, its filesystem, easter eggs, and the rune game
  shiplog.js        weekend commit entries
  contact.js        the raven flight and the dispatch plaques
  style.css         the whole design system, roughly 900 lines
public/             static assets served as is (put resume.pdf here)
```

Every module exports a single `init` function that `main.js` calls once on load. Modules do not import each other. The one exception is `initTerminal(navigateTo)`, which receives the router function so that typing `cd projects` can actually change tabs.

## The sections

### Home, the shrine

The centerpiece is a Three.js scene: a tapered greatsword driven into a ring of cracked stone, lit not by flame but by a suspended lantern that sways and flickers. The whole assembly rotates slowly on its own axis and drifts toward the cursor with heavy damping (a lerp factor of 0.018), so it feels like a camera wandering through a ruined estate rather than a UI element chasing the mouse.

Scroll drives three things at once over a 165vh scroll region:

1. **The ring cracks apart.** Eleven procedurally deformed dodecahedra push outward and upward on a squared progress curve, so the break starts slow and accelerates.
2. **The light goes cold.** Lantern color, ambient color, flame color, rim intensity, fog color, scene background, and ash mote color all interpolate from ember orange toward a moonlit blue. Leaving the bonfire for the hunt.
3. **Ash rises.** 260 additive points drift upward and recycle at the top, faster as the ring breaks.

A custom GLSL shader plane sits low around the base as a fog gate. It ripples with layered value noise rather than sitting still, and thins when the cursor is present, revealing circuit trace runes etched into the stone. Those runes are the one deliberate tell that this is a technologist's altar and not just set dressing. A single moth circles the lantern on its own orbit and never lands.

Over the top: the name in an engraved stone gradient, and a typing effect that cycles through three roles. Each swap fires a faded gold item pickup banner ("You have acquired: Agent Builder") before settling. In the corner, a souls counter ticks quietly to 300+, which is the real LeetCode count. It rewards noticing rather than announcing itself.

The scene stops rendering entirely when scrolled out of view, via `IntersectionObserver`.

### Projects, the workbench handheld

A small console found in a drawer, and the whole section runs on it. It browses two levels deep: a folder list first (Systems, AI / ML, Web3 and The Grind, each showing how many works it holds), then the works inside. The D-pad moves a pixel caret, A goes in, B comes back out, and left and right flip between works once you are inside one. The description box carries the crow's line for whatever is highlighted, the way a creature entry would.

The screen is amber phosphor on obsidian rather than the classic green LCD, because ember is the only accent this site allows itself. Both colors are CSS variables at the top of the handheld block in `style.css`, so swapping to `#9bbc0f` on `#0f380f` is a two line change.

A slide switch on the top edge cuts the power, with the red POWER lamp beside it. Off means a genuinely dead device: the screen goes to bare glass, the red LED goes out, and the controls stop responding. Switching back on runs a short CRT warm-up, a line opening out of the middle, before the menu returns.

SELECT toggles sound, off by default. When on, each press gets a short square wave blip from the Web Audio API. Everything is keyboard playable too: arrow keys, Z or Enter for A, X for B.

### Experience, the pilgrim's road

Five milestones from a B.E. in Mumbai to the current research role at Stony Brook, connected by a road that draws itself as you scroll. Cards alternate sides, slide in when they enter the viewport, and carry a small illustrated skyline for their city. Remote roles render translucent with a dashed border, marking them as outposts rather than home turf. Wax seal badges call out the Top 10% GPA and the ETHDenver second place finish.

### Terminal, the hatch

A genuinely working shell, cyan on obsidian with a scanline overlay and a candle flicker keyframe. It supports command history with the arrow keys, tab completion against the command list, a small read only filesystem, a set of undocumented responses, and a memory mini game. Typing `cd projects` navigates the actual site through the fog gate transition.

### Ship Log

Reverse chronological weekend builds styled as commit messages, each sealed with a wax stamped date that rotates slightly and alternates direction so the column does not look mechanical. A streak counter tracks consecutive weekends at the bench.

### Contact, send a raven

A raven sits perched on a bare limb, wings folded, one ember eye lit, waiting. As you scroll it drops off the branch and glides down a curved path through the page, banking into turns, flipping to face its direction of travel, and bobbing on the wingbeat. Behind it, an ember flight line draws itself.

Four dispatch plaques alight from alternating sides as the raven passes, each with a hand drawn wax seal, the contact value in monospace, and one dry line of copy. The email plaque copies to the clipboard and reports back as "sealed". At the bottom, a "Release the Raven" button sends the bird off the screen in a shower of feathers and opens your mail client.

## Terminal reference

Documented commands, which `help` will also list:

| Command | Effect |
| --- | --- |
| `whoami` | Identity, with a fake `uid`/`gid` line |
| `ls` | Lists the archive root |
| `ls projects` | Lists projects with one line summaries |
| `cat experience.md` | The resume as formatted markdown |
| `cat skills.json` | Skills as a JSON object |
| `cat grind.txt` | A pointer toward the locked chest |
| `cd <tab>` | Navigates the site. Accepts `projects`, `experience`, `shiplog`, `home`, `contact`, `~` |
| `open resume` | Links to `/resume.pdf` |
| `sudo hire-me` | Privilege escalation, in the good way |
| `runes` | Starts the rune trial mini game |
| `history`, `clear`, `echo`, `pwd`, `date` | The usual |

The rune trial flashes a sequence of runes, hides them, and asks you to type the sequence back using keys 1 through 6. Three rounds of increasing length. Failure prints a familiar two word message. Typing `q` flees the trial.

There are also nine undocumented words the shell responds to. `help` hints that they exist but does not name them. Souls players will guess the first one on the first try.

## Design system

### Palette

Desaturated ash, bone, and umber, with warm ember orange as the only sustained accent. No purple, no neon. A cold moonlit blue appears only as the destination of the hero's scroll transition and as an accent in scrying diagrams.

| Token | Value | Used for |
| --- | --- | --- |
| `--ash-950` | `#0b0a09` | Page background |
| `--bone` | `#d8cfc0` | Primary text |
| `--bone-dim` | `#9c948a` | Secondary text |
| `--umber` | `#5c4a38` | Dormant borders and bullets |
| `--ember` | `#e08b3d` | The accent. Links, active states, the road |
| `--ember-hot` | `#ffb35c` | Hover and emphasis |
| `--moon` | `#7fa8c9` | The cold end of the hero transition |
| `--gold-banner` | `#c9a55a` | Item pickup banner and window chrome |

### Typography

- **Cinzel** for display headings. Gothic influenced and slightly severe, without tipping into medieval pastiche.
- **JetBrains Mono** for anything technical: labels, values, the terminal, dates, commit hashes.
- **Crimson Pro** for body copy, which keeps the prose readable and slightly literary next to all that monospace.

### Motion

Four rules the whole site follows:

1. **Nothing snaps.** Cursor tracking is heavily damped. Tab transitions dissolve through fog. Cards ease in on a `cubic-bezier(0.22, 1, 0.36, 1)` curve.
2. **Hover glows, it does not shadow.** Cards lift with a warm candlelight bloom rather than a hard drop shadow.
3. **Presses spark.** Seven embers scatter from the pointer on any interactive press.
4. **One wow per section.** The 3D shrine, the window manager, the self drawing road, the working shell, and the raven flight are deliberately spread out so they never compete.

## How the tricky parts work

### The road is built from its waymarkers

An early version generated the path as a decorative sine wave and positioned the dots separately as a percentage offset from each card. They drifted apart at every viewport width, because nothing tied the two calculations together.

The fix inverted the relationship. Each milestone contributes exactly one point (its `offsetTop` plus 38 pixels, offset 18 pixels either side of the centerline). A Catmull-Rom spline is fitted through those points and emitted as cubic beziers, then the dots are pinned to the same coordinates. Because both consume the same numbers, they cannot disagree. Measured at full width, every dot lands within half a pixel of the curve.

Two details make it hold up:

- The dots live in their own absolutely positioned overlay, not inside the cards. Otherwise each card's slide in transform would drag its dot off the line mid animation.
- Positions are measured with `offsetTop`, which is layout based and therefore immune to those same transforms.

### The raven follows a sampled path

The flight is a hidden SVG path regenerated on resize to match the scene's dimensions. On each scroll event the code samples one point at the current progress and a second point slightly ahead, then derives the heading with `atan2`. Since the bird is drawn facing right, a heading beyond 90 degrees flips it horizontally and adds 180 degrees rather than letting it fly upside down. The bank angle is clamped to 32 degrees so it banks instead of nosediving.

This runs inline on the scroll event rather than inside `requestAnimationFrame`. It is a single `getPointAtLength` call per event, which is cheap, and it keeps the bird locked to the scrollbar instead of trailing a frame behind.

### Layout that survives hidden tabs

Inactive tabs are `display: none`, so anything measured while a tab is hidden returns zero. Both self drawing paths guard against this and recompute on a `tab:<name>` event that the router dispatches after making a page visible, plus on resize.

## Making it yours

All content lives in plain data structures at the top of each module. There is no CMS and no config file to learn.

| To change | Edit |
| --- | --- |
| Folders, projects, crow captions, stacks | `categories` array in `src/handheld.js` |
| Roles, dates, bullets, badges, cities | `milestones` array in `src/experience.js` |
| Weekend builds and streak | `entries` array in `src/shiplog.js`, streak in `index.html` |
| Contact links and their captions | `dispatches` array in `src/contact.js` |
| Terminal output and easter eggs | `files` and `commands` objects in `src/terminal.js` |
| Colors, fonts, spacing | The `:root` block at the top of `src/style.css` |
| Roles in the typing effect | `roles` array in `src/main.js` |

**One thing to do before deploying:** add your resume at `public/resume.pdf`. The Contact plaque and the terminal's `open resume` both point there, and without the file they will 404.

## Deploying

The site is live at **https://arbiter09.github.io/Jas-Portfolio/** and redeploys automatically.

`.github/workflows/deploy.yml` runs on every push to `main`. It installs with `npm ci`, builds, and force-pushes the contents of `dist/` to the `gh-pages` branch, which is what Pages serves. You can also trigger it by hand from the Actions tab, since the workflow declares `workflow_dispatch`.

`dist/` is gitignored on the `main` branch on purpose. Build output is produced in CI rather than committed, so `main` only ever holds source. The `gh-pages` branch holds nothing but generated files and is safe to treat as disposable.

A note on why it publishes to a branch rather than using the newer Pages artifact flow: that flow needs the repository's Pages source set to "GitHub Actions", and `actions/configure-pages` could not switch that on with the default workflow token. Pushing a `gh-pages` branch enables Pages on its own and needs no repository settings at all.

### The subpath gotcha

Pages serves this repository from `/Jas-Portfolio/` rather than a domain root, which breaks any URL written with a leading slash. Two things handle that:

- `vite.config.js` sets `base: '/Jas-Portfolio/'`, which rewrites every bundled asset URL at build time.
- Anything pointing at a file in `public/` builds its path from `import.meta.env.BASE_URL`. The resume links in `contact.js` and `terminal.js` do this. Written as `/resume.pdf` they would resolve to the domain root and 404 in production while working perfectly in development, which is a genuinely annoying bug to catch late.

If you fork this under a different repository name, change `base` to match, or set it to `'/'` for a custom domain or a `username.github.io` repository.

### Hosting it elsewhere

`npm run build` produces a fully static `dist/` with no server requirement, so Netlify, Vercel, Cloudflare Pages, or an S3 bucket all work. For any host serving from a domain root, set `base` back to `'/'` first.

## Performance

The production bundle is roughly 525 kB raw and 138 kB gzipped. Almost all of that is Three.js. The site's own code is a few tens of kilobytes.

Choices that keep it light:

- No framework runtime and no third party UI code.
- The hero scene halts rendering when scrolled offscreen, so it does not burn a GPU on the rest of the page.
- Geometry is low poly and reused. Materials are shared across meshes.
- Glow sprites and the rune texture are generated on a canvas at runtime, so there are no image downloads.
- The only network requests beyond the bundle are the three Google Fonts families.

If the bundle matters more than the shrine, the honest lever is `hero.js`. Lazy loading Three.js behind a dynamic import would cut the initial payload by roughly 90%.

## Known gaps

Stated plainly rather than glossed over:

- **No `prefers-reduced-motion` support yet.** This is the most important thing to add. The site animates a great deal and currently ignores that preference.
- **The 3D scene is not described to screen readers.** The canvas is decorative and unlabeled. Purely ornamental elements (the raven, the perch, the banner, the feathers) are correctly marked `aria-hidden`, but the hero itself deserves a text alternative.
- **The window manager is pointer first.** Dragging and resizing scroll windows requires a pointer. Folders open on a single tap on touch devices, but windows cannot be moved by keyboard.
- **Mobile drops the road illustration.** Below 760 pixels the milestone cards stack full width and the path and its dots are hidden rather than redrawn vertically.
- **Most project links point at the GitHub profile, not individual repositories.** MCPTrace and The Grind link to their real destinations; the other twelve works in `handheld.js` fall back to `github.com/Arbiter09` because their repository URLs are not recorded anywhere yet. Swap in the real ones as they land.
- **ETHDenver has no tech stack listed.** The resume does not record one, so the field is deliberately left empty rather than invented.

---

Forged on a Sunday, fueled by chai and stubbornness.
