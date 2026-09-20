'use client'; // Field's children is a function, which only a client component can pass.

import { Field } from '@woldui/react/components/atoms/field';
import { Input } from '@woldui/react/components/ui/input';

export default function FieldError() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-6">
			<Field label="Email" error="Enter an email address, like name@example.com">
				{(props) => <Input {...props} type="email" defaultValue="maya@" />}
			</Field>
			{/* The error is described first, then the description. */}
			<Field
				label="Project URL"
				description="Lowercase letters, numbers and dashes."
				error="Must be at most 40 characters"
			>
				{(props) => (
					<Input {...props} defaultValue="website-redesign-for-the-autumn-launch-campaign" />
				)}
			</Field>
		</div>
	);
}
