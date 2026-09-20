import { Save } from 'lucide-react';
import { Button } from '@woldui/react/components/ui/button';
import { Kbd, KbdGroup } from '@woldui/react/components/ui/kbd';
import { Tooltip, TooltipContent, TooltipTrigger } from '@woldui/react/components/ui/tooltip';

export default function TooltipWithKbd() {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button variant="bordered">
					<Save aria-hidden /> Save
				</Button>
			</TooltipTrigger>
			<TooltipContent side="bottom">
				Save changes
				<KbdGroup>
					<Kbd>Ctrl</Kbd>
					<Kbd>S</Kbd>
				</KbdGroup>
			</TooltipContent>
		</Tooltip>
	);
}
