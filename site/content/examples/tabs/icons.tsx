import { Bell, Settings, Users } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@woldui/react/components/ui/tabs';

export default function TabsIcons() {
	return (
		<Tabs defaultValue="team">
			<TabsList>
				<TabsTrigger value="team">
					<Users aria-hidden /> Team
				</TabsTrigger>
				<TabsTrigger value="notifications">
					<Bell aria-hidden /> Notifications
				</TabsTrigger>
				<TabsTrigger value="settings">
					<Settings aria-hidden /> Settings
				</TabsTrigger>
			</TabsList>
		</Tabs>
	);
}
