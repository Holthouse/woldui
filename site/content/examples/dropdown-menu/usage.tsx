import { Button } from '@woldui/react/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger
} from '@woldui/react/components/ui/dropdown-menu';

export default function DropdownMenuUsage() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="bordered">Project</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-48">
				<DropdownMenuLabel>Website redesign</DropdownMenuLabel>
				<DropdownMenuGroup>
					<DropdownMenuItem>
						Rename <DropdownMenuShortcut>Ctrl R</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>Duplicate</DropdownMenuItem>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>Export</DropdownMenuSubTrigger>
						<DropdownMenuSubContent>
							<DropdownMenuItem>CSV</DropdownMenuItem>
							<DropdownMenuItem>JSON</DropdownMenuItem>
						</DropdownMenuSubContent>
					</DropdownMenuSub>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
