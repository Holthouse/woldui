import { Bell } from 'lucide-react';
import { Button } from '@woldui/react/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@woldui/react/components/ui/tooltip';

export default function TooltipUsage() {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button size="icon" variant="bordered" aria-label="Notifications">
					<Bell aria-hidden />
				</Button>
			</TooltipTrigger>
			<TooltipContent>Notifications</TooltipContent>
		</Tooltip>
	);
}
