import { X } from 'lucide-react';
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

const files = [
	{ name: 'cover.png', size: '1.2 MB', swatch: 'from-primary-300 to-primary-600' },
	{ name: 'hero.png', size: '860 KB', swatch: 'from-secondary-300 to-secondary-600' },
	{ name: 'icon.png', size: '24 KB', swatch: 'from-success-300 to-success-600' }
];

export default function AttachmentVertical() {
	return (
		<AttachmentGroup>
			{files.map((file) => (
				<Attachment key={file.name} orientation="vertical">
					<AttachmentMedia variant="image">
						<div className={`size-full bg-linear-to-br ${file.swatch}`} />
					</AttachmentMedia>
					<AttachmentContent>
						<AttachmentTitle>{file.name}</AttachmentTitle>
						<AttachmentDescription>{file.size}</AttachmentDescription>
					</AttachmentContent>
					<AttachmentActions>
						<AttachmentAction variant="solid" aria-label={`Remove ${file.name}`}>
							<X aria-hidden />
						</AttachmentAction>
					</AttachmentActions>
				</Attachment>
			))}
		</AttachmentGroup>
	);
}
