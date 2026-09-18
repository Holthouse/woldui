'use client';

/**
 * Component Purpose:
 * - Wraps the handful of motion patterns the design system allows.
 * - Applies the reduced-motion guard centrally, so no call site can forget it.
 * - Keeps Framer Motion imports out of feature code.
 *
 * WHY THESE MOUNT-GATE INSTEAD OF ANIMATING IMMEDIATELY
 *
 * An earlier version rendered `<motion.div initial="hidden">` straight away. On the
 * server that serialises to `style="opacity:0;transform:translateY(8px)"`, so the
 * prerendered HTML shipped its content invisible and only revealed it once React had
 * hydrated and Framer Motion had run. Anyone whose JavaScript was slow, blocked or
 * broken saw nothing at all, and `useReducedMotion()` cannot help because it returns
 * false during SSR — there is no matchMedia on the server, so the reduced-motion branch
 * was never the one that rendered into the HTML.
 *
 * So the rule here is: the server always renders the final, visible state. Animation is
 * opt-in on the client after mount, and only when the reader has not asked for reduced
 * motion. The cost is that a client-side reveal starts one frame later. The benefit is
 * that content is never hidden by a script that has not run yet.
 */

import * as React from 'react';
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'motion/react';
import { fadeIn, slideUp, stagger } from './variants.js';
import { cn } from '@woldui/react/lib/utils';

/** Never fires: this store's value is constant per environment. */
const noSubscribe = () => () => {};

/**
 * False while rendering on the server, true on the client.
 *
 * `useSyncExternalStore` takes a server snapshot as its third argument, which is exactly
 * the distinction needed here — so this reads the environment rather than setting state
 * in an effect to discover it. The effect version works but triggers a cascading render,
 * which `react-hooks/set-state-in-effect` rightly objects to.
 */
function useMounted(): boolean {
	return React.useSyncExternalStore(
		noSubscribe,
		() => true,
		() => false
	);
}

/** Whether this render should animate at all. */
function useShouldAnimate(): boolean {
	const reduced = useReducedMotion();
	const mounted = useMounted();
	return mounted && !reduced;
}

type RevealProps = {
	children: React.ReactNode;
	/** Which named variant to animate with. Defaults to `slideUp`. */
	variants?: Variants;
	className?: string;
	/** Render as a list item, section, etc. Defaults to `div`. */
	as?: 'div' | 'li' | 'section' | 'article';
};

/**
 * Animates its children in on mount.
 *
 * Renders the final state on the server and under reduced motion, with no transition.
 */
export function Reveal({ children, variants = slideUp, className, as = 'div' }: RevealProps) {
	const animate = useShouldAnimate();
	const Component = motion[as];
	const Plain = as;

	if (!animate) return <Plain className={className}>{children}</Plain>;

	return (
		<Component
			initial="hidden"
			animate="visible"
			exit="exit"
			variants={variants}
			className={className}
		>
			{children}
		</Component>
	);
}

type StaggerProps = {
	children: React.ReactNode;
	className?: string;
	as?: 'div' | 'ul' | 'ol';
};

/**
 * Staggers its children in.
 *
 * Each child should be a `<Reveal>` (or carry the same `hidden`/`visible` state names).
 */
export function Stagger({ children, className, as = 'div' }: StaggerProps) {
	const animate = useShouldAnimate();
	const Component = motion[as];
	const Plain = as;

	if (!animate) return <Plain className={className}>{children}</Plain>;

	return (
		<Component initial="hidden" animate="visible" variants={stagger} className={className}>
			{children}
		</Component>
	);
}

type FadeProps = {
	children: React.ReactNode;
	className?: string;
};

/** A plain cross-fade, for skeleton-to-content swaps. */
export function Fade({ children, className }: FadeProps) {
	return (
		<Reveal variants={fadeIn} className={className}>
			{children}
		</Reveal>
	);
}

/**
 * Animates children out as well as in.
 *
 * Re-exported so feature code never imports `motion/react` directly — that import is
 * the one that makes it easy to skip the reduced-motion guard.
 *
 * @public The re-export is the point. Deleting it because nothing imports it yet would
 * remove the guard rail exactly when the first feature needs it.
 */
export { AnimatePresence };

/**
 * Utility re-export so consumers can compose classes without a second import.
 *
 * @public Paired with the re-export above.
 */
export { cn };
