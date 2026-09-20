import { Button } from '@woldui/react/components/ui/button';
import { DirectionProvider } from '@woldui/react/components/ui/direction';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger
} from '@woldui/react/components/ui/dropdown-menu';

function Menu() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="bordered" size="sm">
					Open menu
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>Rename</DropdownMenuItem>
				<DropdownMenuSub>
					<DropdownMenuSubTrigger>Export</DropdownMenuSubTrigger>
					<DropdownMenuSubContent>
						<DropdownMenuItem>CSV</DropdownMenuItem>
						<DropdownMenuItem>PDF</DropdownMenuItem>
					</DropdownMenuSubContent>
				</DropdownMenuSub>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default function DirectionUsage() {
	return (
		<div className="flex flex-wrap gap-10">
			<DirectionProvider dir="ltr">
				<div dir="ltr" className="flex flex-col gap-1">
					<span className="font-mono text-xs text-muted-foreground">ltr</span>
					<Menu />
				</div>
			</DirectionProvider>
			<DirectionProvider dir="rtl">
				<div dir="rtl" className="flex flex-col gap-1">
					<span className="font-mono text-xs text-muted-foreground">rtl</span>
					<Menu />
				</div>
			</DirectionProvider>
		</div>
	);
}
