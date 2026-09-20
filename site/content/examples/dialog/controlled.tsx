'use client';

import * as React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { Button } from '@woldui/react/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle
} from '@woldui/react/components/ui/dialog';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@woldui/react/components/ui/dropdown-menu';

export default function DialogControlled() {
	const [open, setOpen] = React.useState(false);

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button size="icon" variant="bordered" aria-label="Project actions">
						<MoreHorizontal aria-hidden />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem onSelect={() => setOpen(true)}>Project details…</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Project details</DialogTitle>
						<DialogDescription>Created on 15 September 2026 by the design team.</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button onClick={() => setOpen(false)}>Done</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
}
