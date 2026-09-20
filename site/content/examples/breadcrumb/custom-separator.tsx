import { Slash } from 'lucide-react';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from '@woldui/react/components/ui/breadcrumb';

export default function BreadcrumbCustomSeparator() {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="#">Team</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator>
					<Slash />
				</BreadcrumbSeparator>
				<BreadcrumbItem>
					<BreadcrumbPage>Members</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}
