import { Button } from '@woldui/react/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@woldui/react/components/ui/card';

export default function CardDividers() {
	return (
		<Card className="w-full max-w-sm">
			<CardHeader className="border-b">
				<CardTitle>Team members</CardTitle>
				<CardDescription>People with access to this workspace.</CardDescription>
			</CardHeader>
			<CardContent>
				<ul className="flex flex-col gap-2">
					<li>Maya Lindqvist · Owner</li>
					<li>Jonas Olsen · Editor</li>
					<li>Sara Ruiz · Viewer</li>
				</ul>
			</CardContent>
			<CardFooter className="justify-end border-t">
				<Button size="sm" variant="bordered">
					Manage access
				</Button>
			</CardFooter>
		</Card>
	);
}
