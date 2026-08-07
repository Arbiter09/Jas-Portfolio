# jas-shah — forged on weekends

A Souls/Bloodborne-flavored portfolio: one restrained 3D shrine, a grimoire project desktop, and a real terminal down to the archive. Vite + Three.js + vanilla everything.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
```

## Where things live

- `src/hero.js` — the shrine: sword, stone ring (cracks apart on scroll), lantern, fog-gate shader, ash motes, moth, warm→moonlit color grade
- `src/desktop.js` — Projects workbench: wax-seal folders, draggable/resizable scroll-windows, taskbar, the crow's captions, the locked-chest riddle (answer: the number he won't stop saying)
- `src/experience.js` — the pilgrim's road: self-drawing path + milestone data
- `src/terminal.js` — commands, easter eggs (`praise`, `bonfire`, `crow`, …), and the `runes` mini-game
- `src/shiplog.js` — weekend commit entries + streak
- `src/contact.js` — "Send a Raven": the bird perches until you scroll, then flies a Catmull-Rom path down past each wax-sealed dispatch, drawing an ember trail; "Release the Raven" sends it off the screen in a shower of feathers
- `src/main.js` — tab router, rune underline, typing/acquire banner, souls counter, ember sparks

## To personalize

- Drop your actual resume at `public/resume.pdf` (`open resume` in the terminal and the Contact link point there)
- Project/experience/ship-log copy is plain data at the top of each module — edit in place
- Contact links live in `index.html`

forged on a Sunday, fueled by chai and stubbornness.
