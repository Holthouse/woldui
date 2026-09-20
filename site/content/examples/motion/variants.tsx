'use client';

import * as React from 'react';
import { Button } from '@woldui/react/components/ui/button';
import { Reveal } from '@woldui/react/lib/motion/primitives';
import { fadeIn, scaleIn, slideUp } from '@woldui/react/lib/motion/variants';

const options = [
	{ name: 'slideUp', variants: slideUp },
	{ name: 'fadeIn', variants: fadeIn },
	{ name: 'scaleIn', variants: scaleIn }
];

export default function VariantsExample() {
	const [run, setRun] = React.useState(0);

	return (
		<div className="flex flex-col items-center gap-4">
			<div className="flex flex-wrap justify-center gap-3">
				{options.map(({ name, variants }) => (
					<Reveal key={`${name}-${run}`} variants={variants}>
						<div className="grid size-28 place-items-center rounded-2xl bg-primary-50 font-mono text-xs text-primary-text">
							{name}
						</div>
					</Reveal>
				))}
			</div>
			<Button variant="flat" onClick={() => setRun((n) => n + 1)}>
				Replay
			</Button>
		</div>
	);
}
