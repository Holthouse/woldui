import { Inline, Stack } from '@woldui/react/components/atoms/layout';

const justifies = ['start', 'center', 'end', 'between'] as const;

export default function LayoutInline() {
	return (
		<Stack gap="sm" className="w-full max-w-md">
			{justifies.map((justify) => (
				<Inline key={justify} justify={justify} className="rounded-md border border-border p-2">
					<div className="rounded-md bg-secondary px-3 py-1 text-xs text-secondary-foreground">
						A
					</div>
					<div className="rounded-md bg-secondary px-3 py-1 text-xs text-secondary-foreground">
						justify=&quot;{justify}&quot;
					</div>
				</Inline>
			))}
		</Stack>
	);
}
