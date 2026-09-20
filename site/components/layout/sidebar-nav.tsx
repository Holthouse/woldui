'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@woldui/react/lib/utils';
import { nav } from '@/lib/nav';

/** The grouped docs navigation. Used in the desktop sidebar and inside the mobile sheet. */
export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
	const pathname = usePathname();
	const current = pathname.endsWith('/') ? pathname : `${pathname}/`;

	return (
		<nav aria-label="Documentation" className="flex flex-col gap-6 text-sm">
			{nav.map((group) => (
				<div key={group.title} className="flex flex-col gap-1">
					<h4 className="px-3 pb-1 text-xs font-semibold tracking-wide text-foreground">
						{group.title}
					</h4>
					{group.items.map((item) => {
						const active = current === item.href;
						return (
							<Link
								key={item.href}
								href={item.href}
								onClick={onNavigate}
								aria-current={active ? 'page' : undefined}
								className={cn(
									'flex items-center justify-between rounded-lg px-3 py-1.5 transition-colors',
									active
										? 'bg-primary-50 font-medium text-primary-text'
										: 'text-muted-foreground hover:bg-content2 hover:text-foreground'
								)}
							>
								{item.title}
								{item.flagship && (
									<span
										aria-hidden
										className="size-1.5 rounded-full bg-secondary"
										title="In depth"
									/>
								)}
							</Link>
						);
					})}
				</div>
			))}
		</nav>
	);
}
