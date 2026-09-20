import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@woldui/react/components/ui/card';

const sizes = ['default', 'sm'] as const;

export default function CardSizes() {
	return (
		<div className="flex flex-wrap items-start justify-center gap-4">
			{sizes.map((size) => (
				<Card key={size} size={size} className="w-56">
					<CardHeader>
						<CardTitle>size=&quot;{size}&quot;</CardTitle>
						<CardDescription>Spacing scales with the card.</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-2xl font-semibold tabular-nums">1,284</p>
						<p className="text-xs text-muted-foreground">Active users</p>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
