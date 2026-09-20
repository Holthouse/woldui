'use client';

import * as React from 'react';
import { Accessibility, Palette, Server, Wand2 } from 'lucide-react';
import { Badge } from '@woldui/react/components/ui/badge';
import { Button } from '@woldui/react/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@woldui/react/components/ui/card';
import { Input } from '@woldui/react/components/ui/input';
import { Reveal, Stagger } from '@woldui/react/lib/motion/primitives';

const palettes = [
	{ name: 'Blue', primary: undefined },
	{ name: 'Violet', primary: '#7c3aed' },
	{ name: 'Emerald', primary: '#059669' },
	{ name: 'Rose', primary: '#e11d48' }
];

function ThemeDemo() {
	const [active, setActive] = React.useState(0);
	const primary = palettes[active].primary;
	return (
		<div
			className="flex flex-col gap-4"
			style={primary ? ({ '--primary': primary } as React.CSSProperties) : undefined}
		>
			<div className="flex gap-2" role="radiogroup" aria-label="Primary colour">
				{palettes.map((p, i) => (
					<button
						key={p.name}
						role="radio"
						aria-checked={i === active}
						aria-label={p.name}
						onClick={() => setActive(i)}
						className="size-7 rounded-full ring-offset-2 ring-offset-background transition-transform hover:scale-110 aria-checked:ring-2 aria-checked:ring-foreground"
						style={{ backgroundColor: p.primary ?? '#006fee' }}
					/>
				))}
			</div>
			<div className="flex flex-wrap gap-2">
				<Button size="sm">Primary</Button>
				<Button size="sm" variant="bordered">
					Bordered
				</Button>
			</div>
		</div>
	);
}

function MotionDemo() {
	const [run, setRun] = React.useState(0);
	return (
		<div className="flex flex-col gap-3">
			<Stagger key={run} className="flex gap-2">
				{[0, 1, 2, 3, 4].map((i) => (
					<Reveal key={i}>
						<div className="size-9 rounded-xl bg-linear-to-br from-primary-300 to-secondary-400" />
					</Reveal>
				))}
			</Stagger>
			<Button size="sm" variant="flat" className="self-start" onClick={() => setRun((n) => n + 1)}>
				Replay stagger
			</Button>
		</div>
	);
}

function AccessibleDemo() {
	return (
		<div className="flex flex-col gap-3">
			<Input aria-label="Try tabbing here" placeholder="Press Tab to see the focus ring" />
			<div className="flex flex-wrap gap-1.5">
				<Badge variant="success">axe on every story</Badge>
				<Badge variant="primary">Radix keyboard support</Badge>
			</div>
		</div>
	);
}

const features = [
	{
		icon: Palette,
		title: 'Themeable to the core',
		description:
			'Every colour, radius, shadow and timing is a CSS variable. Change one and every component follows.',
		demo: <ThemeDemo />
	},
	{
		icon: Wand2,
		title: 'Motion that behaves',
		description:
			'Presses, ripples and springs — that collapse under reduced motion and never render invisible.',
		demo: <MotionDemo />
	},
	{
		icon: Accessibility,
		title: 'Accessible by design',
		description:
			'Radix handles keyboard and screen readers; a Field atom wires labels and errors for you.',
		demo: <AccessibleDemo />
	},
	{
		icon: Server,
		title: 'Ready for Next.js',
		description:
			"'use client' is kept on every client component, so WoldUI drops straight into server components.",
		demo: null
	}
];

/** The four feature cards, each with a small working demo. */
export function Features({ nextSnippet }: { nextSnippet: React.ReactNode }) {
	return (
		<div className="grid gap-5 md:grid-cols-2">
			{features.map((f) => (
				<Card key={f.title} className="shadow-[var(--elevation-small)]">
					<CardHeader>
						<div className="mb-2 grid size-10 place-items-center rounded-xl bg-primary-50 text-primary-text">
							<f.icon className="size-5" aria-hidden />
						</div>
						<CardTitle className="text-lg">{f.title}</CardTitle>
						<CardDescription>{f.description}</CardDescription>
					</CardHeader>
					<CardContent>{f.demo ?? nextSnippet}</CardContent>
				</Card>
			))}
		</div>
	);
}
