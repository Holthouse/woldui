'use client';

// The chart primitives come from recharts; ChartContainer themes them with WoldUI tokens.
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import {
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig
} from '@woldui/react/components/ui/chart';

const data = [
	{ month: 'May', opened: 186, closed: 210 },
	{ month: 'Jun', opened: 305, closed: 280 },
	{ month: 'Jul', opened: 237, closed: 250 },
	{ month: 'Aug', opened: 173, closed: 220 },
	{ month: 'Sep', opened: 209, closed: 210 }
];

const config = {
	opened: { label: 'Opened', color: 'var(--chart-2)' },
	closed: { label: 'Closed', color: 'var(--chart-4)' }
} satisfies ChartConfig;

export default function ChartUsage() {
	return (
		<ChartContainer config={config} className="h-56 w-full max-w-xl">
			<BarChart accessibilityLayer data={data}>
				<CartesianGrid vertical={false} />
				<XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
				<ChartTooltip content={<ChartTooltipContent />} />
				<ChartLegend content={<ChartLegendContent />} />
				<Bar dataKey="opened" fill="var(--color-opened)" radius={4} />
				<Bar dataKey="closed" fill="var(--color-closed)" radius={4} />
			</BarChart>
		</ChartContainer>
	);
}
