import { Stack } from '@woldui/react/components/atoms/layout';

const gaps = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export default function LayoutStack() {
	return (
		<div className="flex flex-wrap items-start gap-6">
			{gaps.map((gap) => (
				<Stack key={gap} gap="xs" align="center">
					<code className="text-xs text-muted-foreground">gap=&quot;{gap}&quot;</code>
					<Stack gap={gap}>
						<div className="rounded-md bg-secondary px-3 py-2 text-xs text-secondary-foreground">
							One
						</div>
						<div className="rounded-md bg-secondary px-3 py-2 text-xs text-secondary-foreground">
							Two
						</div>
					</Stack>
				</Stack>
			))}
		</div>
	);
}
