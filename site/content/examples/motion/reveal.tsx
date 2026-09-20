'use client';

import * as React from 'react';
import { Button } from '@woldui/react/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@woldui/react/components/ui/card';
import { Reveal } from '@woldui/react/lib/motion/primitives';

export default function RevealExample() {
	// Changing the key remounts Reveal, which replays its entrance.
	const [run, setRun] = React.useState(0);

	return (
		<div className="flex w-full max-w-sm flex-col items-center gap-4">
			<Reveal key={run} className="w-full">
				<Card>
					<CardHeader>
						<CardTitle>Deploy finished</CardTitle>
						<CardDescription>Slides up and fades in, once, after mount.</CardDescription>
					</CardHeader>
				</Card>
			</Reveal>
			<Button variant="flat" onClick={() => setRun((n) => n + 1)}>
				Replay
			</Button>
		</div>
	);
}
