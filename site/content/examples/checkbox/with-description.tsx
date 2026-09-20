import { Checkbox } from '@woldui/react/components/ui/checkbox';
import {
	Field,
	FieldContent,
	FieldDescription,
	FieldLabel
} from '@woldui/react/components/ui/field';

export default function CheckboxWithDescription() {
	return (
		<Field orientation="horizontal" className="max-w-sm">
			<Checkbox id="checkbox-digest" aria-describedby="checkbox-digest-hint" defaultChecked />
			<FieldContent>
				<FieldLabel htmlFor="checkbox-digest">Weekly digest</FieldLabel>
				<FieldDescription id="checkbox-digest-hint">
					A summary of project activity, every Monday morning.
				</FieldDescription>
			</FieldContent>
		</Field>
	);
}
