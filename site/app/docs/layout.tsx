import type * as React from 'react';
import { Pager } from '@/components/layout/pager';
import { SidebarNav } from '@/components/layout/sidebar-nav';
import { Toc } from '@/components/layout/toc';

/** Sidebar, article and "On this page", HeroUI-docs style. */
export default function DocsLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="mx-auto flex max-w-7xl gap-10 px-4 sm:px-6">
			<aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-56 shrink-0 overflow-y-auto py-8 lg:block">
				<SidebarNav />
			</aside>
			<main className="min-w-0 flex-1 py-10">
				<article
					data-doc
					className="prose max-w-3xl prose-neutral dark:prose-invert prose-headings:scroll-mt-24 prose-headings:tracking-tight prose-a:text-primary-text prose-code:font-mono prose-code:text-[0.875em] prose-code:before:content-none prose-code:after:content-none"
				>
					{children}
				</article>
				<div className="max-w-3xl">
					<Pager />
				</div>
			</main>
			<aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-48 shrink-0 overflow-y-auto py-10 xl:block">
				<Toc />
			</aside>
		</div>
	);
}
