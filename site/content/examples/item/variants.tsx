import {
	Item,
	ItemContent,
	ItemDescription,
	ItemGroup,
	ItemTitle
} from '@woldui/react/components/ui/item';

const variants = ['default', 'outline', 'muted'] as const;
const sizes = ['default', 'sm', 'xs'] as const;

export default function ItemVariants() {
	return (
		<div className="grid w-full max-w-2xl gap-6 sm:grid-cols-2">
			<ItemGroup>
				{variants.map((variant) => (
					<Item key={variant} role="listitem" variant={variant}>
						<ItemContent>
							<ItemTitle>variant=&quot;{variant}&quot;</ItemTitle>
							<ItemDescription>Weekly sync with the design team</ItemDescription>
						</ItemContent>
					</Item>
				))}
			</ItemGroup>
			<ItemGroup>
				{sizes.map((size) => (
					<Item key={size} role="listitem" variant="outline" size={size}>
						<ItemContent>
							<ItemTitle>size=&quot;{size}&quot;</ItemTitle>
							<ItemDescription>Weekly sync with the design team</ItemDescription>
						</ItemContent>
					</Item>
				))}
			</ItemGroup>
		</div>
	);
}
