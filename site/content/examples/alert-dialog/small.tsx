import { LogOut } from 'lucide-react';
import { Button } from '@woldui/react/components/ui/button';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogMedia,
	AlertDialogTitle,
	AlertDialogTrigger
} from '@woldui/react/components/ui/alert-dialog';

export default function AlertDialogSmall() {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant="bordered">Leave team</Button>
			</AlertDialogTrigger>
			<AlertDialogContent size="sm">
				<AlertDialogHeader>
					<AlertDialogMedia>
						<LogOut aria-hidden />
					</AlertDialogMedia>
					<AlertDialogTitle>Leave the design team?</AlertDialogTitle>
					<AlertDialogDescription>An admin can invite you back later.</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Stay</AlertDialogCancel>
					<AlertDialogAction>Leave</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
