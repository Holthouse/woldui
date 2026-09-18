# WoldUI

A design system for React and Tailwind CSS v4, with HeroUI v2's look (soft radii, tonal
colour scales, layered shadows and springy motion) built on
[shadcn/ui](https://ui.shadcn.com) and [Radix](https://www.radix-ui.com). It doesn't
depend on HeroUI.

- 60+ components: buttons, forms, overlays, navigation, data display, charts
- Layout and typography atoms: `Stack`, `Inline`, `Grid`, `Heading`, `Text`, `Icon`, and an
  accessible `Field`
- Motion primitives that respect reduced motion and render visible on the server
- Accessible by default: every component story passes axe in CI
- Works with Next.js server components: `'use client'` is kept on every client component

## Install

```bash
pnpm add @woldui/react
```

Peer dependencies: `react` 19, `react-dom` 19 and `tailwindcss` 4.

## Set up

**1. Import the theme** once, at the top of your main stylesheet. It already includes
Tailwind, so don't import `tailwindcss` again:

```css
@import '@woldui/react/globals.css';
```

The theme tells Tailwind to scan WoldUI's own files. Without that, Tailwind skips
`node_modules` and the components render unstyled.

Because it scans every component, your stylesheet includes the classes for all of them,
not just the ones you import. That comes to about 185 KB uncompressed (about 28 KB
gzipped) with the IBM Plex Sans font files served separately. Import-per-path still keeps
the JavaScript to what you use.

**2. Import components by path.** There's no root export, so each import brings in only
the component you asked for (see [No barrel](docs/guidelines.md#no-barrel)):

```tsx
import { Button } from '@woldui/react/components/ui/button';
import { Stack } from '@woldui/react/components/atoms/layout';
import { Fade } from '@woldui/react/lib/motion/primitives';
import { cn } from '@woldui/react/lib/utils';

export function Example() {
	return (
		<Stack gap="sm">
			<Button tone="primary">Save</Button>
			<Button variant="flat" tone="danger">
				Delete
			</Button>
		</Stack>
	);
}
```

**3. Dark mode** is keyed to a `.dark` class on an ancestor. With
[`next-themes`](https://github.com/pacocoursey/next-themes), use `attribute="class"`.

**4. Toasts and tooltips** need their providers mounted once, near the root:

```tsx
import { Toaster } from '@woldui/react/components/ui/sonner';
import { TooltipProvider } from '@woldui/react/components/ui/tooltip';
```

## Theming

All colours, radii, shadows and motion timings are CSS variables. To retune them,
override the variables after importing the theme:

```css
@import '@woldui/react/globals.css';

:root {
	--radius: 0.5rem;
	--primary: #7c3aed;
}
```

The full list is in [`src/styles/globals.css`](src/styles/globals.css). Tones come as
scales (`--primary-50` to `--primary-900`); the flat and faded variants use those steps.

## Guidelines

[`docs/guidelines.md`](docs/guidelines.md) covers the rules the library follows:
the theme, the accessibility contract (including the `Field` error contract), motion, why
there's no barrel, and how stories double as tests.

## Development

Node 26 and pnpm 10 (`.nvmrc`, `packageManager`).

| Command              | Does                                                       |
| -------------------- | ---------------------------------------------------------- |
| `pnpm storybook`     | Storybook on port 6007                                     |
| `pnpm test`          | browser tests, and every story as a render + axe test      |
| `pnpm check`         | typecheck                                                  |
| `pnpm lint`          | Prettier + ESLint                                          |
| `pnpm knip`          | dead code and unused dependencies                          |
| `pnpm build`         | compile to `dist/`                                         |
| `pnpm check:package` | publint + are-the-types-wrong against the packed output    |
| `pnpm changeset`     | describe your change for the changelog (see `.changeset/`) |

Inside this repo, the package's own imports (`@woldui/react/...`) resolve to `src/`
through a `woldui-source` export condition, so tests and Storybook need no build.

**Adding shadcn components:** `components.json` routes `shadcn add` into
`src/components/ui`. Several of those files are rethemed by hand, and `--overwrite`
reverts them, so read `git diff src/components/ui` afterwards.

**Releasing:** merge pull requests that include a changeset. The release workflow opens a
version pull request, and merging that publishes to npm with provenance.

## Licence

[MIT](LICENSE). Includes adapted shadcn/ui code, and reproduces HeroUI's theme values;
see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
