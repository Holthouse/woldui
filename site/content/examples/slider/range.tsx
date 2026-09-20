'use client';

import * as React from 'react';
import { Label } from '@woldui/react/components/ui/label';
import { Slider } from '@woldui/react/components/ui/slider';

export default function SliderRange() {
	const [hours, setHours] = React.useState([9, 17]);

	return (
		<div className="flex w-full max-w-sm flex-col gap-3">
			<div className="flex items-baseline justify-between">
				<Label id="slider-hours-label">Working hours</Label>
				<span className="text-xs text-muted-foreground">
					{hours[0]}:00 to {hours[1]}:00
				</span>
			</div>
			<Slider
				value={hours}
				onValueChange={setHours}
				min={0}
				max={24}
				step={1}
				minStepsBetweenThumbs={1}
				aria-labelledby="slider-hours-label"
			/>
		</div>
	);
}
