import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle
} from '@woldui/react/components/ui/navigation-menu';

const products = [
	{ title: 'Projects', description: 'Plan work and track it to done.' },
	{ title: 'Reports', description: 'See what shipped and what is stuck.' },
	{ title: 'Integrations', description: 'Connect the tools your team uses.' }
];

export default function NavigationMenuUsage() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Product</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-72 gap-1">
							{products.map((item) => (
								<li key={item.title}>
									<NavigationMenuLink href="#" className="flex-col items-start gap-0.5">
										<span className="font-medium">{item.title}</span>
										<span className="text-muted-foreground">{item.description}</span>
									</NavigationMenuLink>
								</li>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
						Docs
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
