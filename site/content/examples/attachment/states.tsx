import { CircleAlert, FileText, ImageIcon, RotateCcw } from 'lucide-react';
import {
	Attachment,
	AttachmentAction,
	AttachmentActions,
	AttachmentContent,
	AttachmentDescription,
	AttachmentGroup,
	AttachmentMedia,
	AttachmentTitle
} from '@woldui/react/components/ui/attachment';
import { Spinner } from '@woldui/react/components/ui/spinner';

export default function AttachmentStates() {
	return (
		<AttachmentGroup className="w-full max-w-2xl flex-wrap">
			<Attachment state="idle">
				<AttachmentMedia>
					<FileText aria-hidden />
				</AttachmentMedia>
				<AttachmentContent>
					<AttachmentTitle>notes.md</AttachmentTitle>
					<AttachmentDescription>Ready to upload</AttachmentDescription>
				</AttachmentContent>
			</Attachment>
			<Attachment state="uploading">
				<AttachmentMedia>
					<Spinner />
				</AttachmentMedia>
				<AttachmentContent>
					<AttachmentTitle>wireframes.png</AttachmentTitle>
					<AttachmentDescription>Uploading… 42%</AttachmentDescription>
				</AttachmentContent>
			</Attachment>
			<Attachment state="error">
				<AttachmentMedia>
					<CircleAlert aria-hidden />
				</AttachmentMedia>
				<AttachmentContent>
					<AttachmentTitle>recording.mov</AttachmentTitle>
					<AttachmentDescription>Too large (max 50 MB)</AttachmentDescription>
				</AttachmentContent>
				<AttachmentActions>
					<AttachmentAction aria-label="Retry recording.mov">
						<RotateCcw aria-hidden />
					</AttachmentAction>
				</AttachmentActions>
			</Attachment>
			<Attachment state="done">
				<AttachmentMedia>
					<ImageIcon aria-hidden />
				</AttachmentMedia>
				<AttachmentContent>
					<AttachmentTitle>logo.svg</AttachmentTitle>
					<AttachmentDescription>12 KB</AttachmentDescription>
				</AttachmentContent>
			</Attachment>
		</AttachmentGroup>
	);
}
