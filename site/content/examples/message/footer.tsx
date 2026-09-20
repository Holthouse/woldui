import { Avatar, AvatarFallback } from '@woldui/react/components/ui/avatar';
import { Bubble, BubbleContent } from '@woldui/react/components/ui/bubble';
import {
	Message,
	MessageAvatar,
	MessageContent,
	MessageFooter,
	MessageGroup
} from '@woldui/react/components/ui/message';

export default function MessageWithFooter() {
	return (
		<MessageGroup className="w-full max-w-md gap-4">
			<Message>
				<MessageAvatar>
					<Avatar>
						<AvatarFallback>JO</AvatarFallback>
					</Avatar>
				</MessageAvatar>
				<MessageContent>
					<Bubble variant="muted">
						<BubbleContent>The staging deploy is green.</BubbleContent>
					</Bubble>
					<MessageFooter>Jonas · 09:41</MessageFooter>
				</MessageContent>
			</Message>
			<Message align="end">
				<MessageContent>
					<Bubble>
						<BubbleContent>Great, promoting it now.</BubbleContent>
					</Bubble>
					<MessageFooter>Seen · 09:42</MessageFooter>
				</MessageContent>
			</Message>
		</MessageGroup>
	);
}
