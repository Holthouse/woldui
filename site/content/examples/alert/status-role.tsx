import { CheckCircle2 } from 'lucide-react';
import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@woldui/react/components/ui/alert';

export default function AlertStatusRole() {
	return (
		// Not urgent: a polite live region instead of the default role="alert".
		<Alert tone="success" role="status" className="max-w-md">
			<AlertIcon>
				<CheckCircle2 />
			</AlertIcon>
			<AlertTitle>Settings saved</AlertTitle>
			<AlertDescription>Your notification preferences apply from now on.</AlertDescription>
		</Alert>
	);
}
