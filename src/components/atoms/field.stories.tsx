/**
 * Field stories (docs/guidelines.md#testing).
 *
 * These enumerate the states that matter rather than one bare default, because the states
 * are where the accessibility contract lives: an invalid field must carry aria-invalid and
 * point aria-describedby at a role="alert" message. The addon-a11y axe pass runs against
 * each of these.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Field } from './field';
import { Input } from '@woldui/react/components/ui/input';

const meta = {
	title: 'Atoms/Field',
	component: Field,
	args: {
		label: 'Name',
		children: (props) => <Input {...props} placeholder="Project name" />
	}
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDescription: Story = {
	args: { description: 'Shown to everyone on the project.' }
};

export const WithError: Story = {
	args: { error: 'Name is required' }
};

export const WithDescriptionAndError: Story = {
	name: 'With description and error',
	args: {
		description: 'Shown to everyone on the project.',
		error: 'Name must be at most 100 characters'
	}
};

export const WithCounter: Story = {
	args: {
		adornment: <span className="text-xs text-muted-foreground tabular-nums">9/100</span>
	}
};

export const Disabled: Story = {
	args: {
		children: (props) => <Input {...props} disabled value="Project name" readOnly />
	}
};
