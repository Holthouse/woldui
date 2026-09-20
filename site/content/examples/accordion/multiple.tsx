import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@woldui/react/components/ui/accordion';

export default function AccordionMultiple() {
	return (
		<Accordion type="multiple" defaultValue={['general']} className="w-full max-w-md">
			<AccordionItem value="general">
				<AccordionTrigger>General</AccordionTrigger>
				<AccordionContent>Project name, description and default language.</AccordionContent>
			</AccordionItem>
			<AccordionItem value="notifications">
				<AccordionTrigger>Notifications</AccordionTrigger>
				<AccordionContent>Which events send an email, and how often.</AccordionContent>
			</AccordionItem>
			<AccordionItem value="danger" disabled>
				<AccordionTrigger>Danger zone (owners only)</AccordionTrigger>
				<AccordionContent>Transfer or delete the project.</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
