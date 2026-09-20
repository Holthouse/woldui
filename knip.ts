/**
 * Dead-code and unused-dependency analysis, for the library and the docs site.
 *
 * Knip's plugins find the stories, tests, Next routes and tool configs on their own, and
 * only what they cannot know is listed here.
 *
 * A library is mostly exports nobody inside it calls, so the `exports` map in package.json
 * is what makes those files reachable. The subpath patterns there are wildcards Knip
 * cannot expand into files, hence the explicit entries below.
 */

import type { KnipConfig } from 'knip';

const config: KnipConfig = {
	workspaces: {
		'.': {
			entry: [
				/*
				 * Vendored shadcn code, declared as entry rather than ignored. As entry points
				 * the files are still walked, so their imports count toward dependency usage,
				 * but their exports are treated as public API and not reported.
				 */
				'src/components/ui/**/*.{ts,tsx}',
				// The package's public surface: every atom and the motion layer.
				'src/components/atoms/*.tsx',
				'src/lib/**/*.{ts,tsx}'
			]
		},
		site: {
			entry: [
				// Examples are imported by MDX pages, which Knip does not parse.
				'content/examples/**/*.tsx'
			]
		}
	}
};

export default config;
