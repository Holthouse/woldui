import { OctagonAlert } from 'lucide-react';
import { Button } from '@woldui/react/components/ui/button';
import {
	Alert,
	AlertAction,
	AlertDescription,
	AlertIcon,
	AlertTitle
} from '@woldui/react/components/ui/alert';

export default function AlertWithAction() {
	return (
		<Alert tone="danger" className="max-w-md">
			<AlertIcon>
				<OctagonAlert />
			</AlertIcon>
			<AlertTitle>Sync failed</AlertTitle>
			<AlertDescription>Three files in Design review could not be uploaded.</AlertDescription>
			<AlertAction>
				<Button size="sm" variant="flat" tone="danger">
					Try again
				</Button>
				<Button size="sm" variant="light" tone="danger">
					View files
				</Button>
			</AlertAction>
		</Alert>
	);
}
