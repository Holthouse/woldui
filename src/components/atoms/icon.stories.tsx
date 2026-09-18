/**
 * Icon stories (docs/guidelines.md#testing).
 *
 * The two stories that matter are Decorative and Meaningful: the axe pass is what catches
 * an icon that carries meaning with no accessible name, which is the mistake the required
 * `label` prop exists to make impossible.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { PiggyBank, TrendingUp, Wallet } from 'lucide-react';
import { Icon } from './icon';
import { Inline, Stack } from './layout';
import { Muted } from './typography';

const meta = {
	title: 'Atoms/Icon',
	component: Icon,
	args: { icon: Wallet, label: null }
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
	render: () => (
		<Inline gap="md">
			{(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
				<Icon key={size} icon={Wallet} label={null} size={size} />
			))}
		</Inline>
	)
};

export const Decorative: Story = {
	name: 'Decorative (label={null})',
	render: () => (
		<Stack gap="xs">
			<Inline gap="xs">
				<Icon icon={PiggyBank} label={null} />
				<span className="text-sm">Savings</span>
			</Inline>
			<Muted>Hidden from assistive tech, because the visible text already names it.</Muted>
		</Stack>
	)
};

export const Meaningful: Story = {
	name: 'Meaningful (needs a name)',
	render: () => (
		<Stack gap="xs">
			<Icon icon={TrendingUp} label="Balance rising" />
			<Muted>Standing alone, so it carries an accessible name.</Muted>
		</Stack>
	)
};
