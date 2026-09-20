import {
	Bubble,
	BubbleContent,
	BubbleGroup,
	BubbleReactions
} from '@woldui/react/components/ui/bubble';

export default function BubbleReactionsExample() {
	return (
		<BubbleGroup className="w-full max-w-sm gap-6">
			<Bubble variant="muted">
				<BubbleContent>The release is out. Thanks, everyone!</BubbleContent>
				<BubbleReactions>
					<span aria-hidden>🎉 4</span>
					<span className="sr-only">4 people reacted with a party popper</span>
				</BubbleReactions>
			</Bubble>
			<Bubble align="end">
				<BubbleContent>Great work on the changelog.</BubbleContent>
				<BubbleReactions align="start">
					<span aria-hidden>👍 1</span>
					<span className="sr-only">1 person reacted with a thumbs up</span>
				</BubbleReactions>
			</Bubble>
		</BubbleGroup>
	);
}
