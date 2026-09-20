import { FileText, X } from 'lucide-react';
import {
	Attachment,
	AttachmentAction,
	AttachmentActions,
	AttachmentContent,
	AttachmentDescription,
	AttachmentMedia,
	AttachmentTitle,
	AttachmentTrigger
} from '@woldui/react/components/ui/attachment';

export default function AttachmentUsage() {
	return (
		<Attachment>
			{/* Covers the whole attachment, so a click anywhere opens the file. */}
			<AttachmentTrigger aria-label="Open design-brief.pdf" />
			<AttachmentMedia>
				<FileText aria-hidden />
			</AttachmentMedia>
			<AttachmentContent>
				<AttachmentTitle>design-brief.pdf</AttachmentTitle>
				<AttachmentDescription>PDF · 184 KB</AttachmentDescription>
			</AttachmentContent>
			<AttachmentActions>
				<AttachmentAction aria-label="Remove design-brief.pdf">
					<X aria-hidden />
				</AttachmentAction>
			</AttachmentActions>
		</Attachment>
	);
}
