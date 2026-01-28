import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import { DefaultLayout } from "@verne/ui";

export const Route = createFileRoute("/_guest")({
	component: GuestLayout,
});

function GuestLayout() {
	const location = useLocation();
	const isHomePage = location.pathname === "/";

	return (
		<DefaultLayout
			headerProps={isHomePage ? undefined : { title: "Verne" }}
			footer={
				isHomePage ? null : (
					<div className="container mx-auto py-6 px-4 text-center text-sm text-muted-foreground">
						© 2024 Verne App. All rights reserved.
					</div>
				)
			}
		>
			<Outlet />
		</DefaultLayout>
	);
}
