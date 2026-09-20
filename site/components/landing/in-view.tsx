'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { slideUp } from '@woldui/react/lib/motion/variants';

const noSubscribe = () => () => {};

/**
 * Reveals a landing section as it scrolls into view — the site's one addition to the
 * library's primitives, which animate on mount rather than on scroll.
 *
 * Same rules as the primitives: the server (and the first client render) output a plain,
 * visible element, and reduced motion never animates.
 */
export function InView({ children, className }: { children: React.ReactNode; className?: string }) {
	const mounted = React.useSyncExternalStore(
		noSubscribe,
		() => true,
		() => false
	);
	const reduced = useReducedMotion();

	if (!mounted || reduced) return <div className={className}>{children}</div>;

	return (
		<motion.div
			className={className}
			variants={slideUp}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: '-80px' }}
		>
			{children}
		</motion.div>
	);
}
