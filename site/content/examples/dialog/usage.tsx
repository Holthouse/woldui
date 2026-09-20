import { Button } from '@woldui/react/components/ui/button';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@woldui/react/components/ui/dialog';

export default function DialogUsage() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="bordered">Share project</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Share project</DialogTitle>
					<DialogDescription>
						Anyone on your team can view the project once it is shared.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant="bordered">Cancel</Button>
					</DialogClose>
					<DialogClose asChild>
						<Button>Share</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
