import { Input } from '@woldui/react/components/ui/input';
import { Label } from '@woldui/react/components/ui/label';

export default function InputStates() {
	return (
		<div className="grid w-full max-w-sm gap-4">
			<div className="flex flex-col gap-2">
				<Label htmlFor="input-disabled">Workspace ID</Label>
				<Input id="input-disabled" defaultValue="ws-4821" disabled />
			</div>
			<div className="flex flex-col gap-2">
				<Label htmlFor="input-readonly">Invite link</Label>
				<Input id="input-readonly" defaultValue="https://example.com/join/4821" readOnly />
			</div>
			<div className="flex flex-col gap-2">
				<Label htmlFor="input-invalid">Team handle</Label>
				<Input
					id="input-invalid"
					defaultValue="design team"
					aria-invalid
					aria-describedby="input-invalid-error"
				/>
				<p id="input-invalid-error" className="text-xs text-destructive">
					Handles cannot contain spaces.
				</p>
			</div>
		</div>
	);
}
