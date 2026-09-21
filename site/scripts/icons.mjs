/**
 * Renders app/icon.svg into the PNG icons, before every dev run and build.
 *
 * The SVG is the only source. Browsers that take SVG favicons use it directly; these PNGs
 * cover the rest: a 32px favicon and the 180px Apple touch icon. They are written as
 * static files next to the SVG because Next's generated icon routes lose the /woldui base
 * path in a static export, and a static file keeps it. They are build output, so they are
 * gitignored rather than committed, and cannot drift from the SVG.
 *
 * Next's own ImageResponse does the rendering, so no browser is needed.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createElement } from 'react';
import { ImageResponse } from 'next/og.js';

const app = path.join(path.dirname(path.dirname(fileURLToPath(import.meta.url))), 'app');
const svg = fs.readFileSync(path.join(app, 'icon.svg'), 'utf8');

async function render(size, file, { square = false } = {}) {
	// iOS rounds the touch icon itself; a pre-rounded one shows a light rim in each corner.
	const source = square ? svg.replace('rx="16"', 'rx="0"') : svg;
	const src = `data:image/svg+xml;base64,${Buffer.from(source).toString('base64')}`;
	const image = new ImageResponse(createElement('img', { src, width: size, height: size }), {
		width: size,
		height: size
	});
	fs.writeFileSync(path.join(app, file), Buffer.from(await image.arrayBuffer()));
}

await render(32, 'icon1.png');
await render(180, 'apple-icon.png', { square: true });
console.log('icons: rendered icon1.png and apple-icon.png from icon.svg');
