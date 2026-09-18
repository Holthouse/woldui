/**
 * Motion primitive stories (docs/guidelines.md#motion).
 *
 * Use the "Motion" toolbar control to flip each of these into reduced motion. The
 * guidelines require the animation to collapse to its end state, not merely run faster — these
 * stories are how that is inspected without changing OS settings.
 *
 * Each story carries a `play` that waits for motion to settle before the story is
 * considered rendered. That is not cosmetic: the addon-a11y axe pass runs after `play`,
 * and a contrast check taken mid-fade measures a half-transparent element against the
 * page, reporting a violation that does not exist once the animation lands. Waiting makes
 * the check deterministic instead of dependent on machine speed.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { waitFor } from 'storybook/test';
import { Fade, Reveal, Stagger } from './primitives';
import { fadeIn, scaleIn, slideUp } from './variants';
import { Stack } from '@woldui/react/components/atoms/layout';
import { Muted } from '@woldui/react/components/atoms/typography';

/**
 * Waits until every animated descendant has reached full opacity.
 *
 * Polling computed opacity rather than `Element.getAnimations()` because Framer Motion
 * drives some transitions from JavaScript rather than the Web Animations API, so the
 * animation list can be empty while the element is still visibly moving.
 */
async function settled(canvasElement: HTMLElement) {
	await waitFor(
		() => {
			const pending = Array.from(canvasElement.querySelectorAll<HTMLElement>('*')).filter(
				(el) => Number(getComputedStyle(el).opacity) < 1
			);
			if (pending.length > 0) throw new Error(`${pending.length} element(s) still animating`);
		},
		{ timeout: 3000 }
	);
}

const meta = {
	title: 'Motion/Primitives',
	component: Reveal,
	// Every story below supplies its own tree via `render`, but Reveal requires `children`,
	// so meta has to carry a default for the stories to typecheck.
	args: { children: null },
	play: async ({ canvasElement }) => settled(canvasElement)
} satisfies Meta<typeof Reveal>;

export default meta;
type Story = StoryObj<typeof meta>;

function Panel({ children }: { children: React.ReactNode }) {
	return (
		<div className="border border-border bg-card px-4 py-3 text-sm text-card-foreground">
			{children}
		</div>
	);
}

export const RevealSlideUp: Story = {
	name: 'Reveal — slideUp (default)',
	render: () => (
		<Reveal>
			<Panel>Slides up and fades in.</Panel>
		</Reveal>
	)
};

export const RevealFade: Story = {
	name: 'Reveal — fadeIn',
	render: () => (
		<Reveal variants={fadeIn}>
			<Panel>Fades in only.</Panel>
		</Reveal>
	)
};

export const RevealScale: Story = {
	name: 'Reveal — scaleIn',
	render: () => (
		<Reveal variants={scaleIn}>
			<Panel>Scales in. Used for popovers and dialogs.</Panel>
		</Reveal>
	)
};

export const StaggeredList: Story = {
	name: 'Stagger — list children in turn',
	render: () => (
		<Stagger as="ul" className="flex flex-col gap-2">
			{['Groceries', 'Rent', 'Transport', 'Savings'].map((label) => (
				<Reveal as="li" key={label} variants={slideUp}>
					<Panel>{label}</Panel>
				</Reveal>
			))}
		</Stagger>
	)
};

export const CrossFade: Story = {
	name: 'Fade — skeleton to content',
	render: () => (
		<Stack gap="sm">
			<Fade>
				<Panel>Content, cross-faded in.</Panel>
			</Fade>
			<Muted>Switch the Motion toolbar to &ldquo;Reduced motion&rdquo; and re-render.</Muted>
		</Stack>
	)
};
