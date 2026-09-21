import { Button } from '@woldui/react/components/ui/button';

const variants = ['solid', 'flat', 'bordered', 'faded', 'shadow', 'light'] as const;
const tones = ['default', 'primary', 'secondary', 'success', 'warning', 'danger'] as const;

/** Every button shape in every tone — the HeroUI grid at a glance. */
export function VariantGrid() {
	return (
		<div className="overflow-x-auto rounded-3xl border border-border bg-content1/50 p-6 sm:p-8">
			{/* w-max + mx-auto: centred when the card is wider than the grid; when it is narrower, the
			    auto margins collapse to zero and the card scrolls sideways instead. */}
			<div className="mx-auto flex w-max flex-col gap-3">
				{variants.map((variant) => (
					<div key={variant} className="flex items-center gap-3">
						<code className="w-20 shrink-0 font-mono text-xs text-muted-foreground">{variant}</code>
						{tones.map((tone) => (
							<Button
								key={tone}
								variant={variant}
								tone={tone}
								size="sm"
								className="w-24 capitalize"
							>
								{tone}
							</Button>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
