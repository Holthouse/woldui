'use client';

import * as React from 'react';
import { Button } from '@woldui/react/components/ui/button';
import { Reveal, Stagger } from '@woldui/react/lib/motion/primitives';

const tasks = ['Design review', 'Write release notes', 'Update the changelog', 'Ship it'];

export default function StaggerExample() {
	const [run, setRun] = React.useState(0);

	return (
		<div className="flex w-full max-w-sm flex-col items-center gap-4">
			<Stagger key={run} as="ul" className="flex w-full flex-col gap-2">
				{tasks.map((task) => (
					<Reveal as="li" key={task}>
						<div className="rounded-xl border border-border bg-card px-4 py-3 text-sm shadow-[var(--elevation-small)]">
							{task}
						</div>
					</Reveal>
				))}
			</Stagger>
			<Button variant="flat" onClick={() => setRun((n) => n + 1)}>
				Replay
			</Button>
		</div>
	);
}
