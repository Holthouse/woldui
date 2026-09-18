/**
 * Typography stories (docs/guidelines.md#testing).
 *
 * The `level` / `size` split is the thing worth inspecting: semantics and appearance are
 * set independently, so a visually small heading can still be the right level in the
 * document outline.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Code, Heading, Muted, Text } from './typography';
import { Stack } from './layout';

const meta = {
	title: 'Atoms/Typography',
	component: Text
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeadingLevels: Story = {
	name: 'Heading — levels',
	render: () => (
		<Stack gap="sm">
			{([1, 2, 3, 4, 5, 6] as const).map((level) => (
				<Heading key={level} level={level}>
					Heading level {level}
				</Heading>
			))}
		</Stack>
	)
};

export const SemanticsVersusSize: Story = {
	name: 'Heading — level and size are independent',
	render: () => (
		<Stack gap="sm">
			<Heading level={2} size="sm">
				An h2 rendered small
			</Heading>
			<Heading level={3} size="2xl">
				An h3 rendered large
			</Heading>
			<Muted>Choosing the tag for its size is how heading order gets broken.</Muted>
		</Stack>
	)
};

export const Tones: Story = {
	render: () => (
		<Stack gap="sm">
			<Text>Default body text.</Text>
			<Muted>Muted secondary text.</Muted>
			<Text tone="destructive">Destructive text.</Text>
			<Text>
				With inline <Code>code</Code> set tabular.
			</Text>
		</Stack>
	)
};

export const Sizes: Story = {
	render: () => (
		<Stack gap="sm">
			{(['xs', 'sm', 'base', 'lg', 'xl'] as const).map((size) => (
				<Text key={size} size={size}>
					Body text at size &quot;{size}&quot;
				</Text>
			))}
		</Stack>
	)
};
