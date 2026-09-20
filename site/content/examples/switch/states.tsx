import { Label } from '@woldui/react/components/ui/label';
import { Switch } from '@woldui/react/components/ui/switch';

export default function SwitchStates() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center gap-3">
				<Switch id="switch-disabled-off" disabled />
				<Label htmlFor="switch-disabled-off">Disabled</Label>
			</div>
			<div className="flex items-center gap-3">
				<Switch id="switch-disabled-on" disabled defaultChecked />
				<Label htmlFor="switch-disabled-on">Disabled and on</Label>
			</div>
			<div className="flex items-center gap-3">
				<Switch id="switch-invalid" aria-invalid aria-describedby="switch-invalid-error" />
				<div className="flex flex-col gap-1">
					<Label htmlFor="switch-invalid">Accept the data processing terms</Label>
					<p id="switch-invalid-error" className="text-xs text-destructive">
						Required to continue.
					</p>
				</div>
			</div>
		</div>
	);
}
