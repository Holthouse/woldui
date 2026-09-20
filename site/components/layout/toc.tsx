'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@woldui/react/lib/utils';

type Entry = { id: string; text: string; level: 2 | 3 };

/**
 * "On this page": read from the rendered h2/h3 anchors after mount, and highlights the
 * section currently in view. Reading the DOM keeps every MDX page free of TOC plumbing.
 */
export function Toc() {
	const pathname = usePathname();
	const [entries, setEntries] = React.useState<Entry[]>([]);
	const [active, setActive] = React.useState<string>();

	React.useEffect(() => {
		const headings = Array.from(
			document.querySelectorAll<HTMLHeadingElement>('[data-doc] h2[id], [data-doc] h3[id]')
		);
		// The headings only exist in the DOM once the page has rendered, so they are read here,
		// after mount. The rule guards against deriving state an effect could compute during
		// render; this state cannot be computed during render.
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setEntries(
			headings.map((h) => ({
				id: h.id,
				text: h.textContent?.replace(/#$/, '').trim() ?? '',
				level: h.tagName === 'H2' ? 2 : 3
			}))
		);
		const observer = new IntersectionObserver(
			(seen) => {
				const visible = seen.filter((e) => e.isIntersecting);
				if (visible[0]) setActive(visible[0].target.id);
			},
			{ rootMargin: '-80px 0px -70% 0px' }
		);
		headings.forEach((h) => observer.observe(h));
		return () => observer.disconnect();
	}, [pathname]);

	if (entries.length === 0) return null;

	return (
		<nav aria-label="On this page" className="flex flex-col gap-2 text-sm">
			<p className="text-xs font-semibold text-foreground">On this page</p>
			{entries.map((e) => (
				<a
					key={e.id}
					href={`#${e.id}`}
					className={cn(
						'transition-colors',
						e.level === 3 && 'pl-3',
						active === e.id
							? 'font-medium text-primary-text'
							: 'text-muted-foreground hover:text-foreground'
					)}
				>
					{e.text}
				</a>
			))}
		</nav>
	);
}
