'use client';

import * as React from 'react';
import {
	ContextMenu,
	ContextMenuCheckboxItem,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuLabel,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuSub,
	ContextMenuSubContent,
	ContextMenuSubTrigger,
	ContextMenuTrigger
} from '@woldui/react/components/ui/context-menu';

export default function ContextMenuUsage() {
	const [pinned, setPinned] = React.useState(true);

	return (
		<ContextMenu>
			<ContextMenuTrigger className="flex h-32 w-full max-w-sm items-center justify-center rounded-xl border border-dashed border-border text-sm text-muted-foreground">
				Right-click here
			</ContextMenuTrigger>
			<ContextMenuContent className="w-48">
				<ContextMenuLabel>Project</ContextMenuLabel>
				<ContextMenuItem>
					Open <ContextMenuShortcut>Ctrl O</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem>Rename</ContextMenuItem>
				<ContextMenuCheckboxItem checked={pinned} onCheckedChange={setPinned}>
					Pin to sidebar
				</ContextMenuCheckboxItem>
				<ContextMenuSub>
					<ContextMenuSubTrigger>Move to</ContextMenuSubTrigger>
					<ContextMenuSubContent>
						<ContextMenuItem>Design</ContextMenuItem>
						<ContextMenuItem>Engineering</ContextMenuItem>
					</ContextMenuSubContent>
				</ContextMenuSub>
				<ContextMenuSeparator />
				<ContextMenuItem variant="destructive">Delete</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	);
}
