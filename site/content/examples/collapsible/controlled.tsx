'use client';

import * as React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@woldui/react/components/ui/button';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from '@woldui/react/components/ui/collapsible';

export default function CollapsibleControlled() {
	const [open, setOpen] = React.useState(false);

	return (
		<Collapsible open={open} onOpenChange={setOpen} className="w-full max-w-sm">
			<CollapsibleTrigger asChild>
				<Button variant="bordered" size="sm">
					{open ? 'Hide' : 'Show'} advanced settings
					{open ? <ChevronUp aria-hidden /> : <ChevronDown aria-hidden />}
				</Button>
			</CollapsibleTrigger>
			<CollapsibleContent className="pt-3 text-sm text-muted-foreground">
				Webhooks, API tokens and data retention live here. Most projects never need to change them.
			</CollapsibleContent>
		</Collapsible>
	);
}
