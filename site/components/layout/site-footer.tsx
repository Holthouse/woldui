import Link from 'next/link';
import { links } from '@/lib/nav';

export function SiteFooter() {
	return (
		<footer className="border-t border-border/60">
			<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
				<p>
					WoldUI is{' '}
					<a
						href={`${links.github}/blob/main/LICENSE`}
						className="underline underline-offset-4 hover:text-foreground"
					>
						MIT licensed
					</a>
					. Built on shadcn/ui and Radix, in HeroUI&rsquo;s visual language.
				</p>
				<div className="flex gap-5">
					<Link href="/docs/" className="hover:text-foreground">
						Docs
					</Link>
					<a href={links.github} className="hover:text-foreground">
						GitHub
					</a>
					<a href={links.npm} className="hover:text-foreground">
						npm
					</a>
				</div>
			</div>
		</footer>
	);
}
