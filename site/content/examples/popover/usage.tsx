import { Button } from '@woldui/react/components/ui/button';
import { Input } from '@woldui/react/components/ui/input';
import { Label } from '@woldui/react/components/ui/label';
import {
	Popover,
	PopoverContent,
	PopoverDescription,
	PopoverHeader,
	PopoverTitle,
	PopoverTrigger
} from '@woldui/react/components/ui/popover';

export default function PopoverUsage() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="bordered">Reminder</Button>
			</PopoverTrigger>
			<PopoverContent aria-label="Reminder settings">
				<PopoverHeader>
					<PopoverTitle>Remind me</PopoverTitle>
					<PopoverDescription>We will notify you before the task is due.</PopoverDescription>
				</PopoverHeader>
				<div className="grid grid-cols-[auto_1fr] items-center gap-3">
					<Label htmlFor="popover-days">Days before</Label>
					<Input id="popover-days" type="number" min={0} defaultValue={2} />
				</div>
			</PopoverContent>
		</Popover>
	);
}
