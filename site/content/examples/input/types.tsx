import { Input } from '@woldui/react/components/ui/input';
import { Label } from '@woldui/react/components/ui/label';

export default function InputTypes() {
	return (
		<div className="grid w-full max-w-sm gap-4">
			<div className="flex flex-col gap-2">
				<Label htmlFor="input-email">Email</Label>
				<Input id="input-email" type="email" autoComplete="email" placeholder="you@example.com" />
			</div>
			<div className="flex flex-col gap-2">
				<Label htmlFor="input-password">Password</Label>
				<Input id="input-password" type="password" autoComplete="current-password" />
			</div>
			<div className="flex flex-col gap-2">
				<Label htmlFor="input-seats">Seats</Label>
				<Input id="input-seats" type="number" min={1} max={50} defaultValue={5} />
			</div>
			<div className="flex flex-col gap-2">
				<Label htmlFor="input-avatar">Avatar</Label>
				<Input id="input-avatar" type="file" accept="image/*" />
			</div>
		</div>
	);
}
