import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@woldui/react/components/ui/accordion';

export default function AccordionUsage() {
	return (
		<Accordion type="single" collapsible className="w-full max-w-md">
			<AccordionItem value="invite">
				<AccordionTrigger>How do I invite someone to a project?</AccordionTrigger>
				<AccordionContent>
					Open the project, choose Members, and send an invite by email. They join as a viewer until
					you change their role.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="archive">
				<AccordionTrigger>What happens when I archive a project?</AccordionTrigger>
				<AccordionContent>
					It becomes read-only and leaves the sidebar. You can restore it at any time.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="export">
				<AccordionTrigger>Can I export my data?</AccordionTrigger>
				<AccordionContent>Yes. Settings has an export in CSV and JSON.</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
