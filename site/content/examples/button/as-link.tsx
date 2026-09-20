import { Button } from '@woldui/react/components/ui/button';

export default function ButtonAsLink() {
	return (
		<Button asChild variant="bordered">
			<a href="https://github.com/Holthouse/woldui">View on GitHub</a>
		</Button>
	);
}
