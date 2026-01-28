import { createFileRoute } from "@tanstack/react-router";
import verneLogo from "@verne/assets/images/logo.svg";
import { DefaultLayout } from "@verne/ui";
import { useState } from "react";
import { GlobalAtmosphere } from "../../components/global-atmostphere";

export const Route = createFileRoute("/_guest/")({
	component: Index,
});

function HeroSection() {
	return (
		<div className="space-y-6">
			<h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-foreground leading-none">
				Ready to <br />
				build.
			</h1>
			<p className="text-lg text-muted-foreground max-w-sm leading-relaxed">
				The environment is pre-configured. Edits reflect instantly.
			</p>
		</div>
	);
}

function TerminalBlock() {
	return (
		<div className="group relative rounded-lg bg-secondary border border-border/10 overflow-hidden shadow-2xl transition-all hover:shadow-3xl hover:scale-[1.01]">
			<div className="flex items-center justify-between px-4 py-3 border-b border-border/5 bg-foreground/5">
				<div className="flex gap-1.5 opacity-70">
					<div className="w-2.5 h-2.5 rounded-full bg-red-500" />
					<div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
					<div className="w-2.5 h-2.5 rounded-full bg-green-500" />
				</div>
				<span className="text-[10px] font-mono text-secondary-foreground/40 uppercase tracking-wider">
					Terminal
				</span>
			</div>
			<div className="p-6 font-mono text-sm text-secondary-foreground/80">
				<div className="flex items-center gap-3">
					<span className="text-primary font-bold">➜</span>
					<span>edit</span>
					<span className="text-primary-foreground bg-primary/20 px-1.5 py-0.5 rounded border border-primary/20">
						src/routes/index.tsx
					</span>
				</div>
			</div>
		</div>
	);
}

function ActionSection({
	count,
	onIncrement,
}: {
	count: number;
	onIncrement: () => void;
}) {
	return (
		<div className="pt-2">
			<button
				type="button"
				onClick={onIncrement}
				className="h-10 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg hover:shadow-xl w-full flex items-center justify-center gap-2"
			>
				<span>Count: {count}</span>
			</button>
		</div>
	);
}

function Index() {
	const [count, setCount] = useState(0);

	return (
		<div className="min-h-screen w-full relative font-sans selection:bg-primary/30 overflow-hidden bg-background">
			<GlobalAtmosphere className="fixed" />

			{/* CONTENT LAYER */}
			<div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
				{/* LEFT PANEL: GLASS CARD (1/3 Width) */}
				<DefaultLayout
					className="w-full lg:w-1/3 border-r border-border/20 bg-background/20 lg:bg-background/30 backdrop-blur-2xl h-screen shadow-[10px_0_40px_rgba(0,0,0,0.1)] min-h-0"
					mainClassName="flex flex-col justify-center px-8 md:px-12 space-y-10"
					headerProps={{
						className: "static border-none bg-transparent z-0",
						containerClass: "h-24 px-8 md:px-12 max-w-none",
						left: (
							<div className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity">
								<img src={verneLogo} className="h-8 w-8" alt="Verne" />
							</div>
						),
						right: (
							<div className="flex gap-6 text-xs font-medium tracking-wide text-muted-foreground uppercase">
								<a
									href="/docs"
									className="hover:text-foreground transition-colors"
								>
									Docs
								</a>
								<a
									href="https://github.com"
									className="hover:text-foreground transition-colors"
								>
									Github
								</a>
							</div>
						),
					}}
					footer={
						<div className="h-20 px-8 md:px-12 flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground font-mono"></div>
					}
					footerClassName="bg-transparent border-none"
				>
					<HeroSection />
					<TerminalBlock />
					<ActionSection
						count={count}
						onIncrement={() => setCount((c) => c + 1)}
					/>
				</DefaultLayout>

				{/* RIGHT PANEL: SPACER (Transparent to show global bg) */}
				<div className="hidden lg:flex flex-1 items-center justify-center pointer-events-none">
					{/* No text, no watermark, just pure atmosphere */}
				</div>
			</div>
		</div>
	);
}
