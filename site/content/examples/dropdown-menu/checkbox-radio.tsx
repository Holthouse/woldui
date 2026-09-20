'use client';

import * as React from 'react';
import { Button } from '@woldui/react/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@woldui/react/components/ui/dropdown-menu';

export default function DropdownMenuCheckboxRadio() {
	const [showArchived, setShowArchived] = React.useState(false);
	const [showCompleted, setShowCompleted] = React.useState(true);
	const [density, setDensity] = React.useState('comfortable');

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="bordered">View</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-48">
				<DropdownMenuLabel>Show</DropdownMenuLabel>
				<DropdownMenuCheckboxItem checked={showArchived} onCheckedChange={setShowArchived}>
					Archived projects
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem checked={showCompleted} onCheckedChange={setShowCompleted}>
					Completed tasks
				</DropdownMenuCheckboxItem>
				<DropdownMenuSeparator />
				<DropdownMenuLabel>Density</DropdownMenuLabel>
				<DropdownMenuRadioGroup value={density} onValueChange={setDensity}>
					<DropdownMenuRadioItem value="comfortable">Comfortable</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="compact">Compact</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
