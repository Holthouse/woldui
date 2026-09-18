/**
 * Builds the publishable package into dist/.
 *
 * Plain `tsc`, not a bundler, on purpose. Each source file becomes one ESM file plus its
 * declarations, so:
 *   - `'use client'` survives at the top of every client component. Bundlers hoist or
 *     strip module directives, and a Next.js consumer then gets a server component that
 *     calls useState.
 *   - consumers import one component per path and pay for nothing else.
 *
 * The stylesheets are copied as-is. Their `@source` lines are relative, so from
 * dist/styles/ they point Tailwind at the compiled components in dist/.
 */

import { execFileSync } from 'node:child_process';
import { cpSync, rmSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

rmSync('dist', { recursive: true, force: true });

execFileSync(
	process.execPath,
	[require.resolve('typescript/bin/tsc'), '-p', 'tsconfig.build.json'],
	{
		stdio: 'inherit'
	}
);

cpSync('src/styles', 'dist/styles', { recursive: true });
