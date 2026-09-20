import { Button } from '@woldui/react/components/ui/button';
import { Input } from '@woldui/react/components/ui/input';
import { Label } from '@woldui/react/components/ui/label';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@woldui/react/components/ui/sheet';

export default function SheetUsage() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="bordered">Edit profile</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Edit profile</SheetTitle>
					<SheetDescription>Your name is shown to everyone on your team.</SheetDescription>
				</SheetHeader>
				<div className="flex flex-col gap-2 px-6">
					<Label htmlFor="sheet-name">Name</Label>
					<Input id="sheet-name" defaultValue="Alex Morgan" />
				</div>
				<SheetFooter>
					<SheetClose asChild>
						<Button>Save changes</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
