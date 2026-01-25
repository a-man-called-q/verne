import verneLogo from "@verne/assets/images/logo.svg";
import {
	Header,
	HeaderNavigationMenuLink,
	HeaderNavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
} from "@verne/ui";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="min-h-screen bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat bg-fixed relative overflow-hidden font-sans">
			<div className="absolute inset-0 backdrop-blur-sm bg-black/10" />

			<Header
				logo={<img src={verneLogo} className="h-8 w-8" alt="Verne" />}
				className="bg-transparent/40 backdrop-blur-md border-white/10 text-white"
				menuItems={
					<>
						<NavigationMenuItem>
							<HeaderNavigationMenuTrigger>
								Getting Started
							</HeaderNavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
									<li className="row-span-3">
										<NavigationMenuLink asChild>
											<a
												className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
												href="/"
											>
												<div className="mb-2 mt-4 text-lg font-medium">
													Verne UI
												</div>
												<p className="text-sm leading-tight text-muted-foreground">
													Beautifully designed components built with Radix UI
													and Tailwind CSS.
												</p>
											</a>
										</NavigationMenuLink>
									</li>
									<li>
										<NavigationMenuLink asChild>
											<a
												href="/docs"
												className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
											>
												<div className="text-sm font-medium leading-none">
													Introduction
												</div>
												<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
													Re-usable components built using Radix UI and Tailwind
													CSS.
												</p>
											</a>
										</NavigationMenuLink>
									</li>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<HeaderNavigationMenuLink href="/docs">
								Documentation
							</HeaderNavigationMenuLink>
						</NavigationMenuItem>
					</>
				}
				rightContent={
					<div className="flex items-center gap-2">
						<button
							type="button"
							className="text-sm font-medium hover:underline px-4 py-2"
						>
							Log in
						</button>
						<button
							type="button"
							className="bg-primary text-primary-foreground h-9 px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 shadow-sm"
						>
							Sign up
						</button>
					</div>
				}
			/>

			<div className="relative z-10 min-h-[calc(100vh-64px)] flex flex-col items-center justify-center p-4 text-white">
				<div className="max-w-md w-full text-center space-y-8 p-10 rounded-3xl bg-neutral-800/30 shadow-2xl border border-white/40">
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
