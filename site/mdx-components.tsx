import type { MDXComponents } from 'mdx/types';
import type * as React from 'react';
import { Callout } from '@/components/docs/callout';
import { CodeBlock } from '@/components/docs/code-block';
import { DocHeader } from '@/components/docs/doc-header';
import { Example } from '@/components/docs/example';
import { PropsTable } from '@/components/docs/props-table';
import type { Lang } from '@/components/docs/highlight';
import { slugify, textOf } from '@/lib/slug';

/** h2/h3 get an id and a hover anchor, which is also what the "On this page" list reads. */
function heading(Tag: 'h2' | 'h3') {
	return function Heading({ children }: { children?: React.ReactNode }) {
		const id = slugify(textOf(children));
		return (
			<Tag id={id} className="group scroll-mt-24">
				<a href={`#${id}`} className="text-foreground! no-underline">
					{children}
					<span
						aria-hidden
						className="ml-2 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
					>
						#
					</span>
				</a>
			</Tag>
		);
	};
}

/** Fenced code in MDX arrives as <pre><code class="language-x">…</code></pre>. */
function Pre({ children }: { children?: React.ReactNode }) {
	const code = children as React.ReactElement<{ className?: string; children?: string }>;
	const lang = (code?.props?.className?.replace('language-', '') ?? 'tsx') as Lang;
	return <CodeBlock code={textOf(code?.props?.children)} lang={lang} />;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h2: heading('h2'),
		h3: heading('h3'),
		pre: Pre,
		Callout,
		DocHeader,
		Example,
		PropsTable,
		...components
	};
}
