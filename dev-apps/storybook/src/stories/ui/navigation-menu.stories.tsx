import type { Meta, StoryObj } from "@storybook/react";
import {
	cn,
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@verne/ui";
import React from "react";

const meta: Meta<typeof NavigationMenu> = {
	title: "UI/NavigationMenu",
	component: NavigationMenu,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none",
						className,
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

export const Default: Story = {
	render: () => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<a
										className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
										href="/"
									>
										<div className="mb-2 mt-4 text-lg font-medium">
											shadcn/ui
										</div>
										<p className="text-muted-foreground text-sm leading-tight">
											Beautifully designed components built with Radix UI and
											Tailwind CSS.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<ListItem href="/docs" title="Introduction">
								Re-usable components built using Radix UI and Tailwind CSS.
							</ListItem>
							<ListItem href="/docs/installation" title="Installation">
								How to install dependencies and structure your app.
							</ListItem>
							<ListItem href="/docs/primitives/typography" title="Typography">
								Styles for headings, paragraphs, lists...etc
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Components</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
							<ListItem title="Alert Dialog">
								A modal dialog that interrupts the user with important content
								and expects a response.
							</ListItem>
							<ListItem title="Hover Card">
								For sighted users to preview content available behind a link.
							</ListItem>
							<ListItem title="Progress">
								Displays an indicator showing the completion progress of a task,
								typically displayed as a progress bar.
							</ListItem>
							<ListItem title="Scroll-area">
								Visually or semantically separates content.
							</ListItem>
							<ListItem title="Tabs">
								A set of layered sections of content—known as tab panels—that
								are displayed one at a time.
							</ListItem>
							<ListItem title="Tooltip">
								A popup that displays information related to an element when the
								element receives keyboard focus or the mouse hovers over it.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<a href="/docs">
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Documentation
						</NavigationMenuLink>
					</a>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
};
