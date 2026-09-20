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

export default function DrawerDirection() {
	return (
		<Drawer direction="right">
			<DrawerTrigger asChild>
				<Button variant="bordered">Open from the right</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Activity</DrawerTitle>
					<DrawerDescription>Swipe right, or press Escape, to close.</DrawerDescription>
				</DrawerHeader>
				<DrawerFooter>
					<DrawerClose asChild>
						<Button variant="bordered">Close</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
