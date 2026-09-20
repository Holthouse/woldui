import { Input } from '@woldui/react/components/ui/input';
import { Label } from '@woldui/react/components/ui/label';

export default function InputUsage() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-2">
			<Label htmlFor="input-project">Project name</Label>
			<Input id="input-project" placeholder="Website redesign" />
		</div>
	);
}
