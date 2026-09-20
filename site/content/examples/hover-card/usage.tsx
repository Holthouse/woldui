import { Avatar, AvatarFallback } from '@woldui/react/components/ui/avatar';
import { Button } from '@woldui/react/components/ui/button';
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger
} from '@woldui/react/components/ui/hover-card';

export default function HoverCardUsage() {
	return (
		<HoverCard>
			<HoverCardTrigger asChild>
				<Button variant="link" asChild>
					<a href="#design-team">@design-team</a>
				</Button>
			</HoverCardTrigger>
			<HoverCardContent>
				<div className="flex gap-3">
					<Avatar>
						<AvatarFallback>DT</AvatarFallback>
					</Avatar>
					<div className="flex flex-col gap-1">
						<p className="text-sm font-medium">Design team</p>
						<p className="text-muted-foreground">
							Owns the design system, brand and product illustrations. 8 members.
						</p>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	);
}
