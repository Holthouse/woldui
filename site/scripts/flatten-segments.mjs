/**
 * Writes the flattened copies of Next's per-segment prefetch files after a static export.
 *
 * Next 16 exports a nested route's segment data as folders:
 *   docs/components/button/__next.docs/components/button/__PAGE__.txt
 * but the client router prefetches the flattened name:
 *   docs/components/button/__next.docs.components.button.__PAGE__.txt
 * A plain static host (GitHub Pages) can't map one to the other, so every prefetch 404s
 * and navigation falls back to full page loads. Copying each file to its flattened name
 * makes both resolve.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const out = path.join(path.dirname(path.dirname(fileURLToPath(import.meta.url))), 'out');
let copied = 0;

function filesUnder(dir) {
	return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
		const full = path.join(dir, e.name);
		return e.isDirectory() ? filesUnder(full) : [full];
	});
}

function walk(dir) {
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		if (!entry.isDirectory()) continue;
		const full = path.join(dir, entry.name);
		if (entry.name.startsWith('__next.')) {
			for (const file of filesUnder(full)) {
				const flat = [entry.name, ...path.relative(full, file).split(path.sep)].join('.');
				const target = path.join(dir, flat);
				if (!fs.existsSync(target)) {
					fs.copyFileSync(file, target);
					copied++;
				}
			}
		} else {
			walk(full);
		}
	}
}

walk(out);
console.log(`flatten-segments: wrote ${copied} prefetch files`);
