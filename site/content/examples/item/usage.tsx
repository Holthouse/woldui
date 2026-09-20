import { FolderKanban, Users } from 'lucide-react';
import { Button } from '@woldui/react/components/ui/button';
import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemGroup,
	ItemMedia,
	ItemSeparator,
	ItemTitle
} from '@woldui/react/components/ui/item';

export default function ItemUsage() {
	return (
		// ItemGroup is a list, so each Item says it is a list item.
		<ItemGroup className="max-w-md">
			<Item role="listitem">
				<ItemMedia variant="icon">
					<FolderKanban aria-hidden />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Website redesign</ItemTitle>
					<ItemDescription>14 of 22 tasks done</ItemDescription>
				</ItemContent>
				<ItemActions>
					<Button size="sm" variant="bordered">
						Open
					</Button>
				</ItemActions>
			</Item>
			<ItemSeparator />
			<Item role="listitem">
				<ItemMedia variant="icon">
					<Users aria-hidden />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Hiring pipeline</ItemTitle>
					<ItemDescription>3 candidates waiting for review</ItemDescription>
				</ItemContent>
				<ItemActions>
					<Button size="sm" variant="bordered">
						Open
					</Button>
				</ItemActions>
			</Item>
		</ItemGroup>
	);
}
