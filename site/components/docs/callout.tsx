import type * as React from 'react';
import { Info, TriangleAlert } from 'lucide-react';
import { cn } from '@woldui/react/lib/utils';

/** A highlighted aside in the prose: a tip, or a warning about a sharp edge. */
export function Callout({
	tone = 'info',
	children
}: {
	tone?: 'info' | 'warning';
	children: React.ReactNode;
}) {
	const Icon = tone === 'warning' ? TriangleAlert : Info;
	return (
		<div
			className={cn(
				'not-prose my-6 flex gap-3 rounded-xl border px-4 py-3 text-sm [&_code]:font-mono [&_code]:text-[0.8125rem] [&_p]:leading-relaxed',
				tone === 'warning'
					? 'border-warning-200 bg-warning-50 text-warning-text'
					: 'border-primary-200 bg-primary-50 text-primary-text'
			)}
		>
			<Icon className="mt-0.5 size-4 shrink-0" aria-hidden />
			<div className="flex flex-col gap-2">{children}</div>
		</div>
	);
}
