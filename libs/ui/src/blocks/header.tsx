import type * as React from "react";
import {
	NavigationMenu,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "../components/navigation-menu";
import { cn } from "../lib/utils";

export function HeaderNavigationMenuTrigger({
	className,
	...props
}: React.ComponentProps<typeof NavigationMenuTrigger>) {
	return (
		<NavigationMenuTrigger
			className={cn(
				"bg-transparent! hover:bg-transparent! hover:text-white/80 focus:text-white/80 data-[state=open]:bg-transparent! data-[state=open]:text-white/80 transition-opacity hover:opacity-75",
				className,
			)}
			{...props}
		/>
	);
}

export function HeaderNavigationMenuLink({
	className,
	...props
}: React.ComponentProps<typeof NavigationMenuLink>) {
	return (
		<NavigationMenuLink
			className={cn(
				"group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-transparent! hover:bg-transparent! hover:text-white/80 focus:text-white/80 data-[state=open]:bg-transparent! data-[state=open]:text-white/80 transition-opacity hover:opacity-75 focus-visible:ring-ring/50 outline-none focus-visible:ring-[3px] focus-visible:outline-1",
				className,
			)}
			{...props}
		/>
	);
}

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
	logo?: React.ReactNode;
	title?: string;
	menuItems?: React.ReactNode;
	rightContent?: React.ReactNode;
	containerClass?: string;
}

export function Header({
	className,
	containerClass,
	logo,
	title = "Verne",
	menuItems,
	rightContent,
	...props
}: HeaderProps) {
	return (
		<header
			className={cn(
				"w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 z-50 sticky top-0",
				className,
			)}
			{...props}
		>
			<div
				className={cn(
					"container flex h-16 items-center mx-auto px-4 md:px-6 justify-between gap-4",
					containerClass,
				)}
			>
				<div className="flex items-center gap-6 md:gap-8">
					{/* Logo Section */}
					<a
						href="/"
						className="flex items-center gap-2 font-bold text-lg shrink-0"
					>
						{logo ? logo : <div className="size-8 bg-primary/20 rounded-md" />}
						<span className="hidden md:inline-block font-logo">{title}</span>
					</a>

					{/* Main Navigation */}
					{menuItems && (
						<div className="hidden md:flex items-center">
							<NavigationMenu viewport={false}>
								<NavigationMenuList>{menuItems}</NavigationMenuList>
								<NavigationMenuViewport className="origin-top-center bg-popover/80 backdrop-blur-md text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-(--radix-navigation-menu-viewport-height) w-full overflow-hidden rounded-xl border border-white/10 shadow-lg md:w-(--radix-navigation-menu-viewport-width)" />
							</NavigationMenu>
						</div>
					)}
				</div>

				{/* Right Section */}
				<div className="flex items-center gap-4">{rightContent}</div>
			</div>
		</header>
	);
}
