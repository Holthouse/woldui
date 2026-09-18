# WoldUI design guidelines

The rules this library is built to, and why. Code comments point here by section name.

- [Atoms](#atoms)
- [Theme](#theme)
- [Accessibility](#accessibility)
- [Motion](#motion)
- [No barrel](#no-barrel)
- [Testing](#testing)

---

## Atoms

Atoms are the smallest building blocks — `Stack`, `Inline`, `Grid`, `Box`, `Heading`,
`Text`, `Muted`, `Code`, `Icon`, `Field`. They contain no domain logic and follow the
tokens strictly. If an atom starts to know about a product's domain (a currency, an API
limit), it belongs in that product, not here.

Components (`src/components/ui`) are reusable compositional pieces built from atoms and
the tokens.

---

## Theme

**The theme reproduces HeroUI v2's visual language without depending on HeroUI.** The
palette, radii and shadows in `src/styles/globals.css` are written out in full and are the
only place to retune it. Nothing else hardcodes a colour or a radius.

- **Radius is 14px** (`--radius`), with an 8 / 12 / 14 ladder.
- **Tones are a scale, not a colour.** `--primary-50` through `--primary-900` exist for
  every tone, and the tinted `flat` and `faded` variants are built from the 100/700
  steps. That grid is where most of the HeroUI character lives.
- **Text and surface use different steps of the same tone.** See
  [Accessibility](#accessibility).
- **Shadows are layered and soft** (`--elevation-small/medium/large`), not a single drop.

Consumers retune the theme by overriding the CSS variables after importing it — see the
README.

⚠️ **`src/components/ui/**` is not purely generated code.** Alert, Button, Input,
Textarea, Card, Badge, Switch and Tabs have been rewritten by hand, and every overlay has
had its animation retimed. `shadcn add --overwrite` will silently revert those files.
Before running the CLI, know which files it will touch; afterwards, read
`git diff src/components/ui` rather than assuming the change was additive.

**A legacy variant name keeps its legacy meaning.** `ghost` means what shadcn means by it
— no border, tonal hover — because many generated call sites pass it (calendar days,
dialog and sheet close buttons, the sidebar, the combobox chevron). HeroUI's outlined
look is `bordered`. Before changing what a legacy name renders, grep for it.

The Button carries two axes, `variant` (shape) and `tone` (colour). HeroUI calls the
second one `color`; it is `tone` here because `<button>` has a native `color` attribute
and a cva variant of that name breaks any component spreading button props —
`react-day-picker` does exactly that.

---

## Accessibility

Every change must respect keyboard navigability, visible focus states, semantic HTML,
correct label association, accessible error messages, WCAG AA contrast, and proper focus
management for dynamic UI.

**The form error contract is fixed**, and the `Field` atom implements it so no form has to
remember it:

- `aria-describedby` lists, in order: the field error, the form-level message, the
  description, then the adornment (for example a character counter).
- `aria-invalid` is true when **either** a field error **or** a form-level message is
  present. A refusal belonging to no field still makes the control invalid.
- The form-level message carries `role="alert"`, because it is the only place a
  server-side refusal appears. The field error does not: `aria-describedby` already
  carries it, and two announcements for one submit is noise.
- An adornment such as a counter is **described, not announced**. It has no live region,
  so it is read when the control takes focus rather than on every keystroke.

Route a form-level failure through `Field`'s `message` prop rather than rendering a
paragraph beside it — a detached paragraph is announced once and is then unreachable from
the control.

**A tone that works as a surface may not work as text.** HeroUI's danger (`#f31260`)
measures 4.14:1 on white, under the 4.5:1 AA needs for normal text; its 600 step measures
6.06:1. So the theme carries separate `--danger-text`, `--warning-text` and so on, and
anything rendering a tone **as text** uses those.

**Known gap:** `muted-foreground` on `muted` measures 4.13:1, below AA for normal-size
text. On `background` it measures 4.60:1 and passes. Avoid muted-on-muted text until the
token is darkened.

Accessibility is checked automatically: `@storybook/addon-a11y` runs axe against every
story with `a11y: { test: 'error' }`, so a contrast or labelling regression fails CI.

---

## Motion

- **Durations and easings come from `@woldui/react/lib/motion/tokens`.** Nothing hardcodes
  a number, for the same reason nothing hardcodes a hex colour. The CSS counterparts are
  the `--motion-*` variables in `globals.css`, and the two must stay in step.
- **Use a named variant** from `@woldui/react/lib/motion/variants`. A component does not
  invent its own keyframes.
- **Import motion primitives from `@woldui/react/lib/motion/primitives`, not
  `motion/react` directly.** That direct import is what makes it easy to skip the
  reduced-motion guard.
- **The server always renders the final, visible state.** Animation is opt-in on the
  client after mount. Rendering `<motion.div initial="hidden">` immediately serialises to
  `style="opacity:0;…"`, so prerendered HTML ships invisible until hydration.
  `useReducedMotion()` cannot save that — there is no `matchMedia` on the server.
  `useMounted()` in `primitives.tsx` reads the environment via
  `useSyncExternalStore`'s server snapshot.
- **Reduced motion collapses the animation, it does not shorten it.** Anyone who has asked
  their OS to reduce motion gets the end state immediately.
- **There is one guard, not two.** The `prefers-reduced-motion` rule in `globals.css`
  neutralises _CSS_ animations and transitions. It does nothing to Framer Motion, which
  animates via inline styles and the Web Animations API. The primitives are that guard.
- **Motion never carries meaning on its own.**

**Nothing in render may be non-deterministic.** `Math.random()`, `Date.now()` and
`crypto.randomUUID()` run on the server and again on the client and disagree, and React
keeps the server's value. `SidebarMenuSkeleton` derives its varied bar width by hashing
`useId()`, which is stable across the boundary. If you need a varied-but-stable value,
that is the pattern.

**CSS or Framer Motion?**

| Use                               | Technique                        | Why                                                             |
| --------------------------------- | -------------------------------- | --------------------------------------------------------------- |
| Press (scale down), hover (fade)  | CSS `active:` / `hover:`         | Costs nothing and needs no client boundary.                     |
| Overlay enter/exit, backdrop blur | CSS keyed off Radix `data-state` | Radix already writes the state; CSS reads it.                   |
| The sliding tab indicator         | Framer Motion `layoutId`         | A shared-layout transition between two boxes. CSS cannot do it. |
| Reveal / stagger on mount         | Framer Motion                    | Orchestration across children.                                  |

If motion can be done in CSS, do it in CSS. Overlays run 250ms on a decelerating curve;
anything near 100ms is below the threshold where movement reads as movement at all.

---

## No barrel

**Import each component by its path. The package has no root export**, so
`import { Button } from '@woldui/react'` does not resolve.

```ts
import { Button } from '@woldui/react/components/ui/button';
import { Stack } from '@woldui/react/components/atoms/layout';
```

A barrel that re-exports `'use client'` modules puts every one of them into the
client-reference manifest of any Next.js route that imports from it, whether the route
renders them or not. Measured on a page rendering about 8 components: 1975 KB of client JS
and 41 component modules with a barrel, against 1124 KB and 3 with direct imports — 43% of
the bundle for components the page never rendered. Named re-exports and
`optimizePackageImports` were both tried and made no difference.

Collisions are resolved by path: `@woldui/react/components/atoms/field` is the accessible
label + control + error unit; `@woldui/react/components/ui/field` is shadcn's layout
primitive.

---

## Testing

- **Stories are tests.** `@storybook/addon-vitest` runs every story as a render + axe test
  in the `storybook` Vitest project. `*.browser.test.tsx` files are reserved for genuine
  behaviour — interaction, validation, focus management.
- **Stories enumerate the states that matter** (default / error / disabled / loading /
  empty), not just a bare default.
- **axe runs after the story's `play` function.** A story that animates on mount must wait
  for motion to settle; see the `settled` helper in `primitives.stories.tsx`.
- **Browser tests see real CSS.** The `client` project imports the theme, so a style
  assertion checks the real tokens. Components transition their focus and hover states
  over `--motion-fast`, so wait past the transition (`afterTransition` in
  `input-group.browser.test.tsx`) before measuring.
- **Test files run serially** (`fileParallelism: false`). Two projects drive a browser and
  both compile CSS; in parallel they starve each other.
