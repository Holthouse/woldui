import { ChevronsUpDown } from 'lucide-react';
import { Button } from '@woldui/react/components/ui/button';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from '@woldui/react/components/ui/collapsible';

export default function CollapsibleUsage() {
	return (
		<Collapsible className="flex w-full max-w-xs flex-col gap-2">
			<div className="flex items-center justify-between gap-4">
				<span className="text-sm font-medium">3 linked repositories</span>
				<CollapsibleTrigger asChild>
					<Button variant="light" size="icon-sm" aria-label="Show all repositories">
						<ChevronsUpDown aria-hidden />
					</Button>
				</CollapsibleTrigger>
			</div>
			<div className="rounded-md border border-border px-3 py-2 font-mono text-xs">
				woldui/react
			</div>
			<CollapsibleContent className="flex flex-col gap-2">
				<div className="rounded-md border border-border px-3 py-2 font-mono text-xs">
					woldui/site
				</div>
				<div className="rounded-md border border-border px-3 py-2 font-mono text-xs">
					woldui/icons
				</div>
			</CollapsibleContent>
		</Collapsible>
	);
}
