import { FolderPlus } from 'lucide-react';
import { Button } from '@woldui/react/components/ui/button';
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle
} from '@woldui/react/components/ui/empty';

export default function EmptyUsage() {
	return (
		<Empty className="border">
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<FolderPlus aria-hidden />
				</EmptyMedia>
				<EmptyTitle>No projects yet</EmptyTitle>
				<EmptyDescription>Create a project to start inviting your team.</EmptyDescription>
			</EmptyHeader>
			<EmptyContent>
				<Button size="sm">New project</Button>
			</EmptyContent>
		</Empty>
	);
}
