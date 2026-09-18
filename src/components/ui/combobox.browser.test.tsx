/**
 * The real Combobox, measured.
 *
 * input-group.browser.test.tsx builds a synthetic InputGroup with a plain
 * InputGroupButton, and it passes. That was not enough: the real combobox renders
 * `InputGroupButton asChild` around Base UI's ComboboxTrigger, so Button renders through
 * Slot and the element that actually reaches the DOM is Base UI's, carrying whatever it
 * brings with it. Testing the approximation verified something nobody ships.
 */

import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxList
} from '@woldui/react/components/ui/combobox';

const accounts = ['Everyday', 'Savings', 'Holiday'];

function Subject() {
	return (
		<Combobox items={accounts}>
			<ComboboxInput placeholder="Pick an account" aria-label="Pick an account" />
			<ComboboxContent>
				<ComboboxEmpty>No account found.</ComboboxEmpty>
				<ComboboxList>
					{accounts.map((a) => (
						<ComboboxItem key={a} value={a}>
							{a}
						</ComboboxItem>
					))}
				</ComboboxList>
			</ComboboxContent>
		</Combobox>
	);
}

async function afterTransition() {
	await new Promise((resolve) => setTimeout(resolve, 400));
}

/** Everything the chevron's box is made of, as the browser computes it. */
function describeTrigger(trigger: HTMLElement, group: HTMLElement) {
	const s = getComputedStyle(trigger);
	const t = trigger.getBoundingClientRect();
	const g = group.getBoundingClientRect();
	const ringReach = parseFloat(s.outlineWidth) + parseFloat(s.outlineOffset);

	return {
		width: Math.round(t.width),
		height: Math.round(t.height),
		radius: s.borderRadius,
		borderWidth: s.borderWidth,
		borderColor: s.borderColor,
		boxShadow: s.boxShadow,
		outline: `${s.outlineWidth} ${s.outlineStyle} offset ${s.outlineOffset}`,
		overflowRight: Math.round(t.right + ringReach - g.right),
		overflowTop: Math.round(g.top - (t.top - ringReach))
	};
}

