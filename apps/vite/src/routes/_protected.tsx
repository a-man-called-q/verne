import { createFileRoute, Outlet } from "@tanstack/react-router";
import { DefaultLayout } from "@verne/ui";

export const Route = createFileRoute("/_protected")({
	component: ProtectedLayout,
});

function ProtectedLayout() {
	return (
		<DefaultLayout
			headerProps={{ title: "Verne Dashboard" }}
			// Di sini nanti bisa diganti layout khusus dashboard yang punya sidebar
		>
			<div className="p-6">
				<Outlet />
			</div>
		</DefaultLayout>
	);
}
