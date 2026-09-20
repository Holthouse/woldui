import { Label } from '@woldui/react/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@woldui/react/components/ui/radio-group';

const frequencies = [
	{ value: 'daily', label: 'Daily' },
	{ value: 'weekly', label: 'Weekly' },
	{ value: 'never', label: 'Never' }
];

export default function RadioGroupUsage() {
	return (
		<RadioGroup defaultValue="weekly" aria-label="Email frequency" className="w-fit">
			{frequencies.map((frequency) => (
				<div key={frequency.value} className="flex items-center gap-2">
					<RadioGroupItem value={frequency.value} id={`radio-${frequency.value}`} />
					<Label htmlFor={`radio-${frequency.value}`}>{frequency.label}</Label>
				</div>
			))}
		</RadioGroup>
	);
}