describe('the combobox chevron', () => {
	it('has no border or ring of its own at rest', async () => {
		const screen = await render(<Subject />);
		const trigger = await screen.getByRole('button').element();
		const group = trigger.closest('[data-slot="input-group"]') as HTMLElement;

		const box = describeTrigger(trigger as HTMLElement, group);
		// eslint-disable-next-line no-console
		console.log('AT REST', JSON.stringify(box));

		const borderless =
			box.borderColor === 'rgba(0, 0, 0, 0)' || parseFloat(box.borderWidth) === 0;
		expect(borderless).toBe(true);
		// Tailwind's ring machinery always emits a shadow stack; it only matters if a
		// layer is actually opaque. `rgba(0, 0, 0, 0)` layers are invisible.
		const opaqueLayer = box.boxShadow
			.split('), ')
			.some((layer) => !layer.includes('rgba(0, 0, 0, 0)') && layer.trim() !== 'none');
		expect(opaqueLayer).toBe(false);
	});

	it('keeps its focus ring inside the field', async () => {
		const screen = await render(<Subject />);
		const trigger = (await screen.getByRole('button').element()) as HTMLElement;
		const group = trigger.closest('[data-slot="input-group"]') as HTMLElement;

		trigger.focus();
		await afterTransition();

		const box = describeTrigger(trigger, group);
		// eslint-disable-next-line no-console
		console.log('FOCUSED', JSON.stringify(box));

		expect(box.overflowRight).toBeLessThanOrEqual(0);
		expect(box.overflowTop).toBeLessThanOrEqual(0);
	});

	it('keeps everything inside the field while the dropdown is OPEN', async () => {
		const screen = await render(<Subject />);

		/*
		 * A real browser click, not `element().click()`.
		 *
		 * A synthetic click does not open a Base UI combobox — it listens for pointer
		 * events. An earlier version of this test called `trigger.click()`, measured a
		 * dropdown that had never opened, and passed while the reported defect was
		 * sitting in exactly that state.
		 */
		await screen.getByRole('button').click();
		await afterTransition();

		/*
		 * Re-query by structure, not by role. Once the popup opens, Base UI adds its own
		 * `role="button"` dismiss elements, so `getByRole('button')` becomes ambiguous —
		 * which is a strict-mode error, not a measurement.
		 */
		const group = document.querySelector('[data-slot="input-group"]') as HTMLElement;
		const trigger = group.querySelector('[data-slot="input-group-button"]') as HTMLElement;

		// Prove the list is actually open before trusting anything measured here.
		const expanded = trigger.getAttribute('aria-expanded');
		const listbox = document.querySelector('[role="listbox"]');

		const box = describeTrigger(trigger, group);
		// eslint-disable-next-line no-console
		console.log(
			'OPEN',
			JSON.stringify({ expanded, listboxPresent: !!listbox, ...box }),
			'attrs',
			JSON.stringify(
				[...trigger.attributes].map((a) => `${a.name}=${a.value}`).filter((a) => a.startsWith('data-'))
			)
		);

		expect(expanded).toBe('true');
		expect(box.overflowRight).toBeLessThanOrEqual(0);
		expect(box.overflowTop).toBeLessThanOrEqual(0);
	});

	it('holds its text input inside the field', async () => {
		const screen = await render(<Subject />);
		const group = document.querySelector('[data-slot="input-group"]') as HTMLElement;
		const input = group.querySelector('[data-slot="input-group-control"]') as HTMLElement;

		const inputBox = input.getBoundingClientRect();
		const groupStyle = getComputedStyle(group);
		const groupBox = group.getBoundingClientRect();

		// The group's CONTENT box: its border eats into the space a child can occupy.
		const contentHeight =
			groupBox.height -
			parseFloat(groupStyle.borderTopWidth) -
			parseFloat(groupStyle.borderBottomWidth);

		// eslint-disable-next-line no-console
		console.log(
			'INPUT FIT',
			JSON.stringify({
				inputHeight: Math.round(inputBox.height),
				groupHeight: Math.round(groupBox.height),
				groupContentHeight: Math.round(contentHeight),
				overflowsBy: Math.round(inputBox.height - contentHeight)
			})
		);

		expect(Math.round(inputBox.height)).toBeLessThanOrEqual(Math.round(contentHeight));
	});

	it('never paints its own background over the field corners', async () => {
		const screen = await render(<Subject />);
		const group = document.querySelector('[data-slot="input-group"]') as HTMLElement;
		const input = group.querySelector('[data-slot="input-group-control"]') as HTMLElement;

		const atRest = getComputedStyle(input).backgroundColor;
		input.focus();
		await afterTransition();
		const focused = getComputedStyle(input).backgroundColor;

		// eslint-disable-next-line no-console
		console.log('INPUT BG', JSON.stringify({ atRest, focused }));

		/*
		 * The field is rounded; the input inside it is `rounded-none` and fills the content
		 * box. So the moment the input paints a background of its own, its square corners
		 * cover the field's rounded ones — visible as a squared-off notch at the left
		 * corners. Input carries `focus-visible:bg-background` for standalone use, which is
		 * what leaked through here. Inside a group, the group owns the fill.
		 */
		expect(atRest).toBe('rgba(0, 0, 0, 0)');
		expect(focused).toBe('rgba(0, 0, 0, 0)');
	});

	it('is not a circle', async () => {
		const screen = await render(<Subject />);
		const trigger = (await screen.getByRole('button').element()) as HTMLElement;
		const group = trigger.closest('[data-slot="input-group"]') as HTMLElement;
		const box = describeTrigger(trigger, group);

		expect(parseFloat(box.radius)).toBeLessThan(box.width / 2);
	});
});
