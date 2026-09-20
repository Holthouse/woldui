import { Button } from '@woldui/react/components/ui/button';
import { Spinner } from '@woldui/react/components/ui/spinner';

export default function SpinnerInButton() {
	return (
		<Button disabled aria-busy>
			{/* The button already says it is busy, so the spinner is decorative here. */}
			<Spinner aria-hidden />
			Saving…
		</Button>
	);
}
