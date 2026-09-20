import { Checkbox } from '@woldui/react/components/ui/checkbox';
import { Input } from '@woldui/react/components/ui/input';
import { Label } from '@woldui/react/components/ui/label';

export default function LabelUsage() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-4">
			<div className="flex flex-col gap-2">
				<Label htmlFor="label-team">Team name</Label>
				<Input id="label-team" placeholder="Platform" />
			</div>
			<div className="flex items-center gap-2">
				<Checkbox id="label-private" />
				<Label htmlFor="label-private">Make this team private</Label>
			</div>
		</div>
	);
}
