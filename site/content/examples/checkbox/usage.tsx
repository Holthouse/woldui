import { Checkbox } from '@woldui/react/components/ui/checkbox';
import { Label } from '@woldui/react/components/ui/label';

export default function CheckboxUsage() {
	return (
		<div className="flex flex-col gap-3">
			<div className="flex items-center gap-2">
				<Checkbox id="checkbox-terms" defaultChecked />
				<Label htmlFor="checkbox-terms">Accept the terms</Label>
			</div>
			<div className="flex items-center gap-2">
				<Checkbox id="checkbox-updates" />
				<Label htmlFor="checkbox-updates">Send me product updates</Label>
			</div>
			<div className="flex items-center gap-2">
				<Checkbox id="checkbox-beta" disabled />
				<Label htmlFor="checkbox-beta">Join the beta (full)</Label>
			</div>
		</div>
	);
}
