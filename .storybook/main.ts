/**
 * Storybook configuration for the design system package.
 *
 * The framework is @storybook/react-vite: nothing in this package depends on Next, and
 * keeping it that way is what lets any React app consume it. The Vite-based framework is also what lets @storybook/addon-vitest run every
 * story as a real browser-mode test (vitest.config.ts), so stories double as render tests.
 */

import type { StorybookConfig } from '@storybook/react-vite';
import tailwindcss from '@tailwindcss/vite';
import { defaultClientConditions } from 'vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(ts|tsx)'],
	addons: [
		'@storybook/addon-docs',
		// axe per story — the accessibility contract is checked, not reviewed by eye.
		'@storybook/addon-a11y',
		'@storybook/addon-themes',
		'@storybook/addon-vitest'
	],
	framework: {
		name: '@storybook/react-vite',
		options: {}
	},
	typescript: { reactDocgen: 'react-docgen-typescript' },
	/*
	 * Plain Vite has no Tailwind pipeline of its own, so without this plugin every class in
	 * every story is inert.
	 */
	viteFinal: (config) => ({
		...config,
		plugins: [...(config.plugins ?? []), tailwindcss()],
		// Resolve the package's own imports to src/, as vitest.config.ts explains.
		resolve: { ...config.resolve, conditions: ['woldui-source', ...defaultClientConditions] }
	})
};

export default config;
