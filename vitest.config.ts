/**
 * Test configuration (docs/guidelines.md#testing).
 *
 * Browser mode via the Playwright provider, tests colocated with source, and
 * `expect.requireAssertions` on, so a test that asserts nothing fails instead of passing
 * quietly.
 *
 * Two projects:
 *   client    — browser, for component behaviour. Files named *.browser.test.tsx.
 *   storybook — browser, runs every *.stories.tsx as a render + axe test.
 */

import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { fileURLToPath } from 'node:url';
import { defaultClientConditions } from 'vite';

/**
 * Resolve the package's own imports (`@woldui/react/...`) to src/ rather than dist/, so
 * tests and stories run against the source without a build. The condition is declared in
 * package.json's exports under a name no consumer's bundler will ever ask for, so
 * published installs always get dist/.
 */
const resolve = { conditions: ['woldui-source', ...defaultClientConditions] };

/** A fresh browser config per project — Vitest names the instance after its project. */
const browser = (name: string) => ({
	enabled: true,
	provider: playwright(),
	instances: [{ browser: 'chromium' as const, headless: true, name: `${name} (chromium)` }]
});

/** Spread into each project: a root `test` option does not reach a project on its own. */
const sharedTest = {
	expect: {
		requireAssertions: true,
		poll: { timeout: 5000, interval: 50 }
	},
	testTimeout: 20_000,
	fileParallelism: false
};

export default defineConfig({
	test: {
		projects: [
			{
				plugins: [react(), tailwindcss()],
				resolve,
				test: {
					...sharedTest,
					name: 'client',
					browser: browser('client'),
					// Without the stylesheet every Tailwind class is inert in these tests.
					setupFiles: ['./test/setup-client.ts'],
					include: ['src/**/*.browser.test.{ts,tsx}']
				}
			},
			{
				plugins: [
					react(),
					storybookTest({ configDir: fileURLToPath(new URL('.storybook', import.meta.url)) })
				],
				resolve,
				test: {
					...sharedTest,
					name: 'storybook',
					browser: browser('storybook')
				}
			}
		]
	}
});
