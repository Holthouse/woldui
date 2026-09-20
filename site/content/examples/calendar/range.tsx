'use client';

import * as React from 'react';
import { Calendar } from '@woldui/react/components/ui/calendar';

type Range = { from: Date | undefined; to?: Date | undefined };

export default function CalendarRange() {
	const [range, setRange] = React.useState<Range | undefined>({
		from: new Date(2026, 8, 8),
		to: new Date(2026, 8, 19)
	});

	return (
		<Calendar
			mode="range"
			selected={range}
			onSelect={setRange}
			numberOfMonths={2}
			defaultMonth={new Date(2026, 8, 1)}
			className="rounded-lg border border-border"
		/>
	);
}
