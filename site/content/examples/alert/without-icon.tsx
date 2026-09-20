import { Alert, AlertDescription, AlertTitle } from '@woldui/react/components/ui/alert';

export default function AlertWithoutIcon() {
	return (
		<Alert tone="warning" className="max-w-md">
			<AlertTitle>Scheduled maintenance</AlertTitle>
			<AlertDescription>
				Workspaces will be read-only on Sunday between 02:00 and 03:00 UTC.
			</AlertDescription>
		</Alert>
	);
}
