import { Bell, FolderKanban, Home, Settings } from 'lucide-react';
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInset,
	SidebarMenu,
	SidebarMenuBadge,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSkeleton,
	SidebarProvider,
	SidebarTrigger
} from '@woldui/react/components/ui/sidebar';

const items = [
	{ label: 'Home', icon: Home, active: true },
	{ label: 'Projects', icon: FolderKanban, badge: 4 },
	{ label: 'Notifications', icon: Bell, badge: 12 },
	{ label: 'Settings', icon: Settings }
];

export default function SidebarUsage() {
	return (
		// In an app the provider fills the viewport. Here it is bounded and `relative`,
		// and the sidebar is `absolute` rather than fixed, so it stays inside this box.
		<SidebarProvider className="relative h-80 min-h-0 overflow-hidden rounded-xl border border-border">
			<Sidebar collapsible="icon" className="absolute h-full">
				<SidebarHeader className="px-4 py-3 text-sm font-semibold">Acme</SidebarHeader>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Workspace</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								{items.map((item) => (
									<SidebarMenuItem key={item.label}>
										<SidebarMenuButton isActive={item.active}>
											<item.icon aria-hidden />
											<span>{item.label}</span>
										</SidebarMenuButton>
										{item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
									</SidebarMenuItem>
								))}
								<SidebarMenuItem>
									<SidebarMenuSkeleton showIcon />
								</SidebarMenuItem>
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
			<SidebarInset>
				<header className="flex items-center gap-2 border-b border-border p-3">
					<SidebarTrigger />
					<span className="text-sm font-medium">Home</span>
				</header>
				<p className="p-4 text-sm text-muted-foreground">Collapse the sidebar to its icons.</p>
			</SidebarInset>
		</SidebarProvider>
	);
}
