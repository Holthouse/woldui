import { Tabs, TabsContent, TabsList, TabsTrigger } from '@woldui/react/components/ui/tabs';

export default function TabsVertical() {
	return (
		<Tabs defaultValue="profile" orientation="vertical" className="w-full max-w-md">
			<TabsList>
				<TabsTrigger value="profile">Profile</TabsTrigger>
				<TabsTrigger value="team">Team</TabsTrigger>
				<TabsTrigger value="notifications">Notifications</TabsTrigger>
			</TabsList>
			<TabsContent value="profile" className="text-muted-foreground">
				Your name, avatar and time zone.
			</TabsContent>
			<TabsContent value="team" className="text-muted-foreground">
				Who can see and edit your projects.
			</TabsContent>
			<TabsContent value="notifications" className="text-muted-foreground">
				Which updates reach your inbox.
			</TabsContent>
		</Tabs>
	);
}
