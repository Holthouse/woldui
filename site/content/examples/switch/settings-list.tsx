import {
	Field,
	FieldContent,
	FieldDescription,
	FieldGroup,
	FieldLabel
} from '@woldui/react/components/ui/field';
import { Switch } from '@woldui/react/components/ui/switch';

const settings = [
	{ id: 'comments', label: 'Comments', hint: 'When someone replies to you.', on: true },
	{ id: 'mentions', label: 'Mentions', hint: 'When someone tags you in a task.', on: true },
	{ id: 'digest', label: 'Weekly digest', hint: 'A summary every Monday.', on: false }
];

export default function SwitchSettingsList() {
	return (
		<FieldGroup className="max-w-sm">
			{settings.map((setting) => (
				<Field key={setting.id} orientation="horizontal">
					<FieldContent>
						<FieldLabel htmlFor={`switch-${setting.id}`}>{setting.label}</FieldLabel>
						<FieldDescription id={`switch-${setting.id}-hint`}>{setting.hint}</FieldDescription>
					</FieldContent>
					<Switch
						id={`switch-${setting.id}`}
						defaultChecked={setting.on}
						aria-describedby={`switch-${setting.id}-hint`}
					/>
				</Field>
			))}
		</FieldGroup>
	);
}
