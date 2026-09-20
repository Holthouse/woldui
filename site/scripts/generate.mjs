/**
 * Builds generated/props.json: the props table data for every component page.
 *
 * react-docgen-typescript reads the library's own source (../src) with the library's
 * tsconfig. The filter keeps only props WoldUI itself declares — its own props and the cva
 * variant props (variant, tone, size) — and drops the hundreds a component inherits from
 * the DOM and from Radix, which each page links to instead.
 *
 * cva variants have no default in the type system, so defaults are read from each file's
 * `defaultVariants` block.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import docgen from 'react-docgen-typescript';

const site = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const root = path.dirname(site);

const ownDeclaration = (d) =>
	!d.fileName.includes('node_modules') || d.fileName.includes('class-variance-authority');

const parser = docgen.withCustomConfig(path.join(root, 'tsconfig.json'), {
	savePropValueAsString: true,
	shouldExtractLiteralValuesFromEnum: true,
	shouldRemoveUndefinedFromOptional: true,
	propFilter: (prop) => {
		const declarations = prop.declarations ?? [];
		return declarations.length === 0 || declarations.some(ownDeclaration);
	}
});

process.chdir(root);

const files = ['components/ui', 'components/atoms'].flatMap((dir) =>
	fs
		.readdirSync(path.join('src', dir))
		.filter((f) => f.endsWith('.tsx') && !f.includes('.stories.') && !f.includes('.test.'))
		.map((f) => path.join('src', dir, f))
);

/** Reads `defaultVariants: { a: "x", b: "y" }` blocks out of a source file. */
function defaultVariants(source) {
	const defaults = {};
	for (const block of source.matchAll(/defaultVariants:\s*{([^}]*)}/g)) {
		for (const pair of block[1].matchAll(/(\w+):\s*["']([^"']+)["']/g)) defaults[pair[1]] = pair[2];
	}
	return defaults;
}

/** A readable type: unions lose their null/undefined members, which say nothing to a reader. */
function typeLabel(type) {
	const members =
		type.name === 'enum' && Array.isArray(type.value)
			? type.value.map((v) => v.value)
			: (type.raw ?? type.name).split(' | ');
	return members.filter((v) => v !== 'null' && v !== 'undefined').join(' | ');
}

/** "src/components/ui/button.tsx" → "components/ui/button" */
const moduleId = (file) =>
	path
		.relative(root, file)
		.split(path.sep)
		.join('/')
		.replace(/^src\//, '')
		.replace(/\.tsx$/, '');

// One parse over every file shares a single TypeScript program. Parsing file by file
// rebuilt the program each time and took half a minute.
const out = {};
const defaultsByFile = new Map();
for (const doc of parser.parse(files)) {
	const file = path.resolve(root, doc.filePath);
	if (!defaultsByFile.has(file))
		defaultsByFile.set(file, defaultVariants(fs.readFileSync(file, 'utf8')));
	const defaults = defaultsByFile.get(file);
	out[`${moduleId(file)}#${doc.displayName}`] = Object.values(doc.props)
		.map((p) => ({
			name: p.name,
			type: typeLabel(p.type),
			default: p.defaultValue?.value ?? defaults[p.name] ?? null,
			required: p.required,
			description: p.description || ''
		}))
		.sort((a, b) => a.name.localeCompare(b.name));
}

fs.mkdirSync(path.join(site, 'generated'), { recursive: true });
fs.writeFileSync(
	path.join(site, 'generated', 'props.json'),
	JSON.stringify(out, null, '\t') + '\n'
);
console.log(`generate: props for ${Object.keys(out).length} exports from ${files.length} files`);
