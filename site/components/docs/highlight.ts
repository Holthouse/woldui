/**
 * Syntax highlighting, run at build time in server components — no highlighter ships to the
 * browser. Both themes are rendered into CSS variables at once, and globals.css picks the
 * dark set under `.dark`, so switching theme needs no re-highlight.
 */

import { createHighlighter, type Highlighter } from 'shiki';

let highlighter: Promise<Highlighter> | undefined;

export type Lang = 'tsx' | 'ts' | 'bash' | 'css' | 'json';

export async function highlight(code: string, lang: Lang = 'tsx'): Promise<string> {
	highlighter ??= createHighlighter({
		themes: ['github-light', 'github-dark'],
		langs: ['tsx', 'ts', 'bash', 'css', 'json']
	});
	return (await highlighter).codeToHtml(code.trimEnd(), {
		lang,
		themes: { light: 'github-light', dark: 'github-dark' },
		defaultColor: false
	});
}
