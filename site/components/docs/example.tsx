import fs from 'node:fs/promises';
import path from 'node:path';
import type * as React from 'react';
import { cn } from '@woldui/react/lib/utils';
import { CodeBlock } from './code-block';
import { ExampleTabs } from './example-tabs';

type ExampleProps = {
	/** The example's path under content/examples, without extension: "button/variants". */
	name: string;
	/** The rendered example — the default export of that same file. */
	children: React.ReactNode;
	/** Lay the preview out top-left instead of centred (tables, sidebars, long lists). */
	align?: 'center' | 'start';
	/** Give the preview more room. */
	tall?: boolean;
};

/**
 * One live example: the component running, and the exact file that renders it.
 *
 * The code shown is read from disk at build time, so it can never drift from what the
 * preview renders — both are the same file.
 */
export async function Example({ name, children, align = 'center', tall = false }: ExampleProps) {
	const source = await fs.readFile(
		path.join(process.cwd(), 'content', 'examples', `${name}.tsx`),
		'utf8'
	);
	return (
		<div className="not-prose my-6">
			<ExampleTabs
				preview={
					<div
						className={cn(
							'example-preview flex w-full flex-wrap gap-4 overflow-x-auto rounded-xl border border-border bg-background p-6 sm:p-10',
							align === 'center' ? 'items-center justify-center' : 'items-start justify-start',
							tall ? 'min-h-96' : 'min-h-48'
						)}
					>
						{children}
					</div>
				}
				code={<CodeBlock code={source} />}
			/>
		</div>
	);
}
