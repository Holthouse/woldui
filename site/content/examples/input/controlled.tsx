'use client';

import * as React from 'react';
import { Input } from '@woldui/react/components/ui/input';
import { Label } from '@woldui/react/components/ui/label';

const MAX = 32;

export default function InputControlled() {
	const [title, setTitle] = React.useState('Quarterly planning');

	return (
		<div className="flex w-full max-w-sm flex-col gap-2">
			<div className="flex items-baseline justify-between">
				<Label htmlFor="input-title">Board title</Label>
				<span id="input-title-count" className="text-xs text-muted-foreground">
					{title.length}/{MAX}
				</span>
			</div>
			<Input
				id="input-title"
				value={title}
				maxLength={MAX}
				aria-describedby="input-title-count"
				onChange={(event) => setTitle(event.target.value)}
			/>
		</div>
	);
}
