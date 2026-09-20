'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { neighbours } from '@/lib/nav';

/** Previous / next links at the foot of every docs page, in sidebar order. */
export function Pager() {
	const pathname = usePathname();
	const { previous, next } = neighbours(pathname.endsWith('/') ? pathname : `${pathname}/`);
	return (
		<div className="mt-16 flex items-center justify-between gap-4 border-t border-border pt-6 text-sm">
			{previous ? (
				<Link
					href={previous.href}
					className="group flex items-center gap-1 text-muted-foreground hover:text-foreground"
				>
					<ChevronLeft
						className="size-4 transition-transform group-hover:-translate-x-0.5"
						aria-hidden
					/>
					{previous.title}
				</Link>
			) : (
				<span />
			)}
			{next && (
				<Link
					href={next.href}
					className="group flex items-center gap-1 text-muted-foreground hover:text-foreground"
				>
					{next.title}
					<ChevronRight
						className="size-4 transition-transform group-hover:translate-x-0.5"
						aria-hidden
					/>
				</Link>
			)}
		</div>
	);
}
