'use client';

import * as React from 'react';
import { Calendar } from '@woldui/react/components/ui/calendar';

export default function CalendarDropdown() {
	const [date, setDate] = React.useState<Date | undefined>(new Date(2026, 8, 15));

	return (
		<Calendar
			mode="single"
			selected={date}
			onSelect={setDate}
			captionLayout="dropdown"
			defaultMonth={new Date(2026, 8, 1)}
			startMonth={new Date(2020, 0, 1)}
			endMonth={new Date(2030, 11, 1)}
			disabled={{ dayOfWeek: [0, 6] }}
			className="rounded-lg border border-border"
		/>
	);
}
