import { FolderOpen, Plus, Settings } from 'lucide-react';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut
} from '@woldui/react/components/ui/command';

export default function CommandUsage() {
	return (
		<Command className="max-w-sm border border-border">
			<CommandInput placeholder="Type a command or search…" />
			<CommandList>
				<CommandEmpty>No results.</CommandEmpty>
				<CommandGroup heading="Projects">
					<CommandItem>
						<FolderOpen aria-hidden /> Website redesign
					</CommandItem>
					<CommandItem>
						<FolderOpen aria-hidden /> Mobile app
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading="Actions">
					<CommandItem>
						<Plus aria-hidden /> New project <CommandShortcut>Ctrl N</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<Settings aria-hidden /> Settings <CommandShortcut>Ctrl ,</CommandShortcut>
					</CommandItem>
				</CommandGroup>
			</CommandList>
		</Command>
	);
}
