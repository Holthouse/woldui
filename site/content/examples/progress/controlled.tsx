'use client';

import * as React from 'react';
import { Button } from '@woldui/react/components/ui/button';
import { Progress } from '@woldui/react/components/ui/progress';

export default function ProgressControlled() {
	const [value, setValue] = React.useState(40);

	return (
		<div className="flex w-full max-w-sm flex-col gap-3">
			<Progress value={value} aria-label="Onboarding progress" />
			<p className="text-xs text-muted-foreground">{value}% of onboarding complete</p>
			<div className="flex gap-2">
				<Button size="sm" variant="bordered" onClick={() => setValue((v) => Math.max(0, v - 20))}>
					Back
				</Button>
				<Button size="sm" variant="bordered" onClick={() => setValue((v) => Math.min(100, v + 20))}>
					Continue
				</Button>
			</div>
		</div>
	);
}
