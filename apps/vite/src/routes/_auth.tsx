import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import verneLogo from "@verne/assets/images/logo.svg";
import { DefaultLayout, TwoColumnsLayout } from "@verne/ui";
import squiggleArrow from "../assets/squiggle-arrow.svg";
import { GlobalAtmosphere } from "../components/global-atmostphere";

export const Route = createFileRoute("/_auth")({
	component: AuthLayout,
});

function AuthLayout() {
	return (
		<div className="relative min-h-screen bg-background">
			<GlobalAtmosphere className="fixed inset-0" />
			<TwoColumnsLayout
				childrenClassName="md:min-w-[500px] md:max-w-[550px]"
				className="relative z-10 bg-transparent"
				posterClassName="bg-transparent"
				widthRatio={[1, 2]}
				nesting
				poster={<Poster />}
			>
				<DefaultLayout
					className="bg-background/20 lg:bg-background/30 backdrop-blur-2xl shadow-[10px_0_40px_rgba(0,0,0,0.1)] h-full"
					mainClassName="flex flex-col justify-center px-8 md:px-12 space-y-10"
					headerProps={{
						className: "static border-none bg-transparent z-0",
						containerClass: "h-24 px-8 md:px-12 max-w-none",
						left: <AuthHeader />,
					}}
					footer={null}
					footerClassName="bg-transparent border-none px-4 md:px-12"
				>
					<Outlet />
				</DefaultLayout>
			</TwoColumnsLayout>
		</div>
	);
}

function AuthHeader() {
	return (
		<div className="flex flex-col gap-2">
			<Link
				to="/"
				className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity"
			>
				<img src={verneLogo} className="h-8 w-8" alt="Verne" />
				<span className="font-bold text-xl tracking-tight">Verne</span>
			</Link>
			<div className="flex items-end gap-1 text-neutral-600 pl-4">
				<img
					src={squiggleArrow}
					className="size-6 -scale-x-100 rotate-12 opacity-40"
					alt="back"
				/>
				<span className="text-xs font-medium -mb-2">back to home</span>
			</div>
		</div>
	);
}

function Poster() {
	return (
		<div className="relative h-full w-full overflow-hidden p-10 flex flex-col justify-end z-20">
			<blockquote className="space-y-2 text-white/90">
				<p className="text-lg leading-relaxed font-light">
					&ldquo;In consequence of inventing machines, men will be devoured by
					them.&rdquo;
				</p>
			</blockquote>
		</div>
	);
}
