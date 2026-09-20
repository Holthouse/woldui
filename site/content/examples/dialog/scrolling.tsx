import { Button } from '@woldui/react/components/ui/button';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@woldui/react/components/ui/dialog';

const sections = ['Workspaces', 'Members', 'Projects', 'Files', 'Notifications', 'Integrations'];

export default function DialogScrolling() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="bordered">Read the terms</Button>
			</DialogTrigger>
			<DialogContent className="max-h-[min(24rem,80vh)] grid-rows-[auto_minmax(0,1fr)_auto]">
				<DialogHeader>
					<DialogTitle>Terms of service</DialogTitle>
					<DialogDescription>Last updated 1 September 2026.</DialogDescription>
				</DialogHeader>
				{/* The body scrolls; the header and footer stay put. Focusable so keys can scroll it. */}
				<div role="region" aria-label="Terms" tabIndex={0} className="-mx-4 overflow-y-auto px-4">
					{sections.map((section) => (
						<section key={section} className="mb-4">
							<h3 className="mb-1 font-medium">{section}</h3>
							<p className="text-muted-foreground">
								How the service handles {section.toLowerCase()}, who can see them, and what happens
								to them when a workspace is closed. Read this before inviting your team.
							</p>
						</section>
					))}
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button>I understand</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
