/**
 * Layout primitive stories (docs/guidelines.md#testing).
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Grid, Inline, Stack } from './layout';

const meta = {
	title: 'Atoms/Layout',
	component: Stack
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * A filler block for demonstrating layout.
 *
 * Uses secondary rather than muted deliberately: muted-foreground on muted is 4.13:1,
 * which is below the 4.5:1 AA requires for normal-size text. That pairing is a real gap
 * in the palette, not a quirk of these stories — see docs/guidelines.md#accessibility.
 */
function Swatch({ children }: { children: React.ReactNode }) {
	return (
		<Box className="border border-border bg-secondary px-3 py-2 text-xs text-secondary-foreground">
			{children}
		</Box>
	);
}

export const StackGaps: Story = {
	name: 'Stack — gap scale',
	render: () => (
		<Stack gap="lg">
			{(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((gap) => (
				<Stack key={gap} gap="xs">
					<span className="text-xs text-muted-foreground">gap=&quot;{gap}&quot;</span>
					<Stack gap={gap}>
						<Swatch>One</Swatch>
						<Swatch>Two</Swatch>
					</Stack>
				</Stack>
			))}
		</Stack>
	)
};

export const InlineWrapping: Story = {
	name: 'Inline — wraps by default',
	render: () => (
		<Inline gap="sm">
			{Array.from({ length: 12 }, (_, i) => (
				<Swatch key={i}>Item {i + 1}</Swatch>
			))}
		</Inline>
	)
};

export const InlineJustify: Story = {
	name: 'Inline — justify',
	render: () => (
		<Stack gap="md">
			{(['start', 'center', 'end', 'between'] as const).map((justify) => (
				<Inline key={justify} justify={justify} className="border border-border p-2">
					<Swatch>A</Swatch>
					<Swatch>B</Swatch>
				</Inline>
			))}
		</Stack>
	)
};

export const GridReflow: Story = {
	name: 'Grid — reflows without breakpoints',
	render: () => (
		<Grid min="10rem">
			{Array.from({ length: 7 }, (_, i) => (
				<Swatch key={i}>Cell {i + 1}</Swatch>
			))}
		</Grid>
	)
};
