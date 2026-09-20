import { Button } from '@woldui/react/components/ui/button';

const variants = [
	'solid',
	'flat',
	'bordered',
	'light',
	'faded',
	'shadow',
	'ghost',
	'link'
] as const;

export default function ButtonVariants() {
	return (
		<div className="flex flex-wrap items-center justify-center gap-3">
			{variants.map((variant) => (
				<Button key={variant} variant={variant} className="capitalize">
					{variant}
				</Button>
			))}
		</div>
	);
}
