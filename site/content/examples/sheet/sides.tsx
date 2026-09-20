import { Button } from '@woldui/react/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@woldui/react/components/ui/sheet';

const sides = ['top', 'right', 'bottom', 'left'] as const;

export default function SheetSides() {
	return (
		<div className="flex flex-wrap gap-2">
			{sides.map((side) => (
				<Sheet key={side}>
					<SheetTrigger asChild>
						<Button variant="bordered" className="capitalize">
							{side}
						</Button>
					</SheetTrigger>
					<SheetContent side={side}>
						<SheetHeader>
							<SheetTitle className="capitalize">{side} sheet</SheetTitle>
							<SheetDescription>It slides in from the {side} edge of the screen.</SheetDescription>
						</SheetHeader>
					</SheetContent>
				</Sheet>
			))}
		</div>
	);
}
