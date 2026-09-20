import type * as React from 'react';

/** The text content of a React node tree. */
export function textOf(node: React.ReactNode): string {
	if (node == null || typeof node === 'boolean') return '';
	if (typeof node === 'string' || typeof node === 'number') return String(node);
	if (Array.isArray(node)) return node.map(textOf).join('');
	if (typeof node === 'object' && 'props' in node) {
		return textOf((node.props as { children?: React.ReactNode }).children);
	}
	return '';
}

/** "Variants & tones" → "variants-tones", for heading anchors. */
export function slugify(text: string): string {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9\s-]/g, '')
		.trim()
		.replace(/\s+/g, '-');
}
