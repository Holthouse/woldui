'use client';

import { Field } from '@woldui/react/components/atoms/field';
import { Input } from '@woldui/react/components/ui/input';

export default function InputWithField() {
	return (
		<div className="grid w-full max-w-sm gap-4">
			<Field label="Display name" description="Shown to everyone in your workspace.">
				{(props) => <Input {...props} defaultValue="Alex Morgan" />}
			</Field>
			<Field label="Email" error="Enter a valid email address.">
				{(props) => <Input {...props} type="email" defaultValue="alex@example" />}
			</Field>
		</div>
	);
}
