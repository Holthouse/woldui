import { Code, Heading, Muted, Text } from '@woldui/react/components/atoms/typography';

export default function TypographyUsage() {
	return (
		<div className="flex max-w-md flex-col gap-2">
			<Heading level={3}>Project settings</Heading>
			<Text>
				Changes apply to everyone on the project. The project id is <Code>prj_8f2k1</Code>.
			</Text>
			<Muted>Last edited by Maya on 15 September.</Muted>
		</div>
	);
}
