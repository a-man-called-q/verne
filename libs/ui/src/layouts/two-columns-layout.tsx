import * as React from "react";
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
	/**
	 * Ratio of the columns [children, poster].
	 * Each value represents a fraction unit (fr).
	 * @default [1, 1]
	 * @example [2, 1] // Children takes 2/3, Poster takes 1/3
	 */
	widthRatio?: [number, number];
	/**
	 * If true, children are rendered directly without wrapper styling.
	 * Use this when nesting another layout component (e.g. DefaultLayout).
	 * @default false
	 */
	nesting?: boolean;
	/**
	 * Class name for the poster column.
	 */
	posterClassName?: string;
	/**
	 * Class name for the children column.
	 */
	childrenClassName?: string;
}

/**
 * A layout with two columns: a poster column (branding/image) and a content column (form).
 *
 * You can customize the column widths by using the `widthRatio` prop or passing a Tailwind grid class to `className`.
 * The default is `widthRatio={[1, 1]}` (50% / 50%).
 */
export function TwoColumnsLayout({
	children,
	poster,
	posterPosition = "right",
	widthRatio,
	nesting,
	className,
	posterClassName,
	childrenClassName,
	style,
	...props
}: TwoColumnsLayoutProps) {
	// Calculate grid template columns based on ratio and position
	const gridTemplateColumns = React.useMemo(() => {
		if (!widthRatio) return undefined;

		const [childrenRatio, posterRatio] = widthRatio;

		// Note: We use inline style for grid-template-columns.
		// Since the grid layout is only active on lg screens (via lg:grid class),
		// this inline style effectively only impacts the layout when grid is active.
		// On mobile, the display is block, so grid-template-columns has no effect.

		if (posterPosition === "right") {
			// Layout: [Children] [Poster]
			return `${childrenRatio}fr ${posterRatio}fr`;
		}
		// Layout: [Poster] [Children]
		return `${posterRatio}fr ${childrenRatio}fr`;
	}, [widthRatio, posterPosition]);

	return (
		<div
			className={cn("w-full min-h-screen lg:grid lg:grid-cols-2", className)}
			style={{
				...(gridTemplateColumns ? { gridTemplateColumns } : {}),
				...style,
			}}
			{...props}
		>
			<section
				className={cn(
					"hidden lg:flex flex-col h-full bg-muted text-white",
					posterPosition === "right" ? "order-last" : "order-first",
					posterClassName,
				)}
			>
				{poster}
			</section>
			{nesting ? (
				<section className={cn("h-full", childrenClassName)}>
					{children}
				</section>
			) : (
				<section className="flex items-center justify-center py-12">
					<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] px-4 sm:px-0">
						{children}
					</div>
				</section>
			)}
		</div>
	);
}
