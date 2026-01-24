import verneLogo from "@verne/assets/logo.svg";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="min-h-screen bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat bg-fixed relative overflow-hidden font-serif">
			{/* Full screen blur overlay */}
			<div className="absolute inset-0 backdrop-blur-sm bg-black/10" />

			<div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 text-white">
				<div className="max-w-md w-full text-center space-y-8 p-10 rounded-3xl bg-neutral-800/50 shadow-2xl border border-white/10">
					<div className="flex justify-center gap-6 items-center opacity-80 hover:opacity-100 transition-opacity">
						<a
							href="https://vite.dev"
							target="_blank"
							rel="noopener noreferrer"
							className="transition-transform hover:scale-110"
						>
							<img
								src={viteLogo}
								className="h-10 w-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
								alt="Vite logo"
							/>
						</a>
						<a
							href="https://react.dev"
							target="_blank"
							rel="noopener noreferrer"
							className="transition-transform hover:scale-110"
						>
							<img
								src={reactLogo}
								className="h-10 w-10 animate-spin-slow drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
								alt="React logo"
							/>
						</a>
					</div>

					<div className="space-y-6 flex flex-col items-center">
						<div className="relative group">
							<div className="absolute -inset-4 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-1000" />
							<img
								src={verneLogo}
								className="relative h-48 w-48 drop-shadow-2xl transform transition-transform duration-500 hover:scale-105"
								alt="Verne logo"
							/>
						</div>

						<div className="space-y-2">
							<h1 className="text-6xl font-bold tracking-tight text-white drop-shadow-lg">
								Verne
							</h1>
							<p className="text-neutral-200 font-semibold tracking-wide drop-shadow-sm text-lg">
								Vite + React Monorepo Starter
							</p>
						</div>
					</div>

					<div className="space-y-4">
						<button
							type="button"
							onClick={() => setCount((count) => count + 1)}
							className="px-8 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-full transition-all shadow-lg hover:shadow-sky-500/20 font-bold tracking-wide active:scale-95 text-lg"
						>
							count is {count}
						</button>
						<p className="text-sm text-neutral-400 font-medium">
							Edit{" "}
							<code className="text-neutral-200 font-mono bg-neutral-800 px-2 py-1 rounded-md border border-neutral-700">
								src/App.tsx
							</code>{" "}
							and save to test HMR
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
