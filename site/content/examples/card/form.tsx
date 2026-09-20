'use client';

import { Field } from '@woldui/react/components/atoms/field';
import { Button } from '@woldui/react/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@woldui/react/components/ui/card';
import { Input } from '@woldui/react/components/ui/input';

export default function CardForm() {
	return (
		<Card className="w-full max-w-sm">
			<form className="contents" onSubmit={(event) => event.preventDefault()}>
				<CardHeader>
					<CardTitle>
						<h3>Create project</h3>
					</CardTitle>
					<CardDescription>You can change these later in settings.</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-4">
					<Field label="Name">
						{(props) => <Input {...props} placeholder="Website redesign" />}
					</Field>
					<Field label="Slug" description="Used in the project URL.">
						{(props) => <Input {...props} placeholder="website-redesign" />}
					</Field>
				</CardContent>
				<CardFooter className="justify-end gap-2">
					<Button type="button" variant="light">
						Cancel
					</Button>
					<Button type="submit">Create</Button>
				</CardFooter>
			</form>
		</Card>
	);
}
