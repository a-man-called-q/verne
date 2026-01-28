import type * as React from "react";
import { Header, type HeaderProps } from "../blocks/header";
import { cn } from "../lib/utils";

export interface DefaultLayoutProps
	extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The content to be rendered inside the layout.
	 */
	children: React.ReactNode;
	/**
	 * Props to pass to the default Header block.
	 * If not provided, no header will be rendered.
	 */
	headerProps?: HeaderProps;
	/**
	 * Optional footer component.
	 */
	footer?: React.ReactNode;
	/**
	 * Class name for the main content wrapper.
	 */
	mainClassName?: string;
	/**
	 * Class name for the footer wrapper.
	 */
	footerClassName?: string;
}

function DefaultLayoutHeader({
	headerProps,
}: Pick<DefaultLayoutProps, "headerProps">) {
	if (!headerProps) {
		return null;
	}
	return <Header {...headerProps} />;
}

function DefaultLayoutContent({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return <main className={cn("flex-1", className)}>{children}</main>;
}

function DefaultLayoutFooter({
	footer,
	className,
}: {
	footer?: React.ReactNode;
	className?: string;
}) {
	if (!footer) {
		return null;
	}
	return (
		<footer className={cn("border-t bg-background", className)}>
			{footer}
		</footer>
	);
}

export function DefaultLayout({
	children,
	headerProps,
	footer,
	className,
	mainClassName,
	footerClassName,
	...props
}: DefaultLayoutProps) {
	return (
		<div
			className={cn("flex min-h-screen flex-col bg-background", className)}
			{...props}
		>
			<DefaultLayoutHeader headerProps={headerProps} />
			<DefaultLayoutContent className={mainClassName}>
				{children}
			</DefaultLayoutContent>
			<DefaultLayoutFooter footer={footer} className={footerClassName} />
		</div>
	);
}
