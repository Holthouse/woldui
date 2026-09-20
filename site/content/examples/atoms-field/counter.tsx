'use client';

import * as React from 'react';
import { Field } from '@woldui/react/components/atoms/field';
import { Textarea } from '@woldui/react/components/ui/textarea';

const max = 120;

export default function FieldCounter() {
	const [value, setValue] = React.useState('Quarterly planning for the design team.');
	const over = value.length > max;

	return (
		<Field
			label="Description"
			description="Appears under the project name on the dashboard."
			error={over ? `Must be at most ${max} characters` : undefined}
			adornment={
				<span
					className={
						over
							? 'text-xs text-destructive tabular-nums'
							: 'text-xs text-muted-foreground tabular-nums'
					}
				>
					{value.length}/{max}
				</span>
			}
			className="w-full max-w-sm"
		>
			{(props) => (
				<Textarea {...props} value={value} onChange={(event) => setValue(event.target.value)} />
			)}
		</Field>
	);
}
