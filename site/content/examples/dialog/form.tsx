'use client';

import * as React from 'react';
import { Field } from '@woldui/react/components/atoms/field';
import { Button } from '@woldui/react/components/ui/button';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@woldui/react/components/ui/dialog';
import { Input } from '@woldui/react/components/ui/input';

export default function DialogForm() {
	const [open, setOpen] = React.useState(false);
	const [error, setError] = React.useState<string>();

	function submit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const name = new FormData(event.currentTarget).get('name');
		if (!String(name ?? '').trim()) {
			setError('Name is required');
			return;
		}
		setError(undefined);
		setOpen(false);
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button>New project</Button>
			</DialogTrigger>
			<DialogContent>
				<form onSubmit={submit} noValidate className="grid gap-4">
					<DialogHeader>
						<DialogTitle>New project</DialogTitle>
						<DialogDescription>Give it a name your team will recognise.</DialogDescription>
					</DialogHeader>
					<Field label="Name" error={error}>
						{(props) => <Input {...props} name="name" placeholder="Website redesign" />}
					</Field>
					<DialogFooter>
						<DialogClose asChild>
							<Button type="button" variant="bordered">
								Cancel
							</Button>
						</DialogClose>
						<Button type="submit">Create</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
