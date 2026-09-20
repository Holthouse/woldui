import { Badge } from '@woldui/react/components/ui/badge';

const variants = [
	'default',
	'primary',
	'secondary',
	'success',
	'warning',
	'destructive',
	'outline',
	'ghost',
	'link'
] as const;

export default function BadgeVariants() {
	return (
		<div className="flex flex-wrap items-center justify-center gap-2">
			{variants.map((variant) => (
				<Badge key={variant} variant={variant} className="capitalize">
					{variant}
				</Badge>
			))}
		</div>
	);
}
