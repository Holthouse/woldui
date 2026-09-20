import { Label } from '@woldui/react/components/ui/label';
import { Textarea } from '@woldui/react/components/ui/textarea';

export default function TextareaStates() {
	return (
		<div className="grid w-full max-w-sm gap-4">
			<div className="flex flex-col gap-2">
				<Label htmlFor="textarea-disabled">Release notes</Label>
				<Textarea
					id="textarea-disabled"
					defaultValue="Locked while the release is live."
					disabled
				/>
			</div>
			<div className="flex flex-col gap-2">
				<Label htmlFor="textarea-invalid">Description</Label>
				<Textarea
					id="textarea-invalid"
					aria-invalid
					aria-describedby="textarea-invalid-error"
					defaultValue="Too short"
				/>
				<p id="textarea-invalid-error" className="text-xs text-destructive">
					Write at least 20 characters.
				</p>
			</div>
		</div>
	);
}
