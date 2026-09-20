const tones = ['primary', 'secondary', 'success', 'warning', 'danger'] as const;
const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

export default function ToneScale() {
	return (
		<div className="flex w-full flex-col gap-2 overflow-x-auto">
			{tones.map((tone) => (
				<div key={tone} className="flex items-center gap-2">
					<span className="w-20 shrink-0 font-mono text-xs text-muted-foreground">{tone}</span>
					{steps.map((step) => (
						<div
							key={step}
							title={`--${tone}-${step}`}
							className="h-8 min-w-8 flex-1 rounded-md"
							style={{ backgroundColor: `var(--${tone}-${step})` }}
						/>
					))}
				</div>
			))}
		</div>
	);
}
