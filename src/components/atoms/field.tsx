'use client';

/**
 * Component Purpose:
 * - Binds a label, control, description, counter and error messages into one accessible unit.
 * - Wires aria-describedby and aria-invalid so no form has to remember to.
 *
 * Important accessibility behavior. This is the form error contract in
 * docs/guidelines.md#accessibility:
 *
 * - aria-describedby lists, in order: the field error, the form-level message, the
 *   description, then the adornment (a character counter). The counter is described
 *   rather than announced live, so it is read when the control takes focus instead of
 *   on every keystroke.
 * - aria-invalid is true when EITHER a field error OR a form-level message is present.
 *   A refusal that belongs to no field still makes the control invalid.
 * - The form-level message carries role="alert", because it is the only place an API
 *   refusal appears and a screen reader has to reach it. The field error does not need
 *   role="alert": aria-describedby already carries it, and two live announcements for
 *   one submit is noise.
 *
 * The control is supplied via a render prop because only the caller knows what it is.
 * The ids come from here so they cannot drift.
 */

import * as React from 'react';
import { Label } from '@woldui/react/components/ui/label';
import { cn } from '@woldui/react/lib/utils';

type FieldRenderProps = {
	id: string;
	'aria-invalid': true | undefined;
	'aria-describedby': string | undefined;
};

type FieldProps = {
	label: string;
	/** Receives the ids and aria wiring to spread onto the control. */
	children: (props: FieldRenderProps) => React.ReactNode;
	/** Helper text. Described with the control. */
	description?: string;
	/** Validation message for this field. */
	error?: string;
	/**
	 * A refusal that belongs to no single field.
	 *
	 * It marks the control invalid and is announced, because the API owns refusals that
	 * no field can carry.
	 */
	message?: string;
	/** Rendered at the end of the label row — a character counter, for instance. */
	adornment?: React.ReactNode;
	className?: string;
};

export function Field({
	label,
	children,
	description,
	error,
	message,
	adornment,
	className
}: FieldProps) {
	const uid = React.useId();
	const errorId = `${uid}-error`;
	const messageId = `${uid}-message`;
	const descriptionId = `${uid}-description`;
	const adornmentId = `${uid}-adornment`;

	const describedBy =
		[
			error ? errorId : null,
			message ? messageId : null,
			description ? descriptionId : null,
			adornment ? adornmentId : null
		]
			.filter(Boolean)
			.join(' ') || undefined;

	const invalid = Boolean(error || message);

	return (
		<div className={cn('flex flex-col gap-2', className)}>
			<div className="flex items-baseline justify-between gap-2">
				<Label htmlFor={uid}>{label}</Label>
				{adornment ? <span id={adornmentId}>{adornment}</span> : null}
			</div>

			{children({
				id: uid,
				'aria-invalid': invalid ? true : undefined,
				'aria-describedby': describedBy
			})}

			{description && (
				<p id={descriptionId} className="text-xs text-muted-foreground">
					{description}
				</p>
			)}

			{error && (
				<p id={errorId} className="text-xs text-destructive">
					{error}
				</p>
			)}

			{message && (
				<p id={messageId} role="alert" className="text-xs text-destructive">
					{message}
				</p>
			)}
		</div>
	);
}
