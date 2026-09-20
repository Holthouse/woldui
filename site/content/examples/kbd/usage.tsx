import { Kbd, KbdGroup } from '@woldui/react/components/ui/kbd';

export default function KbdUsage() {
	return (
		<p className="text-sm text-muted-foreground">
			Press{' '}
			<KbdGroup>
				<Kbd>Ctrl</Kbd>
				<Kbd>K</Kbd>
			</KbdGroup>{' '}
			to open the command menu.
		</p>
	);
}
