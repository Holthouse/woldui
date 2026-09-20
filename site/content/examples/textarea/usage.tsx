import { Label } from '@woldui/react/components/ui/label';
import { Textarea } from '@woldui/react/components/ui/textarea';

export default function TextareaUsage() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-2">
			<Label htmlFor="textarea-feedback">Feedback</Label>
			<Textarea id="textarea-feedback" placeholder="Tell us what you think…" rows={3} />
		</div>
	);
}
