import { Label } from '@woldui/react/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@woldui/react/components/ui/radio-group';

export default function RadioGroupHorizontal() {
	return (
		<RadioGroup
			defaultValue="comfortable"
			orientation="horizontal"
			aria-label="Density"
			className="flex w-fit gap-6"
		>
			<div className="flex items-center gap-2">
				<RadioGroupItem value="compact" id="density-compact" />
				<Label htmlFor="density-compact">Compact</Label>
			</div>
			<div className="flex items-center gap-2">
				<RadioGroupItem value="comfortable" id="density-comfortable" />
				<Label htmlFor="density-comfortable">Comfortable</Label>
			</div>
			<div className="flex items-center gap-2">
				<RadioGroupItem value="spacious" id="density-spacious" disabled />
				<Label htmlFor="density-spacious">Spacious</Label>
			</div>
		</RadioGroup>
	);
}
