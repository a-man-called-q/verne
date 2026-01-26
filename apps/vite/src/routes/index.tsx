import { createFileRoute } from "@tanstack/react-router";
import verneLogo from "@verne/assets/images/logo.svg";
import { useState } from "react";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	const [count, setCount] = useState(0);

	return (
		<div className="min-h-screen w-full relative font-sans selection:bg-primary/30 overflow-hidden bg-background">
			{/* GLOBAL ATMOSPHERE (Fixed Background) */}
			<div className="fixed inset-0 z-0 select-none pointer-events-none">
				{/* The Image - Opacity 100 for maximum brightness */}
				<div
					className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
					style={{ backgroundImage: "url('/background.jpg')" }}
				/>

				{/* Film Grain Texture */}
				<div
					className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
					}}
				/>

				{/* Global Gradient Vignette */}
				<div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />

				{/* Cinematic Grid (Global) */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
			</div>

			{/* CONTENT LAYER */}
			<div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
				{/* LEFT PANEL: GLASS CARD (1/3 Width) */}
				<div className="w-full lg:w-1/3 flex flex-col border-r border-border/20 bg-background/30 backdrop-blur-2xl h-screen shadow-[10px_0_40px_rgba(0,0,0,0.1)]">
					{/* Header inside Glass Panel */}
					<header className="h-24 px-8 md:px-12 flex items-center justify-between">
						<div className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity">
							<img src={verneLogo} className="h-8 w-8" alt="Verne" />
						</div>
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
					</header>

					{/* Main Content Area */}
					<main className="flex-1 flex flex-col justify-center px-8 md:px-12 space-y-10">
						<div className="space-y-6">
							<h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-foreground leading-none">
								Ready to <br />
								build.
							</h1>
							<p className="text-lg text-muted-foreground max-w-sm leading-relaxed">
								The environment is pre-configured. Edits reflect instantly.
							</p>
						</div>

						{/* Interactive Terminal Block */}
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

						{/* Actions - Full Width Button using Primary Theme */}
						<div className="pt-2">
							<button
								type="button"
								onClick={() => setCount((c) => c + 1)}
								className="h-10 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg hover:shadow-xl w-full flex items-center justify-center gap-2"
							>
								<span>Count: {count}</span>
							</button>
						</div>
					</main>

					<footer className="h-20 px-8 md:px-12 flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground font-mono"></footer>
				</div>

				{/* RIGHT PANEL: SPACER (Transparent to show global bg) */}
				<div className="hidden lg:flex flex-1 items-center justify-center pointer-events-none">
					{/* No text, no watermark, just pure atmosphere */}
				</div>
			</div>
		</div>
	);
}
