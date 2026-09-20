'use client';

import * as React from 'react';
import { Button } from '@woldui/react/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@woldui/react/components/ui/tabs';

const steps = ['details', 'members', 'review'] as const;

export default function TabsControlled() {
	const [tab, setTab] = React.useState<string>('details');
	const index = steps.indexOf(tab as (typeof steps)[number]);

	return (
		<div className="flex flex-col items-center gap-4">
			<Tabs value={tab} onValueChange={setTab}>
				<TabsList>
					<TabsTrigger value="details">Details</TabsTrigger>
					<TabsTrigger value="members">Members</TabsTrigger>
					<TabsTrigger value="review">Review</TabsTrigger>
				</TabsList>
			</Tabs>
			<Button
				variant="flat"
				tone="primary"
				onClick={() => setTab(steps[(index + 1) % steps.length])}
			>
				Next step
			</Button>
		</div>
	);
}
