import Link from 'next/link';
import { Badge } from '@woldui/react/components/ui/badge';
import pkg from '../../../package.json';
import { links } from '@/lib/nav';
import { Logo } from './logo';
import { MobileNav } from './mobile-nav';
import { GitHubMark } from './github-mark';
import { ThemeToggle } from './theme-toggle';

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
			<div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
				<MobileNav />
				<Logo />
				<Badge variant="secondary" className="hidden font-mono sm:inline-flex">
					v{pkg.version}
				</Badge>
				<nav aria-label="Main" className="ml-4 hidden items-center gap-6 text-sm md:flex">
					<Link
						href="/docs/"
						className="text-muted-foreground transition-colors hover:text-foreground"
					>
						Docs
					</Link>
					<Link
						href="/docs/components/button/"
						className="text-muted-foreground transition-colors hover:text-foreground"
					>
						Components
					</Link>
				</nav>
				<div className="ml-auto flex items-center gap-1">
					<a
						href={links.github}
						target="_blank"
						rel="noreferrer"
						aria-label="WoldUI on GitHub"
						className="grid size-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-content2 hover:text-foreground"
					>
						<GitHubMark className="size-4.5" />
					</a>
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
}
