import { Button } from '@woldui/react/components/ui/button';
import { Input } from '@woldui/react/components/ui/input';

export default function InputWithButton() {
	return (
		<div className="flex w-full max-w-sm items-center gap-2">
			<Input type="email" placeholder="you@example.com" aria-label="Email address" />
			<Button>Subscribe</Button>
		</div>
	);
}
