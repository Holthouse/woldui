import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow
} from '@woldui/react/components/ui/table';

const invoices = [
	{ id: 'INV-1042', client: 'Northwind', status: 'Paid', hours: 32 },
	{ id: 'INV-1043', client: 'Contoso', status: 'Pending', hours: 18 },
	{ id: 'INV-1044', client: 'Fabrikam', status: 'Overdue', hours: 24 },
	{ id: 'INV-1045', client: 'Tailspin', status: 'Paid', hours: 12 }
];

export default function TableUsage() {
	return (
		<Table>
			<TableCaption>Invoices issued in September.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Invoice</TableHead>
					<TableHead>Client</TableHead>
					<TableHead>Status</TableHead>
					<TableHead className="text-right">Hours</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{invoices.map((invoice) => (
					<TableRow key={invoice.id}>
						<TableCell className="font-medium">{invoice.id}</TableCell>
						<TableCell>{invoice.client}</TableCell>
						<TableCell>{invoice.status}</TableCell>
						<TableCell className="text-right tabular-nums">{invoice.hours}</TableCell>
					</TableRow>
				))}
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={3}>Total</TableCell>
					<TableCell className="text-right tabular-nums">
						{invoices.reduce((sum, invoice) => sum + invoice.hours, 0)}
					</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	);
}
