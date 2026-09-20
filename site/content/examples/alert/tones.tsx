import { CheckCircle2, Info, OctagonAlert, TriangleAlert } from 'lucide-react';
import { Alert, AlertIcon, AlertTitle } from '@woldui/react/components/ui/alert';

const alerts = [
	['default', Info, 'This is a default alert'],
	['primary', Info, 'This is a primary alert'],
	['secondary', Info, 'This is a secondary alert'],
	['success', CheckCircle2, 'This is a success alert'],
	['warning', TriangleAlert, 'This is a warning alert'],
	['danger', OctagonAlert, 'This is a danger alert']
] as const;

export default function AlertTones() {
	return (
		<div className="flex w-full max-w-md flex-col gap-2">
			{alerts.map(([tone, Glyph, label]) => (
				<Alert key={tone} tone={tone}>
					<AlertIcon>
						<Glyph />
					</AlertIcon>
					<AlertTitle>{label}</AlertTitle>
				</Alert>
			))}
		</div>
	);
}
