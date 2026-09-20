'use client';

import * as React from 'react';
import { Info, X } from 'lucide-react';
import { Button } from '@woldui/react/components/ui/button';
import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@woldui/react/components/ui/alert';

export default function AlertDismissible() {
	const [open, setOpen] = React.useState(true);

	if (!open) {
		return (
			<Button variant="bordered" onClick={() => setOpen(true)}>
				Show the alert again
			</Button>
		);
	}

	return (
		<Alert tone="secondary" className="max-w-md pr-10">
			<AlertIcon>
				<Info />
			</AlertIcon>
			<AlertTitle>Invite your team</AlertTitle>
			<AlertDescription>Projects are more useful with a few collaborators.</AlertDescription>
			<Button
				size="icon-xs"
				variant="light"
				tone="secondary"
				aria-label="Dismiss"
				className="absolute top-2 right-2"
				onClick={() => setOpen(false)}
			>
				<X aria-hidden />
			</Button>
		</Alert>
	);
}
