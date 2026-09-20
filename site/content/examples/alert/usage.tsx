import { Info } from 'lucide-react';
import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@woldui/react/components/ui/alert';

export default function AlertUsage() {
	return (
		<Alert tone="primary" className="max-w-md">
			<AlertIcon>
				<Info />
			</AlertIcon>
			<AlertTitle>A new version is available</AlertTitle>
			<AlertDescription>Reload the page to get the latest features and fixes.</AlertDescription>
		</Alert>
	);
}
