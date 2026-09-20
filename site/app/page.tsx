import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@woldui/react/components/ui/button';
import { CodeBlock } from '@/components/docs/code-block';
import { Features } from '@/components/landing/features';
import { Hero } from '@/components/landing/hero';
import { InView } from '@/components/landing/in-view';
import { Showcase } from '@/components/landing/showcase';
import { VariantGrid } from '@/components/landing/variant-grid';

const nextSnippet = `// app/page.tsx — a server component
import { Button } from '@woldui/react/components/ui/button';

export default function Page() {
  return <Button>Ships as a client island</Button>;
}`;

function SectionHeading({
	eyebrow,
	title,
	description
}: {
	eyebrow: string;
	title: string;
	description: string;
}) {
	return (
		<div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
			<p className="text-sm font-semibold text-secondary-text">{eyebrow}</p>
			<h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h2>
			<p className="text-balance text-muted-foreground">{description}</p>
		</div>
	);
}

export default function Home() {
	return (
		<main className="overflow-hidden">
			<section className="relative isolate px-4 pt-20 pb-16 sm:px-6 sm:pt-28">
				<div
					aria-hidden
					className="hero-glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem]"
				/>
				<div aria-hidden className="bg-grid pointer-events-none absolute inset-0 -z-10" />
				<div className="mx-auto flex max-w-6xl flex-col items-center gap-16">
					<Hero install={<CodeBlock code="pnpm add @woldui/react" lang="bash" />} />
					<Showcase />
				</div>
			</section>

			<section className="px-4 py-20 sm:px-6">
				<InView className="mx-auto flex max-w-6xl flex-col gap-12">
					<SectionHeading
						eyebrow="Why WoldUI"
						title="Everything a product UI needs, finished"
						description="Sixty-plus components that look right out of the box and behave right under a keyboard, a screen reader or reduced motion."
					/>
					<Features nextSnippet={<CodeBlock code={nextSnippet} />} />
				</InView>
			</section>

			<section className="px-4 py-20 sm:px-6">
				<InView className="mx-auto flex max-w-6xl flex-col gap-12">
					<SectionHeading
						eyebrow="Variants"
						title="Every shape, in every tone"
						description="Two independent axes — variant and tone — give each button the full HeroUI range. Press one."
					/>
					<VariantGrid />
				</InView>
			</section>

			<section className="px-4 pt-10 pb-28 sm:px-6">
				<InView className="relative isolate mx-auto flex max-w-4xl flex-col items-center gap-6 overflow-hidden rounded-3xl border border-border bg-content1 px-6 py-16 text-center shadow-[var(--elevation-medium)]">
					<div
						aria-hidden
						className="hero-glow pointer-events-none absolute inset-0 -z-10 opacity-70"
					/>
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Start building</h2>
					<p className="max-w-xl text-muted-foreground">
						Install the package, import the theme, and use your first component in under a minute.
					</p>
					<Button asChild size="lg" variant="shadow">
						<Link href="/docs/installation/">
							Read the installation guide <ArrowRight aria-hidden />
						</Link>
					</Button>
				</InView>
			</section>
		</main>
	);
}
