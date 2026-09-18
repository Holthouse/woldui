/**
 * Focus behaviour of a field, asserted against real computed styles.
 *
 * These exist because the visual defect they cover could not be verified by hand: the
 * Browser pane stayed hidden, and Chrome throttles style recalculation in a hidden
 * document, so reads taken after focusing returned pre-focus values. Vitest browser mode
 * runs a real, painting Chromium, so it can see what a hidden pane cannot.
 *
 * Two things are pinned:
 *
 * 1. The field shows focus. It is the only focus indicator once the inner button stops
 *    drawing its own, so losing it silently would be an accessibility regression.
 * 2. A button inside the field keeps its focus ring inside the field. Button's default
 *    `outline-offset-2` put a blue box outside the combobox, because the addon's negative
 *    margin pulls the control toward the edge.
 */

import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput
} from '@woldui/react/components/ui/input-group';

function Field() {
	return (
		<InputGroup>
			<InputGroupInput placeholder="Pick an account" aria-label="Account" />
			<InputGroupAddon align="inline-end">
				<InputGroupButton size="icon-xs" aria-label="Open">
					<svg viewBox="0 0 16 16" />
				</InputGroupButton>
			</InputGroupAddon>
		</InputGroup>
	);
}

/**
 * Waits for a focus-driven style change to finish.
 *
 * The field transitions its border over --motion-fast (150ms), so a single frame reads
 * the value the transition started from and makes a working style look broken. This waits
 * past the transition instead.
 */
async function afterTransition() {
	await new Promise((resolve) => setTimeout(resolve, 400));
}

describe('a field shows that it is focused', () => {
	it('changes its border when the control inside it takes focus', async () => {
		const screen = await render(<Field />);
		const input = await screen.getByRole('textbox', { name: 'Account' }).element();
		const group = input.closest('[data-slot="input-group"]') as HTMLElement;

		const atRest = getComputedStyle(group).borderColor;

		input.focus();
		await afterTransition();
		const focused = getComputedStyle(group).borderColor;

		expect(focused).not.toBe(atRest);
	});

	it('does so for a button inside it too, not only the text input', async () => {
		const screen = await render(<Field />);
		const button = await screen.getByRole('button', { name: 'Open' }).element();
		const group = button.closest('[data-slot="input-group"]') as HTMLElement;

		const atRest = getComputedStyle(group).borderColor;

		button.focus();
		await afterTransition();

		expect(getComputedStyle(group).borderColor).not.toBe(atRest);
	});
});

describe('a button inside a field stays inside it', () => {
	it('draws its focus ring on its own edge, not offset beyond the field', async () => {
		const screen = await render(<Field />);
		const button = await screen.getByRole('button', { name: 'Open' }).element();
		const group = button.closest('[data-slot="input-group"]') as HTMLElement;

		button.focus();
		await afterTransition();

		const style = getComputedStyle(button);
		const reach = parseFloat(style.outlineWidth) + parseFloat(style.outlineOffset);
		const buttonBox = button.getBoundingClientRect();
		const groupBox = group.getBoundingClientRect();

		// An offset ring is what pushed the blue box outside the combobox.
		expect(parseFloat(style.outlineOffset)).toBeLessThanOrEqual(0);
		expect(buttonBox.right + reach).toBeLessThanOrEqual(groupBox.right);
	});

	it('is not a circle: its radius is smaller than half its size', async () => {
		const screen = await render(<Field />);
		const button = await screen.getByRole('button', { name: 'Open' }).element();
		const box = button.getBoundingClientRect();

		// Button's default size supplies a 12px radius, which on a 24px control is a circle.
		expect(parseFloat(getComputedStyle(button).borderRadius)).toBeLessThan(box.width / 2);
	});

	it('carries no border of its own, the way shadcn ghost does not', async () => {
		const screen = await render(<Field />);
		const button = await screen.getByRole('button', { name: 'Open' }).element();
		const style = getComputedStyle(button);

		const transparent =
			style.borderTopColor === 'rgba(0, 0, 0, 0)' || parseFloat(style.borderTopWidth) === 0;
		expect(transparent).toBe(true);
	});
});
