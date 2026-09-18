/**
 * Component Purpose:
 * - Wraps lucide-react so icon size and stroke width come from the design system.
 * - Makes the accessibility decision explicit and unavoidable at every call site.
 *
 * An icon is either decorative (next to a visible label — hidden from assistive tech) or
 * it carries meaning on its own (needs a name). There is no third case, and getting it
 * wrong is silent. So `label` is required: pass a string, or pass `null` to state
 * deliberately that the icon is decorative.
 */

import * as React from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@woldui/react/lib/utils';

const sizes = {
	xs: 'size-3',
	sm: 'size-4',
	md: 'size-5',
	lg: 'size-6'
} as const;

type IconProps = {
	icon: LucideIcon;
	/** An accessible name, or `null` when the icon is decorative. */
	label: string | null;
	size?: keyof typeof sizes;
	className?: string;
};

export function Icon({ icon: LucideGlyph, label, size = 'sm', className }: IconProps) {
	return (
		<LucideGlyph
			className={cn(sizes[size], 'shrink-0', className)}
			strokeWidth={1.75}
			aria-hidden={label === null ? true : undefined}
			aria-label={label ?? undefined}
			role={label === null ? undefined : 'img'}
			focusable={false}
		/>
	);
}
