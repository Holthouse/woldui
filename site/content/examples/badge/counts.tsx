import { Bell } from 'lucide-react';
import { Badge } from '@woldui/react/components/ui/badge';
import { Button } from '@woldui/react/components/ui/button';

export default function BadgeCounts() {
	return (
		<div className="flex flex-wrap items-center gap-3">
			<Button variant="bordered">
				Inbox
				<Badge variant="primary">12</Badge>
			</Button>
			{/* The count is part of the button's name, so it is read with it. */}
			<Button variant="light" size="icon" className="relative" aria-label="Notifications, 3 unread">
				<Bell aria-hidden />
				<Badge
					aria-hidden
					variant="destructive"
					className="absolute -top-1 -right-1 h-5 min-w-5 px-1"
				>
					3
				</Badge>
			</Button>
		</div>
	);
}
