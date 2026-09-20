import { Avatar, AvatarFallback } from '@woldui/react/components/ui/avatar';
import { Bubble, BubbleContent } from '@woldui/react/components/ui/bubble';
import {
	Message,
	MessageAvatar,
	MessageContent,
	MessageGroup,
	MessageHeader
} from '@woldui/react/components/ui/message';

export default function MessageUsage() {
	return (
		<MessageGroup role="log" aria-label="Conversation with Maya" className="w-full max-w-md gap-4">
			<Message>
				<MessageAvatar>
					<Avatar>
						<AvatarFallback>ML</AvatarFallback>
					</Avatar>
				</MessageAvatar>
				<MessageContent>
					<MessageHeader>Maya Lindqvist</MessageHeader>
					<Bubble variant="muted">
						<BubbleContent>Could you review the pricing page copy before Friday?</BubbleContent>
					</Bubble>
				</MessageContent>
			</Message>
			<Message align="end">
				<MessageContent>
					<MessageHeader>You</MessageHeader>
					<Bubble>
						<BubbleContent>Sure, I&apos;ll leave comments tomorrow morning.</BubbleContent>
					</Bubble>
				</MessageContent>
			</Message>
		</MessageGroup>
	);
}
