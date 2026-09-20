import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldLegend,
	FieldSet
} from '@woldui/react/components/ui/field';
import { Input } from '@woldui/react/components/ui/input';
import { Switch } from '@woldui/react/components/ui/switch';

export default function FieldUsage() {
	return (
		<FieldSet className="w-full max-w-md">
			<FieldLegend>Notifications</FieldLegend>
			<FieldGroup>
				<Field orientation="horizontal">
					<FieldLabel htmlFor="field-mentions">Email me when I am mentioned</FieldLabel>
					<Switch id="field-mentions" defaultChecked />
				</Field>
				<Field data-invalid>
					<FieldLabel htmlFor="field-reply">Reply-to address</FieldLabel>
					<Input
						id="field-reply"
						type="email"
						aria-invalid
						aria-describedby="field-reply-hint field-reply-error"
						defaultValue="team@example"
					/>
					<FieldDescription id="field-reply-hint">Used only for notifications.</FieldDescription>
					<FieldError id="field-reply-error">Enter a valid email address.</FieldError>
				</Field>
			</FieldGroup>
		</FieldSet>
	);
}
