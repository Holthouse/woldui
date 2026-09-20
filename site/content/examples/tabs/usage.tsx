import { Tabs, TabsContent, TabsList, TabsTrigger } from '@woldui/react/components/ui/tabs';

export default function TabsUsage() {
	return (
		<Tabs defaultValue="overview" className="w-full max-w-md">
			<TabsList>
				<TabsTrigger value="overview">Overview</TabsTrigger>
				<TabsTrigger value="activity">Activity</TabsTrigger>
				<TabsTrigger value="settings">Settings</TabsTrigger>
			</TabsList>
			<TabsContent value="overview" className="text-muted-foreground">
				Four open projects and two pending invitations.
			</TabsContent>
			<TabsContent value="activity" className="text-muted-foreground">
				Twelve updates since your last visit.
			</TabsContent>
			<TabsContent value="settings" className="text-muted-foreground">
				Manage members, roles and notifications.
			</TabsContent>
		</Tabs>
	);
}
