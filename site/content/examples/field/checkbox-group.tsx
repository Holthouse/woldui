import { Checkbox } from '@woldui/react/components/ui/checkbox';
import {
	Field,
	FieldDescription,
	FieldGroup,
	FieldLabel,
	FieldLegend,
	FieldSet
} from '@woldui/react/components/ui/field';

const channels = [
	{ id: 'email', label: 'Email', checked: true },
	{ id: 'push', label: 'Push notifications', checked: true },
	{ id: 'sms', label: 'Text message', checked: false }
];

export default function FieldCheckboxGroup() {
	return (
		<FieldSet className="w-full max-w-sm">
			<FieldLegend variant="label">Channels</FieldLegend>
			<FieldDescription>Where we reach you about new comments.</FieldDescription>
			<FieldGroup data-slot="checkbox-group">
				{channels.map((channel) => (
					<Field key={channel.id} orientation="horizontal">
						<Checkbox id={`field-${channel.id}`} defaultChecked={channel.checked} />
						<FieldLabel htmlFor={`field-${channel.id}`}>{channel.label}</FieldLabel>
					</Field>
				))}
			</FieldGroup>
		</FieldSet>
	);
}
