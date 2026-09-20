'use client'; // Field's children is a function, which only a client component can pass.

import { Field } from '@woldui/react/components/atoms/field';
import { Input } from '@woldui/react/components/ui/input';

export default function FieldDescription() {
	return (
		<Field
			label="Project URL"
			description="Lowercase letters, numbers and dashes. Shown to everyone on the project."
			className="w-full max-w-sm"
		>
			{(props) => <Input {...props} placeholder="website-redesign" />}
		</Field>
	);
}
