'use client';

import * as React from 'react';
import {
	Menubar,
	MenubarCheckboxItem,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger
} from '@woldui/react/components/ui/menubar';

export default function MenubarUsage() {
	const [showSidebar, setShowSidebar] = React.useState(true);

	return (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>File</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						New project <MenubarShortcut>Ctrl N</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						Open… <MenubarShortcut>Ctrl O</MenubarShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>Export…</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Edit</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						Undo <MenubarShortcut>Ctrl Z</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						Redo <MenubarShortcut>Ctrl Y</MenubarShortcut>
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>View</MenubarTrigger>
				<MenubarContent>
					<MenubarCheckboxItem checked={showSidebar} onCheckedChange={setShowSidebar}>
						Sidebar
					</MenubarCheckboxItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
}
