import { Star } from 'lucide-react';
import { Toggle } from '@woldui/react/components/ui/toggle';

const sizes = ['sm', 'default', 'lg'] as const;

export default function ToggleVariants() {
	return (
		<div className="flex flex-col items-center gap-3">
			{(['default', 'outline'] as const).map((variant) => (
				<div key={variant} className="flex items-center gap-2">
					{sizes.map((size) => (
						<Toggle key={size} variant={variant} size={size}>
							<Star aria-hidden /> Favourite
						</Toggle>
					))}
				</div>
			))}
		</div>
	);
}
