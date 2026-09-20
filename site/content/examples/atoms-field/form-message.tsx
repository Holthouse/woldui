'use client';

import * as React from 'react';
import { Field } from '@woldui/react/components/atoms/field';
import { Button } from '@woldui/react/components/ui/button';
import { Input } from '@woldui/react/components/ui/input';

export default function FieldFormMessage() {
	const [name, setName] = React.useState('');
	const [error, setError] = React.useState<string>();
	const [message, setMessage] = React.useState<string>();

	function submit(event: React.FormEvent) {
		event.preventDefault();
		setError(name.trim() ? undefined : 'Enter a project name');
		// Stands in for the server: a refusal that belongs to no single field.
		setMessage(
			name.trim()
				? 'This workspace has reached its limit of 10 projects. Archive one to create another.'
				: undefined
		);
	}

	return (
		<form onSubmit={submit} noValidate className="flex w-full max-w-sm flex-col gap-4">
			<Field label="Project name" error={error} message={message}>
				{(props) => (
					<Input {...props} value={name} onChange={(event) => setName(event.target.value)} />
				)}
			</Field>
			<Button type="submit" className="self-start">
				Create project
			</Button>
		</form>
	);
}
