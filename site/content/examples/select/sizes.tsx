import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@woldui/react/components/ui/select';

const sizes = ['sm', 'default'] as const;

export default function SelectSizes() {
	return (
		<div className="flex flex-wrap items-center gap-3">
			{sizes.map((size) => (
				<Select key={size} defaultValue="week">
					<SelectTrigger size={size} aria-label={`Period, ${size} size`}>
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="day">Today</SelectItem>
						<SelectItem value="week">This week</SelectItem>
						<SelectItem value="month">This month</SelectItem>
					</SelectContent>
				</Select>
			))}
		</div>
	);
}
