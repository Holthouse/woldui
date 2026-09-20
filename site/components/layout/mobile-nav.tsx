'use client';

import * as React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@woldui/react/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@woldui/react/components/ui/sheet';
import { ScrollArea } from '@woldui/react/components/ui/scroll-area';
import { SidebarNav } from './sidebar-nav';

/** The docs navigation in a sheet, for screens too narrow for the sidebar. */
export function MobileNav() {
	const [open, setOpen] = React.useState(false);
	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button
					variant="light"
					tone="default"
					size="icon-sm"
					className="lg:hidden"
					aria-label="Open navigation"
				>
					<Menu aria-hidden />
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="w-72 p-0">
				<SheetHeader className="px-5 pt-5">
					<SheetTitle>WoldUI</SheetTitle>
				</SheetHeader>
				<ScrollArea className="h-[calc(100vh-5rem)] px-2 pb-8">
					<SidebarNav onNavigate={() => setOpen(false)} />
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
}
