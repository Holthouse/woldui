/**
 * Serves the static export in out/ under /woldui, the way GitHub Pages serves it, so the
 * built site can be checked locally before it deploys. `next start` can't do this for a
 * static export.
 *
 * Usage: pnpm --filter woldui-site preview  (after a build)
 */

import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const out = path.join(path.dirname(path.dirname(fileURLToPath(import.meta.url))), 'out');
const base = '/woldui';
const port = Number(process.env.PORT ?? 3200);

const types = {
	'.html': 'text/html; charset=utf-8',
	'.js': 'text/javascript',
	'.css': 'text/css',
	'.json': 'application/json',
	'.txt': 'text/plain; charset=utf-8',
	'.svg': 'image/svg+xml',
	'.png': 'image/png',
	'.ico': 'image/x-icon',
	'.woff2': 'font/woff2'
};

http
	.createServer((req, res) => {
		const url = decodeURIComponent((req.url ?? '/').split('?')[0]);
		if (url === '/' || url === '') {
			res.writeHead(302, { Location: `${base}/` }).end();
			return;
		}
		if (!url.startsWith(base)) {
			res.writeHead(404).end('Not found');
			return;
		}
		let file = path.join(out, url.slice(base.length));
		if (!file.startsWith(out)) {
			res.writeHead(403).end();
			return;
		}
		if (fs.existsSync(file) && fs.statSync(file).isDirectory())
			file = path.join(file, 'index.html');
		if (!fs.existsSync(file)) file = path.join(out, '404.html');
		res.writeHead(file.endsWith('404.html') ? 404 : 200, {
			'Content-Type': types[path.extname(file)] ?? 'application/octet-stream'
		});
		fs.createReadStream(file).pipe(res);
	})
	.listen(port, () => console.log(`Serving out/ at http://localhost:${port}${base}/`));
