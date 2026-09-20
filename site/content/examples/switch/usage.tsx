import { Label } from '@woldui/react/components/ui/label';
import { Switch } from '@woldui/react/components/ui/switch';

export default function SwitchUsage() {
	return (
		<div className="flex items-center gap-3">
			<Switch id="switch-dnd" />
			<Label htmlFor="switch-dnd">Do not disturb</Label>
		</div>
	);
}
