import { createFileRoute, Link } from "@tanstack/react-router";
import { Button, Card, CardContent, Input, Label } from "@verne/ui";

export const Route = createFileRoute("/_auth/login")({
	component: LoginPage,
});

function LoginPage() {
	return (
		<div className="w-full space-y-6">
			<div className="flex flex-col space-y-2 text-center">
				<h1 className="text-2xl font-semibold tracking-tight">Login</h1>
				<p className="text-sm text-muted-foreground">
					Enter your email below to login to your account
				</p>
			</div>
			<Card className="border-border/40 bg-background/60 backdrop-blur shadow-none">
				<CardContent className="pt-6 space-y-4">
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							placeholder="m@example.com"
							className="bg-background/50"
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="password">Password</Label>
						<Input id="password" type="password" className="bg-background/50" />
					</div>
					<Button className="w-full">Sign In</Button>
				</CardContent>
			</Card>
			<p className="px-8 text-center text-sm text-muted-foreground">
				<Link
					to="/"
					className="hover:text-primary underline underline-offset-4"
				>
					Back to Home
				</Link>
			</p>
		</div>
	);
}
