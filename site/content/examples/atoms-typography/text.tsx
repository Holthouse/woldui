import { Text } from '@woldui/react/components/atoms/typography';

const sizes = ['xs', 'sm', 'base', 'lg', 'xl'] as const;

export default function TypographyText() {
	return (
		<div className="grid gap-6 sm:grid-cols-2">
			<div className="flex flex-col gap-2">
				{sizes.map((size) => (
					<Text key={size} size={size}>
						Text at size &quot;{size}&quot;
					</Text>
				))}
			</div>
			<div className="flex flex-col gap-2">
				<Text>Default tone.</Text>
				<Text tone="muted">Muted tone.</Text>
				<Text tone="destructive">Destructive tone.</Text>
				<Text as="span" size="xs" tone="muted">
					Rendered as a span.
				</Text>
			</div>
		</div>
	);
}
