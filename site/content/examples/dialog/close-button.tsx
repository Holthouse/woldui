import { Button } from '@woldui/react/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@woldui/react/components/ui/dialog';

export default function DialogCloseButton() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="bordered">What&rsquo;s new</Button>
			</DialogTrigger>
			{/* No corner ✕: the footer's Close button is the only way out besides Escape. */}
			<DialogContent showCloseButton={false}>
				<DialogHeader>
					<DialogTitle>What&rsquo;s new</DialogTitle>
					<DialogDescription>
						Projects can now be pinned to the top of the sidebar, and notifications group by team.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter showCloseButton />
			</DialogContent>
		</Dialog>
	);
}
