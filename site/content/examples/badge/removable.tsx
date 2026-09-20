'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { Badge } from '@woldui/react/components/ui/badge';
import { Button } from '@woldui/react/components/ui/button';

const allTags = ['Design', 'Frontend', 'Research', 'Urgent'];

export default function BadgeRemovable() {
	const [tags, setTags] = React.useState(allTags);

	return (
		<div className="flex flex-col items-center gap-3">
			<ul aria-label="Active filters" className="flex flex-wrap gap-2">
				{tags.map((tag) => (
					<li key={tag}>
						<Badge variant="secondary">
							{tag}
							<button
								type="button"
								data-icon="inline-end"
								aria-label={`Remove ${tag} filter`}
								onClick={() => setTags((current) => current.filter((t) => t !== tag))}
								className="-mr-1 rounded-full p-0.5 hover:bg-secondary-200"
							>
								<X className="size-3" aria-hidden />
							</button>
						</Badge>
					</li>
				))}
			</ul>
			{tags.length === 0 && <p className="text-sm text-muted-foreground">No filters.</p>}
			<Button size="sm" variant="light" onClick={() => setTags(allTags)}>
				Reset filters
			</Button>
		</div>
	);
}
