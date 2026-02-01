import type * as React from "react";
import {
	NavigationMenuLink,
	NavigationMenuTrigger,
} from "../components/navigation/navigation-menu";
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
	left?: React.ReactNode;
	right?: React.ReactNode;
	children?: React.ReactNode;
	containerClass?: string;
}

export function Header({
	className,
	containerClass,
	left,
	right,
	children,
	...props
}: HeaderProps) {
	return (
		<header className={cn("w-full z-50 sticky top-0", className)} {...props}>
			<div
				className={cn(
					"container flex min-h-16 items-center mx-auto px-4 md:px-6 justify-between gap-4",
					containerClass,
				)}
			>
				{/* Left Section (e.g., Logo) */}
				<div className="flex items-center gap-6 md:gap-8 shrink-0">{left}</div>

				{/* Middle Section (e.g., Navigation) */}
				<div className="flex-1 flex items-center justify-center">
					{children}
				</div>

				{/* Right Section (e.g., Actions) */}
				<div className="flex items-center gap-4 shrink-0">{right}</div>
			</div>
		</header>
	);
}
