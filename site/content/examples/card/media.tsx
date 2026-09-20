import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@woldui/react/components/ui/card';

// A stand-in cover image, inlined so the example works offline.
const cover = `data:image/svg+xml,${encodeURIComponent(
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 160"><defs><linearGradient id="g" x2="1" y2="1"><stop offset="0" stop-color="#006fee"/><stop offset="1" stop-color="#17c964"/></linearGradient></defs><rect width="320" height="160" fill="url(#g)"/></svg>'
)}`;

export default function CardMedia() {
	return (
		<Card className="w-full max-w-xs">
			{/* An image as the first child sits flush with the top edge. */}
			<img src={cover} alt="" className="aspect-2/1 w-full object-cover" />
			<CardHeader>
				<CardTitle>Mobile app launch</CardTitle>
				<CardDescription>Case study · 6 min read</CardDescription>
			</CardHeader>
			<CardFooter className="text-xs text-muted-foreground">Published September 2026</CardFooter>
		</Card>
	);
}
