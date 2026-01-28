import type * as React from "react";
import { cn } from "../lib/utils";

export interface TwoColumnsLayoutProps
	extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The main content (usually the form).
	 */
	children: React.ReactNode;
	/**
	 * The content for the poster column (branding/image).
	 * This column is hidden on mobile screens by default.
	 */
	poster: React.ReactNode;
	/**
	 * Position of the poster column.
	 * @default "right"
	 */
	posterPosition?: "left" | "right";
}

/**
 * A layout with two columns: a poster column (branding/image) and a content column (form).
 *
 * You can customize the column widths by passing a Tailwind grid class to `className`.
 * The default is `lg:grid-cols-2` (50% / 50%).
 *
 * Examples:
 * - `className="lg:grid-cols-[1fr_2fr]"`: Content is 2x wider than poster
 * - `className="lg:grid-cols-[400px_1fr]"`: Poster is fixed 400px
 */
export function TwoColumnsLayout({
	children,
	poster,
	posterPosition = "right",
	className,
	...props
}: TwoColumnsLayoutProps) {
	return (
		<div
			className={cn("w-full min-h-screen lg:grid lg:grid-cols-2", className)}
			{...props}
		>
			<section
				className={cn(
					"hidden lg:flex flex-col h-full bg-muted text-white",
					posterPosition === "right" ? "order-last" : "order-first",
				)}
			>
				{poster}
			</section>
			<section className="flex items-center justify-center py-12">
				<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] px-4 sm:px-0">
					{children}
				</div>
			</section>
		</div>
	);
}
