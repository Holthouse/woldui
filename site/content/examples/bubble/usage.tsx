import { Bubble, BubbleContent, BubbleGroup } from '@woldui/react/components/ui/bubble';

export default function BubbleUsage() {
	return (
		<BubbleGroup className="w-full max-w-sm">
			<Bubble variant="muted">
				<BubbleContent>Is the new onboarding flow ready for review?</BubbleContent>
			</Bubble>
			<Bubble align="end">
				<BubbleContent>Almost. I&apos;m finishing the empty states.</BubbleContent>
			</Bubble>
			<Bubble align="end">
				<BubbleContent>I&apos;ll share a link this afternoon.</BubbleContent>
			</Bubble>
		</BubbleGroup>
	);
}
