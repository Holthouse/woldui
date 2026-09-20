import { Label } from '@woldui/react/components/ui/label';
import { Switch } from '@woldui/react/components/ui/switch';

export default function SwitchSizes() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center gap-3">
				<Switch id="switch-size-sm" size="sm" defaultChecked />
				<Label htmlFor="switch-size-sm">Small</Label>
			</div>
			<div className="flex items-center gap-3">
				<Switch id="switch-size-default" defaultChecked />
				<Label htmlFor="switch-size-default">Default</Label>
			</div>
		</div>
	);
}
