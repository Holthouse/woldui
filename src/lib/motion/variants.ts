/**
 * Shared Framer Motion variants (docs/guidelines.md#motion).
 *
 * A component picks a named variant; it does not invent its own keyframes. That is what
 * keeps twelve different dialogs from each easing slightly differently.
 */

import type { Variants } from 'motion/react';
import { duration, easing, staggerStep, transition } from './tokens.js';

export const fadeIn: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition },
	exit: { opacity: 0, transition: { duration: duration.fast, ease: easing.out } }
};

export const slideUp: Variants = {
	hidden: { opacity: 0, y: 8 },
	visible: { opacity: 1, y: 0, transition },
	exit: { opacity: 0, y: 4, transition: { duration: duration.fast, ease: easing.out } }
};

export const scaleIn: Variants = {
	hidden: { opacity: 0, scale: 0.97 },
	visible: { opacity: 1, scale: 1, transition },
	exit: { opacity: 0, scale: 0.98, transition: { duration: duration.fast, ease: easing.out } }
};

/**
 * Parent variant for a staggered list.
 *
 * Pair with `slideUp` (or any other variant using the same state names) on each child.
 */
export const stagger: Variants = {
	hidden: {},
	visible: { transition: { staggerChildren: staggerStep } },
	exit: {}
};
