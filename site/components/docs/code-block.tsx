import { cn } from '@woldui/react/lib/utils';
import { CopyButton } from './copy-button';
import { highlight, type Lang } from './highlight';

/** A highlighted, copyable block of code. Server component: highlighting happens at build. */
export async function CodeBlock({
	code,
	lang = 'tsx',
	className
}: {
	code: string;
	lang?: Lang;
	className?: string;
}) {
	const html = await highlight(code, lang);
	return (
		<div className={cn('code-block group relative', className)}>
			<div dangerouslySetInnerHTML={{ __html: html }} />
			<CopyButton
				value={code.trimEnd()}
				className="absolute top-2 right-2 opacity-70 group-hover:opacity-100 focus-visible:opacity-100"
			/>
		</div>
	);
}
