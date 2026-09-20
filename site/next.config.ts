import path from 'node:path';
import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	// A static site on GitHub Pages: prerendered HTML, served from /woldui.
	output: 'export',
	basePath: '/woldui',
	trailingSlash: true,
	images: { unoptimized: true },
	pageExtensions: ['ts', 'tsx', 'mdx'],
	/*
	 * The site renders the library from ../src, not from the published build, so it always
	 * shows the code on this branch. That source lives outside site/, so Turbopack's root is
	 * the repository root, and tsconfig `paths` point the package's own import specifiers
	 * (@woldui/react/...) at ../src.
	 */
	turbopack: { root: path.join(import.meta.dirname, '..') }
};

// Plugins are named as strings so Turbopack can pass them to its MDX loader. remark-gfm
// adds tables, which the docs use for token and prop lists.
const withMDX = createMDX({ options: { remarkPlugins: ['remark-gfm'] } });

export default withMDX(nextConfig);
