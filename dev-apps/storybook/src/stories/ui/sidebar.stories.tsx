import type { Meta, StoryObj } from "@storybook/react";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInset,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarRail,
	SidebarTrigger,
} from "@verne/ui";
import {
	Calendar,
	ChevronUp,
	Home,
	Inbox,
	Search,
	Settings,
	User2,
} from "lucide-react";

const meta: Meta<typeof Sidebar> = {
	title: "UI/Sidebar",
	component: Sidebar,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
	decorators: [
		(Story) => (
			<div className="h-[600px] border rounded-md overflow-hidden">
				<SidebarProvider>
					<Story />
				</SidebarProvider>
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

// Menu items.
const items = [
	{
		title: "Home",
		url: "#",
		icon: Home,
	},
	{
		title: "Inbox",
		url: "#",
		icon: Inbox,
	},
	{
		title: "Calendar",
		url: "#",
		icon: Calendar,
	},
	{
		title: "Search",
		url: "#",
		icon: Search,
	},
	{
		title: "Settings",
		url: "#",
		icon: Settings,
	},
];

export const Default: Story = {
	render: () => (
		<>
			<Sidebar>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Application</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								{items.map((item) => (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton asChild>
											<a href={item.url}>
												<item.icon />
												<span>{item.title}</span>
											</a>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
			<SidebarInset>
				<header className="flex h-16 items-center gap-2 border-b px-4">
					<SidebarTrigger />
					<div className="w-px h-4 bg-border" />
					<span className="font-semibold">Dashboard</span>
				</header>
				<div className="flex flex-1 flex-col gap-4 p-4">
					<div className="grid auto-rows-min gap-4 md:grid-cols-3">
						<div className="aspect-video rounded-xl bg-muted/50" />
						<div className="aspect-video rounded-xl bg-muted/50" />
						<div className="aspect-video rounded-xl bg-muted/50" />
					</div>
					<div className="min-h-screen flex-1 rounded-xl bg-muted/50" />
				</div>
			</SidebarInset>
		</>
	),
};

export const WithFooter: Story = {
	render: () => (
		<>
			<Sidebar>
				<SidebarHeader>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton size="lg" asChild>
								<a href="/">
									<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
										<div className="size-4 rounded-sm bg-primary" />
									</div>
									<div className="flex flex-col gap-0.5 leading-none">
										<span className="font-semibold">Documentation</span>
										<span className="">v1.0.0</span>
									</div>
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Application</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								{items.map((item) => (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton asChild>
											<a href={item.url}>
												<item.icon />
												<span>{item.title}</span>
											</a>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>
				<SidebarFooter>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton>
								<User2 />
								<span>Username</span>
								<ChevronUp className="ml-auto" />
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarFooter>
			</Sidebar>
			<SidebarInset>
				<header className="flex h-16 items-center gap-2 border-b px-4">
					<SidebarTrigger />
				</header>
				<div className="p-4">
					<div className="h-full rounded-xl bg-muted/50 p-4">Content area</div>
				</div>
			</SidebarInset>
		</>
	),
};

export const RightSide: Story = {
	decorators: [
		(Story) => (
			<div className="h-[600px] border rounded-md overflow-hidden">
				<SidebarProvider>
					<Story />
				</SidebarProvider>
			</div>
		),
	],
	render: () => (
		<>
			<SidebarInset>
				<header className="flex h-16 items-center gap-2 border-b px-4 w-full justify-between">
					<div className="flex items-center gap-2">
						<SidebarTrigger className="rotate-180" />
						<div className="w-px h-4 bg-border" />
						<span className="font-semibold">Main Content</span>
					</div>
				</header>
				<div className="p-4">
					<div className="h-full rounded-xl bg-muted/50 p-4">
						<div className="max-w-2xl mx-auto space-y-4">
							<h1 className="text-2xl font-bold">Welcome back!</h1>
							<p className="text-muted-foreground">
								This is an example of a right-sided sidebar layout. The sidebar
								is positioned on the right side of the screen.
							</p>
						</div>
					</div>
				</div>
			</SidebarInset>
			<Sidebar side="right">
				<SidebarHeader>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton size="lg">
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
									<User2 className="size-4" />
								</div>
								<div className="flex flex-col gap-0.5 leading-none">
									<span className="font-semibold">John Doe</span>
									<span className="">john@example.com</span>
								</div>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Navigation</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								{items.map((item) => (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton>
											<item.icon />
											<span>{item.title}</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>
				<SidebarFooter>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton>
								<Settings />
								<span>Preferences</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarFooter>
			</Sidebar>
		</>
	),
};

export const Collapsible: Story = {
	render: () => (
		<>
			<Sidebar collapsible="icon">
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Application</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								{items.map((item) => (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton asChild>
											<a href={item.url}>
												<item.icon />
												<span>{item.title}</span>
											</a>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>
				<SidebarRail />
			</Sidebar>
			<SidebarInset>
				<header className="flex h-16 items-center gap-2 border-b px-4">
					<SidebarTrigger />
				</header>
				<div className="p-4">
					<div className="h-full rounded-xl bg-muted/50 p-4">Content area</div>
				</div>
			</SidebarInset>
		</>
	),
};
