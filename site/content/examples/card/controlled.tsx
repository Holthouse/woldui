'use client';

import * as React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@woldui/react/components/ui/card';
import { Label } from '@woldui/react/components/ui/label';
import { Switch } from '@woldui/react/components/ui/switch';

const channels = [
	{ id: 'mentions', label: 'Mentions' },
	{ id: 'comments', label: 'Comments on my tasks' },
	{ id: 'digest', label: 'Weekly digest' }
];

export default function CardControlled() {
	const [enabled, setEnabled] = React.useState<Record<string, boolean>>({ mentions: true });
	const count = channels.filter((c) => enabled[c.id]).length;

	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>Email notifications</CardTitle>
				<CardDescription>Choose what lands in your inbox.</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				{channels.map((channel) => (
					<div key={channel.id} className="flex items-center justify-between gap-4">
						<Label htmlFor={`notify-${channel.id}`}>{channel.label}</Label>
						<Switch
							id={`notify-${channel.id}`}
							checked={Boolean(enabled[channel.id])}
							onCheckedChange={(on) => setEnabled((prev) => ({ ...prev, [channel.id]: on }))}
						/>
					</div>
				))}
			</CardContent>
			<CardFooter className="border-t text-xs text-muted-foreground">
				{count} of {channels.length} enabled
			</CardFooter>
		</Card>
	);
}
