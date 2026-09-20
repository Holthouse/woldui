# Writing a component page

Every page in `app/docs/components/<slug>/page.mdx` (and `app/docs/atoms/<slug>/page.mdx`)
follows the same shape. `app/docs/components/button/page.mdx` is the in-depth reference;
`app/docs/components/kbd/page.mdx` is the minimal one.

## Files

- `app/docs/components/<slug>/page.mdx`: the page. The slug is the file name in
  `src/components/ui/` (e.g. `dropdown-menu`).
- `content/examples/<slug>/<name>.tsx`: one live example per file.
  - Each file default-exports one component. The same file is both the preview and the
    code shown under "Code", so write it as code a reader would copy.
  - Import only from `@woldui/react/...` paths (e.g. `@woldui/react/components/ui/select`),
    `react` and `lucide-react`. Never import site files.
  - Add `'use client';` at the top only when the example uses state, effects or event
    handlers.
  - Nothing non-deterministic in render: no `Math.random()`, `Date.now()` or `new Date()`
    without fixed arguments. Use fixed dates such as `new Date(2026, 8, 15)`.
  - Copy stays neutral and product-agnostic: projects, teams, notifications, settings.
    Nothing about budgets, money, kroner, accounts or envelopes.
  - Accessible: every icon-only control has an `aria-label`, every input has a label, and
    decorative icons get `aria-hidden`.
  - Keep each example short (usually under 40 lines). One idea per example.

## Page anatomy (MDX)

```mdx
import Usage from '@/content/examples/<slug>/usage';

export const metadata = { title: '<Title>' };

<DocHeader
	title="<Title>"
	description="<One sentence: what it is and when to reach for it.>"
	source="components/ui/<slug>"
	imports={['Export', 'ExportPart']}
	primitive={{ name: 'Radix <X>', href: 'https://www.radix-ui.com/primitives/docs/components/<x>' }}
/>

## Usage

<Example name="<slug>/usage">
	<Usage />
</Example>

## Accessibility

- 2 to 5 concrete bullets: keyboard behaviour, ARIA, focus.

## API

<PropsTable of="components/ui/<slug>#Export" inherits={{ name: 'Radix <X> Root', href: '…' }} />
```

- **`primitive`**: include it only if the component wraps a Radix (or other) primitive. Look
  at its imports in `src/components/ui/<slug>.tsx`. Others: cmdk (Command), vaul (Drawer),
  sonner, embla-carousel (Carousel), react-day-picker (Calendar),
  react-resizable-panels (Resizable), input-otp, recharts (Chart), @base-ui/react.
- **`imports`**: the main exports a reader needs, in the order they nest.
- **`<Example>`** props: `name` (required), `align="start"` for wide or top-anchored
  content, `tall` for tall previews (sidebars, calendars, tables). Overlays go in a
  normal-height preview with a trigger button.
- **`<PropsTable of="…">`**: the key must exist in `generated/props.json` (`module#Export`).
  Add one table per export that has props of its own. The `inherits` line says what else
  it accepts (the Radix part, or `the native <div>`).
- **`<Callout>`** (optional, `tone="warning"` for sharp edges) for one important note.
- Headings are `##` / `###` only. They feed "On this page".

## Depth

- **Standard pages**: Usage (1 example), then 1 or 2 more examples if the component has
  genuinely different modes (e.g. orientation, sizes, a disabled or invalid state), then
  Accessibility and API.
- **Flagship pages** (Button, Input, Field atom, Card, Tabs, Switch, Badge, Alert, Dialog,
  Sonner, Select, Motion): 4 to 7 examples covering variants, sizes, states (disabled,
  invalid, loading), composition with other components, and a controlled example.
  Accessibility gets a fuller section.

## Sources to reuse

- **DanBudget's gallery** (read only, do not modify):
  `C:\Users\Rick\Documents\github\DanBudget\apps\frontend\src\components\design\gallery\*.tsx`.
  - Each `<Specimen name="X">` block is a working example of component X. Adapt it into
    `usage.tsx`, rewriting any budget/money copy to neutral copy.
  - `gallery-shell.tsx` (Specimen) is not part of the library: don't import it.
- **Storybook stories** in `src/**/*.stories.tsx`, for the atoms and states.
- **`docs/guidelines.md`** for the theme, accessibility and motion rules. The Field atom's
  error contract is documented there.
- **The component source** in `src/components/ui/<slug>.tsx`, for the real exports, props
  and variants. Never invent a prop.
