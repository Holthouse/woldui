'use client'; // Field's children is a function, which only a client component can pass.

import { Field } from '@woldui/react/components/atoms/field';
import { Input } from '@woldui/react/components/ui/input';

export default function FieldUsage() {
	return (
		<Field label="Project name" className="w-full max-w-sm">
			{(props) => <Input {...props} placeholder="Website redesign" />}
		</Field>
	);
}
