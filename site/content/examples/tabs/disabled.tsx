import { Tabs, TabsList, TabsTrigger } from '@woldui/react/components/ui/tabs';

export default function TabsDisabled() {
	return (
		<Tabs defaultValue="members">
			<TabsList>
				<TabsTrigger value="members">Members</TabsTrigger>
				<TabsTrigger value="roles">Roles</TabsTrigger>
				<TabsTrigger value="audit" disabled>
					Audit log
				</TabsTrigger>
			</TabsList>
		</Tabs>
	);
}
