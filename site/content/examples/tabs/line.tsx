import { Tabs, TabsContent, TabsList, TabsTrigger } from '@woldui/react/components/ui/tabs';

export default function TabsLine() {
	return (
		<Tabs defaultValue="files" className="w-full max-w-md">
			<TabsList variant="line">
				<TabsTrigger value="files">Files</TabsTrigger>
				<TabsTrigger value="comments">Comments</TabsTrigger>
				<TabsTrigger value="history">History</TabsTrigger>
			</TabsList>
			<TabsContent value="files" className="text-muted-foreground">
				Eight files, last edited this morning.
			</TabsContent>
			<TabsContent value="comments" className="text-muted-foreground">
				No unresolved comments.
			</TabsContent>
			<TabsContent value="history" className="text-muted-foreground">
				Twenty-three versions.
			</TabsContent>
		</Tabs>
	);
}
