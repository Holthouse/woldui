import { Badge } from '@woldui/react/components/ui/badge';
import { Button } from '@woldui/react/components/ui/button';
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@woldui/react/components/ui/card';

export default function CardUsage() {
	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>
					<h3>Website redesign</h3>
				</CardTitle>
				<CardDescription>Updated 2 hours ago</CardDescription>
				<CardAction>
					<Badge variant="success">On track</Badge>
				</CardAction>
			</CardHeader>
			<CardContent>
				<p className="text-muted-foreground">
					New landing page, pricing and docs. 14 of 22 tasks done.
				</p>
			</CardContent>
			<CardFooter className="gap-2">
				<Button size="sm">Open project</Button>
				<Button size="sm" variant="light">
					Share
				</Button>
			</CardFooter>
		</Card>
	);
}
