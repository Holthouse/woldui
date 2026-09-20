import Link from 'next/link';
import props from '@/generated/props.json';

type Prop = {
	name: string;
	type: string;
	default: string | null;
	required: boolean;
	description: string;
};

const table = props as Record<string, Prop[]>;

type PropsTableProps = {
	/** Module and export, as in generated/props.json: "components/ui/button#Button". */
	of: string;
	/** The primitive whose props the component also accepts, e.g. Radix Dialog.Content. */
	inherits?: { name: string; href?: string };
};

/**
 * The props WoldUI itself declares for one export. Inherited DOM and Radix props are not
 * listed — the `inherits` line says where to find them.
 */
export function PropsTable({ of, inherits }: PropsTableProps) {
	const rows = table[of];
	if (!rows) throw new Error(`PropsTable: no generated props for "${of}". Run pnpm generate.`);
	const exportName = of.split('#')[1];

	return (
		<div className="not-prose my-6 flex flex-col gap-2">
			<h3 className="font-mono text-sm font-semibold">{`<${exportName} />`}</h3>
			{rows.length > 0 ? (
				<div className="overflow-x-auto rounded-xl border border-border">
					<table className="w-full text-left text-sm">
						<thead className="bg-content2/60 text-xs text-muted-foreground">
							<tr>
								<th className="px-4 py-2 font-medium">Prop</th>
								<th className="px-4 py-2 font-medium">Type</th>
								<th className="px-4 py-2 font-medium">Default</th>
							</tr>
						</thead>
						<tbody>
							{rows.map((p) => (
								<tr key={p.name} className="border-t border-border align-top">
									<td className="px-4 py-2.5 font-mono text-xs font-medium whitespace-nowrap text-primary-text">
										{p.name}
										{p.required && <span className="text-danger-text">*</span>}
									</td>
									<td className="px-4 py-2.5">
										<code className="font-mono text-xs text-foreground/80">{p.type}</code>
										{p.description && (
											<p className="mt-1 text-xs text-muted-foreground">{p.description}</p>
										)}
									</td>
									<td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">
										{p.default ?? '—'}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<p className="text-sm text-muted-foreground">No props of its own.</p>
			)}
			{inherits && (
				<p className="text-xs text-muted-foreground">
					Also accepts every prop of{' '}
					{inherits.href?.startsWith('/') ? (
						<Link
							href={inherits.href}
							className="font-medium text-foreground underline underline-offset-4"
						>
							{inherits.name}
						</Link>
					) : inherits.href ? (
						<a
							href={inherits.href}
							className="font-medium text-foreground underline underline-offset-4"
							target="_blank"
							rel="noreferrer"
						>
							{inherits.name}
						</a>
					) : (
						<code className="font-mono">{inherits.name}</code>
					)}
					.
				</p>
			)}
		</div>
	);
}
