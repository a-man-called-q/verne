import type { Meta, StoryObj } from "@storybook/react";
import verneLogo from "@verne/assets/images/logo.svg";
import {
	Header,
	HeaderNavigationMenuLink,
	HeaderNavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
} from "@verne/ui";

const meta: Meta<typeof Header> = {
	title: "Blocks/Header",
	component: Header,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
	args: {
		logo: <img src={verneLogo} className="h-8 w-8" alt="Verne" />,
		className: "bg-background/80 backdrop-blur-md border-b",
		menuItems: (
			<>
				<NavigationMenuItem>
					<HeaderNavigationMenuTrigger>
						Getting Started
					</HeaderNavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<a
										className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
										href="/"
									>
										<div className="mb-2 mt-4 text-lg font-medium">
											Verne UI
										</div>
										<p className="text-sm leading-tight text-muted-foreground">
											Beautifully designed components built with Radix UI and
											Tailwind CSS.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink asChild>
									<a
										href="/docs"
										className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
									>
										<div className="text-sm font-medium leading-none">
											Introduction
										</div>
										<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
											Re-usable components built using Radix UI and Tailwind
											CSS.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<HeaderNavigationMenuLink href="/docs">
						Documentation
					</HeaderNavigationMenuLink>
				</NavigationMenuItem>
			</>
		),
		rightContent: (
			<div className="flex items-center gap-2">
				<button
					type="button"
					className="text-sm font-medium hover:underline px-4 py-2"
				>
					Log in
				</button>
				<button
					type="button"
					className="bg-primary text-primary-foreground h-9 px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 shadow-sm"
				>
					Sign up
				</button>
			</div>
		),
	},
};

export const Transparent: Story = {
	args: {
		...Default.args,
		className: "bg-transparent/40 backdrop-blur-md border-white/10 text-white",
	},
	parameters: {
		backgrounds: {
			default: "dark",
		},
	},
	render: (args: React.ComponentProps<typeof Header>) => (
		<div className="min-h-[400px] w-full bg-slate-900 relative">
			<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-50" />
			<Header {...args} />
			<div className="relative z-10 p-10 text-white text-center">
				<h1 className="text-4xl font-bold">Hero Section</h1>
				<p className="mt-4 text-lg text-gray-200">
					This demonstrates the transparent header over a background.
				</p>
			</div>
		</div>
	),
};
