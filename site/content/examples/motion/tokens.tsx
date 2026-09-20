'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Switch } from '@woldui/react/components/ui/switch';
import { Label } from '@woldui/react/components/ui/label';
import { spring } from '@woldui/react/lib/motion/tokens';

/**
 * A bespoke animation still takes its timing from the tokens. Import motion directly only
 * for movement the primitives can't express, like this layout slide.
 */
export default function TokensExample() {
	const [on, setOn] = React.useState(false);

	return (
		<div className="flex w-full max-w-xs flex-col gap-4">
			<div className="flex h-14 items-center rounded-2xl bg-content2 p-2">
				<motion.div
					layout
					transition={spring.snappy}
					className={`size-10 rounded-xl bg-primary shadow-[var(--elevation-small)] ${on ? 'ml-auto' : ''}`}
				/>
			</div>
			<div className="flex items-center gap-2">
				<Switch id="slide" checked={on} onCheckedChange={setOn} />
				<Label htmlFor="slide">Slide with spring.snappy</Label>
			</div>
		</div>
	);
}
