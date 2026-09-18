/**
 * Storybook preview (docs/guidelines.md#testing).
 *
 * Storybook runs its own Vite pipeline, so the theme has to be imported here explicitly —
 * main.ts adds the Tailwind plugin that compiles it. A missing import here is the usual
 * cause of a Storybook that looks right in dev and unstyled after `build-storybook`.
 */

import * as React from 'react';
import type { Preview, Decorator } from '@storybook/react-vite';
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/styles/globals.css';

/**
 * Lets a story be inspected under reduced motion without touching OS settings.
 *
 * docs/guidelines.md#motion requires every animation to collapse rather than shorten; being able to flip this
 * per story is what makes that reviewable.
 */
const withReducedMotion: Decorator = (Story, context) => {
	const reduced = context.globals.reducedMotion === 'reduce';

	return (
		<>
			{reduced && (
				<style>{`
					*, *::before, *::after {
						animation-duration: 0.01ms !important;
						transition-duration: 0.01ms !important;
					}
				`}</style>
			)}
			<div className="bg-background p-6 text-foreground">
				<Story />
			</div>
		</>
	);
};

const preview: Preview = {
	parameters: {
		controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
		a11y: { test: 'error' },
		layout: 'fullscreen'
	},

	globalTypes: {
		reducedMotion: {
			description: 'Emulate prefers-reduced-motion',
			defaultValue: 'no-preference',
			toolbar: {
				title: 'Motion',
				icon: 'play',
				items: [
					{ value: 'no-preference', title: 'Motion on' },
					{ value: 'reduce', title: 'Reduced motion' }
				],
				dynamicTitle: true
			}
		}
	},

	decorators: [
		withReducedMotion,
		// Tokens are keyed to the `.dark` class, so the theme switch toggles that class.
		withThemeByClassName({
			themes: { light: '', dark: 'dark' },
			defaultTheme: 'light'
		})
	],

	initialGlobals: { a11y: { manual: false } }
};

export default preview;
