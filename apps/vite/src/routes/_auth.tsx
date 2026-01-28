import { createFileRoute, Outlet } from "@tanstack/react-router";
import { TwoColumnsLayout } from "@verne/ui";
import { GlobalAtmosphere } from "../components/global-atmostphere";

export const Route = createFileRoute("/_auth")({
	component: AuthLayout,
});

function AuthLayout() {
	return (
		<TwoColumnsLayout
			poster={
				<div className="relative h-full w-full bg-zinc-900 overflow-hidden">
					<GlobalAtmosphere />
					<div className="relative z-20 flex h-full flex-col justify-between p-10">
						<div className="flex items-center text-lg font-medium text-white">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="mr-2 h-6 w-6"
								aria-hidden="true"
							>
								<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
							</svg>
							Verne Inc
						</div>
						<div className="space-y-2 text-white">
							<p className="text-lg">
								&ldquo;Secure, fast, and developer-friendly. The best platform
								for building your next big idea.&rdquo;
							</p>
						</div>
					</div>
				</div>
			}
		>
			<Outlet />
		</TwoColumnsLayout>
	);
}
