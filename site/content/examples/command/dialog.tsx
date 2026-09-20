'use client';

import * as React from 'react';
import { Button } from '@woldui/react/components/ui/button';
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList
} from '@woldui/react/components/ui/command';
import { Kbd, KbdGroup } from '@woldui/react/components/ui/kbd';

export default function CommandDialogExample() {
	const [open, setOpen] = React.useState(false);

	// Ctrl+K (Cmd+K on a Mac) toggles the palette from anywhere on the page.
	React.useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if (event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey)) {
				event.preventDefault();
				setOpen((value) => !value);
			}
		}
		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, []);

	return (
		<>
			<Button variant="bordered" onClick={() => setOpen(true)}>
				Search
				<KbdGroup>
					<Kbd>Ctrl</Kbd>
					<Kbd>K</Kbd>
				</KbdGroup>
			</Button>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="Search…" />
				<CommandList>
					<CommandEmpty>No results.</CommandEmpty>
					<CommandGroup heading="Go to">
						<CommandItem onSelect={() => setOpen(false)}>Projects</CommandItem>
						<CommandItem onSelect={() => setOpen(false)}>Team</CommandItem>
						<CommandItem onSelect={() => setOpen(false)}>Settings</CommandItem>
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
}
