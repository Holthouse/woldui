import Link from 'next/link';

/** The WoldUI wordmark: a gradient tile and the name. */
export function Logo() {
	return (
		<Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
			<span
				aria-hidden
				className="grid size-7 place-items-center rounded-lg bg-linear-to-br from-primary to-secondary text-sm font-bold text-white shadow-[var(--elevation-small)]"
			>
				W
			</span>
			<span className="text-base">WoldUI</span>
		</Link>
	);
}
