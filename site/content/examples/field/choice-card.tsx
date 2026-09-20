import {
	Field,
	FieldContent,
	FieldDescription,
	FieldLabel,
	FieldTitle
} from '@woldui/react/components/ui/field';
import { RadioGroup, RadioGroupItem } from '@woldui/react/components/ui/radio-group';

const plans = [
	{ value: 'team', title: 'Team', description: 'Up to 10 members and shared projects.' },
	{ value: 'business', title: 'Business', description: 'Unlimited members and audit logs.' }
];

export default function FieldChoiceCard() {
	return (
		<RadioGroup defaultValue="team" aria-label="Plan" className="max-w-sm">
			{plans.map((plan) => (
				<FieldLabel key={plan.value} htmlFor={`plan-${plan.value}`}>
					<Field orientation="horizontal">
						<FieldContent>
							<FieldTitle>{plan.title}</FieldTitle>
							<FieldDescription>{plan.description}</FieldDescription>
						</FieldContent>
						<RadioGroupItem value={plan.value} id={`plan-${plan.value}`} />
					</Field>
				</FieldLabel>
			))}
		</RadioGroup>
	);
}
