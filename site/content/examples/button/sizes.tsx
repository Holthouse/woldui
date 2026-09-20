import { Button } from '@woldui/react/components/ui/button';

export default function ButtonSizes() {
	return (
		<div className="flex flex-wrap items-center gap-3">
			<Button size="xs">Extra small</Button>
			<Button size="sm">Small</Button>
			<Button>Default</Button>
			<Button size="lg">Large</Button>
		</div>
	);
}
