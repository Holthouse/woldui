'use client';

import type * as React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@woldui/react/components/ui/button';
import { Reveal, Stagger } from '@woldui/react/lib/motion/primitives';
import { links } from '@/lib/nav';
import { GitHubMark } from '@/components/layout/github-mark';

/** The headline, the two calls to action and the install line. */
export function Hero({ install }: { install: React.ReactNode }) {
	return (
		<Stagger className="flex flex-col items-center gap-6 text-center">
			<Reveal>
				<a
					href={links.npm}
					className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
				>
					<Sparkles className="size-3.5 text-secondary" aria-hidden />
					@woldui/react is on npm
					<ArrowRight className="size-3" aria-hidden />
				</a>
			</Reveal>
			<Reveal>
				<h1 className="max-w-4xl text-5xl leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
					Beautiful by default.
					<br />
					<span className="bg-linear-to-r from-primary via-secondary to-danger bg-clip-text text-transparent">
						Accessible by design.
					</span>
				</h1>
			</Reveal>
			<Reveal>
				<p className="max-w-2xl text-lg text-balance text-muted-foreground">
					A React design system with HeroUI&rsquo;s original v2 look — soft radii, tonal colours and
					springy motion — built on shadcn/ui and Radix, for Tailwind CSS v4 and Next.js.
				</p>
			</Reveal>
			<Reveal className="flex flex-wrap items-center justify-center gap-3">
				<Button asChild size="lg" variant="shadow">
					<Link href="/docs/">
						Get started <ArrowRight aria-hidden />
					</Link>
				</Button>
				<Button asChild size="lg" variant="bordered" tone="default">
					<a href={links.github}>
						<GitHubMark className="size-4" /> GitHub
					</a>
				</Button>
			</Reveal>
			<Reveal className="w-full max-w-sm text-left">{install}</Reveal>
		</Stagger>
	);
}
