import { Bubble, BubbleContent, BubbleGroup } from '@woldui/react/components/ui/bubble';

const variants = [
	'default',
	'secondary',
	'muted',
	'tinted',
	'outline',
	'ghost',
	'destructive'
] as const;

export default function BubbleVariants() {
	return (
		<BubbleGroup className="w-full max-w-sm">
			{variants.map((variant) => (
				<Bubble key={variant} variant={variant}>
					<BubbleContent className="capitalize">{variant}</BubbleContent>
				</Bubble>
			))}
		</BubbleGroup>
	);
}
