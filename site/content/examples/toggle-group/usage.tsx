import { ToggleGroup, ToggleGroupItem } from '@woldui/react/components/ui/toggle-group';

export default function ToggleGroupUsage() {
	return (
		<ToggleGroup type="single" defaultValue="month" variant="outline" aria-label="Period">
			<ToggleGroupItem value="week">Week</ToggleGroupItem>
			<ToggleGroupItem value="month">Month</ToggleGroupItem>
			<ToggleGroupItem value="year">Year</ToggleGroupItem>
		</ToggleGroup>
	);
}
