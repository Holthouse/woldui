import { ChevronRight, Settings } from 'lucide-react';
import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemMedia,
	ItemTitle
} from '@woldui/react/components/ui/item';

export default function ItemAsLink() {
	return (
		<Item asChild variant="outline" className="max-w-md">
			<a href="#as-a-link">
				<ItemMedia variant="icon">
					<Settings aria-hidden />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Workspace settings</ItemTitle>
					<ItemDescription>Members, billing contacts and integrations</ItemDescription>
				</ItemContent>
				<ItemActions>
					<ChevronRight className="size-4" aria-hidden />
				</ItemActions>
			</a>
		</Item>
	);
}
