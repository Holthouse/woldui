import { Bubble, BubbleContent, BubbleGroup } from '@woldui/react/components/ui/bubble';
import {
	MessageScroller,
	MessageScrollerButton,
	MessageScrollerContent,
	MessageScrollerItem,
	MessageScrollerProvider,
	MessageScrollerViewport
} from '@woldui/react/components/ui/message-scroller';

const messages = [
	'The launch checklist is ready for review.',
	'Great, who is signing off on the copy?',
	'Maya has the copy. I have the screenshots.',
	'Can we ship on Thursday?',
	'Thursday works. I will book the release window.',
	'Perfect, thanks!'
];

export default function MessageScrollerUsage() {
	return (
		<MessageScrollerProvider>
			<MessageScroller className="h-56 w-full max-w-md rounded-xl border border-border">
				<MessageScrollerViewport aria-label="Conversation" className="p-3">
					<MessageScrollerContent>
						<BubbleGroup>
							{messages.map((text, i) => (
								<MessageScrollerItem key={i} messageId={String(i)}>
									<Bubble align={i % 2 ? 'end' : 'start'} variant={i % 2 ? 'secondary' : 'default'}>
										<BubbleContent>{text}</BubbleContent>
									</Bubble>
								</MessageScrollerItem>
							))}
						</BubbleGroup>
					</MessageScrollerContent>
				</MessageScrollerViewport>
				<MessageScrollerButton />
			</MessageScroller>
		</MessageScrollerProvider>
	);
}
