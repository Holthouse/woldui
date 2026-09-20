import { Separator } from '@woldui/react/components/ui/separator';

export default function SeparatorUsage() {
	return (
		<div className="w-full max-w-sm">
			<div className="flex flex-col gap-1">
				<p className="text-sm font-medium">WoldUI</p>
				<p className="text-sm text-muted-foreground">
					A React design system with HeroUI&apos;s look.
				</p>
			</div>
			<Separator className="my-4" />
			<div className="flex h-5 items-center gap-4 text-sm">
				<a href="#usage">Docs</a>
				<Separator orientation="vertical" />
				<a href="#usage">Components</a>
				<Separator orientation="vertical" />
				<a href="#usage">Changelog</a>
			</div>
		</div>
	);
}
