import { Button } from '@woldui/react/components/ui/button';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from '@woldui/react/components/ui/drawer';

export default function DrawerUsage() {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="bordered">Notification settings</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className="mx-auto w-full max-w-sm">
					<DrawerHeader>
						<DrawerTitle>Notifications</DrawerTitle>
						<DrawerDescription>
							Choose how often we email you about project activity.
						</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter>
						<Button>Save</Button>
						<DrawerClose asChild>
							<Button variant="bordered">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
