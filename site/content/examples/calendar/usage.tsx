'use client';

import * as React from 'react';
import { Calendar } from '@woldui/react/components/ui/calendar';

export default function CalendarUsage() {
	const [date, setDate] = React.useState<Date | undefined>(new Date(2026, 8, 15));

	return (
		<Calendar
			mode="single"
			selected={date}
			onSelect={setDate}
			defaultMonth={new Date(2026, 8, 1)}
			className="rounded-lg border border-border"
		/>
	);
}
