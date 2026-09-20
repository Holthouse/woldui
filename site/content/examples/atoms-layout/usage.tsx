import { Inline, Stack } from '@woldui/react/components/atoms/layout';
import { Badge } from '@woldui/react/components/ui/badge';
import { Button } from '@woldui/react/components/ui/button';

export default function LayoutUsage() {
	return (
		<Stack gap="md" className="w-full max-w-md rounded-lg border border-border p-4">
			<Inline justify="between">
				<span className="text-sm font-medium">Website redesign</span>
				<Badge variant="success">On track</Badge>
			</Inline>
			<p className="text-sm text-muted-foreground">
				New landing page, pricing and docs. Due at the end of the month.
			</p>
			<Inline gap="sm" justify="end">
				<Button size="sm" variant="light">
					Archive
				</Button>
				<Button size="sm">Open</Button>
			</Inline>
		</Stack>
	);
}
