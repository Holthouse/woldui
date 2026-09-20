import type { Metadata } from 'next';
import type * as React from 'react';
import './globals.css';
import { Providers } from '@/components/layout/providers';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';

export const metadata: Metadata = {
	title: { default: 'WoldUI — Beautiful, accessible React components', template: '%s · WoldUI' },
	description:
		'A design system for React and Tailwind CSS v4 with a HeroUI-style look, built on shadcn/ui and Radix. Accessible by default, Next.js-ready.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning className="antialiased">
			<body className="flex min-h-screen flex-col">
				<Providers>
					<SiteHeader />
					<div className="flex-1">{children}</div>
					<SiteFooter />
				</Providers>
			</body>
		</html>
	);
}
