import { cn } from "@verne/ui";

export function GlobalAtmosphere({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				"absolute inset-0 z-0 select-none pointer-events-none overflow-hidden",
				className,
			)}
		>
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
			<div className="absolute inset-0 bg-linear-to-t from-foreground/20 via-transparent to-transparent" />

			{/* Cinematic Grid (Global) */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[40px_40px]" />
		</div>
	);
}
