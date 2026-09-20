import { Label } from '@woldui/react/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@woldui/react/components/ui/select';

export default function SelectStates() {
	return (
		<div className="grid w-full max-w-xs gap-4">
			<div className="flex flex-col gap-2">
				<Label htmlFor="select-region">Region</Label>
				<Select defaultValue="eu" disabled>
					<SelectTrigger id="select-region" className="w-full">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="eu">Europe</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className="flex flex-col gap-2">
				<Label htmlFor="select-plan">Plan</Label>
				<Select>
					<SelectTrigger
						id="select-plan"
						className="w-full"
						aria-invalid
						aria-describedby="select-plan-error"
					>
						<SelectValue placeholder="Pick a plan" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="free">Free</SelectItem>
						<SelectItem value="team">Team</SelectItem>
						<SelectItem value="enterprise" disabled>
							Enterprise (contact sales)
						</SelectItem>
					</SelectContent>
				</Select>
				<p id="select-plan-error" className="text-xs text-destructive">
					Choose a plan to continue.
				</p>
			</div>
		</div>
	);
}
