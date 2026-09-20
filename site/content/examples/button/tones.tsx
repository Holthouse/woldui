import { Button } from '@woldui/react/components/ui/button';

const tones = ['default', 'primary', 'secondary', 'success', 'warning', 'danger'] as const;
const variants = ['solid', 'flat', 'bordered'] as const;

export default function ButtonTones() {
	return (
		<div className="flex flex-col gap-3">
			{variants.map((variant) => (
				<div key={variant} className="flex flex-wrap gap-2">
					{tones.map((tone) => (
						<Button key={tone} variant={variant} tone={tone} className="capitalize">
							{tone}
						</Button>
					))}
				</div>
			))}
		</div>
	);
}
