import { ExternalLink } from 'lucide-react';
import { links } from '@/lib/nav';
import { CodeBlock } from './code-block';

type DocHeaderProps = {
	title: string;
	description: string;
	/** Source path under src/, without extension: "components/ui/button". */
	source?: string;
	/** Names to show in the import line, e.g. ["Button"]. */
	imports?: string[];
	/** The primitive this wraps, for the "Built on" link. */
	primitive?: { name: string; href: string };
};

/** Title, lead paragraph, source/primitive links and the import line at the top of a page. */
export async function DocHeader({
	title,
	description,
	source,
	imports,
	primitive
}: DocHeaderProps) {
	return (
		<header className="not-prose mb-8 flex flex-col gap-4">
			<div className="flex flex-col gap-2">
				<h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
				<p className="text-lg text-muted-foreground">{description}</p>
			</div>
			{(source || primitive) && (
				<div className="flex flex-wrap gap-2 text-xs">
					{source && (
						<a
							className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 font-medium text-muted-foreground transition-colors hover:text-foreground"
							href={links.source(source)}
							target="_blank"
							rel="noreferrer"
						>
							Source <ExternalLink className="size-3" aria-hidden />
						</a>
					)}
					{primitive && (
						<a
							className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 font-medium text-muted-foreground transition-colors hover:text-foreground"
							href={primitive.href}
							target="_blank"
							rel="noreferrer"
						>
							Built on {primitive.name} <ExternalLink className="size-3" aria-hidden />
						</a>
					)}
				</div>
			)}
			{source && imports && imports.length > 0 && (
				<CodeBlock code={`import { ${imports.join(', ')} } from '@woldui/react/${source}';`} />
			)}
		</header>
	);
}
