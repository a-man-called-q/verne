import type { Meta, StoryObj } from "@storybook/react";
import { Button, Input, Label, TwoColumnsLayout } from "@verne/ui";

const meta: Meta<typeof TwoColumnsLayout> = {
	title: "Layouts/TwoColumnsLayout",
	component: TwoColumnsLayout,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TwoColumnsLayout>;

const AuthForm = () => (
	<div className="grid gap-6">
		<div className="flex flex-col space-y-2 text-center">
			<h1 className="text-2xl font-semibold tracking-tight">
				Create an account
			</h1>
			<p className="text-sm text-muted-foreground">
				Enter your email below to create your account
			</p>
		</div>
		<div className="grid gap-2">
			<div className="grid gap-1">
				<Label className="sr-only" htmlFor="email">
					Email
				</Label>
				<Input
					id="email"
					placeholder="name@example.com"
					type="email"
					autoCapitalize="none"
					autoComplete="email"
					autoCorrect="off"
				/>
			</div>
			<Button>Sign In with Email</Button>
		</div>
		<p className="px-8 text-center text-sm text-muted-foreground">
			By clicking continue, you agree to our{" "}
			<a
				href="/terms"
				className="underline underline-offset-4 hover:text-primary"
			>
				Terms of Service
			</a>{" "}
			and{" "}
			<a
				href="/privacy"
				className="underline underline-offset-4 hover:text-primary"
			>
				Privacy Policy
			</a>
			.
		</p>
	</div>
);

const BrandingVisual = () => (
	<div className="relative h-full w-full bg-zinc-900">
		<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80')] bg-cover bg-center opacity-50" />
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
			<blockquote className="space-y-2 text-white">
				<p className="text-lg">
					&ldquo;This library has saved me countless hours of work and helped me
					deliver stunning designs to my clients faster than ever before.&rdquo;
				</p>
				<footer className="text-sm">Sofia Davis</footer>
			</blockquote>
		</div>
	</div>
);

export const Default: Story = {
	args: {
		children: <AuthForm />,
		poster: <BrandingVisual />,
	},
};

export const LeftPoster: Story = {
	args: {
		children: <AuthForm />,
		poster: <BrandingVisual />,
		posterPosition: "left",
	},
};

export const CustomColumnWidth: Story = {
	args: {
		children: <AuthForm />,
		poster: <BrandingVisual />,
		className: "lg:grid-cols-[1fr_2fr]",
	},
	parameters: {
		docs: {
			description: {
				story:
					"You can customize the column width ratio using Tailwind CSS grid classes in the `className` prop. For example, `lg:grid-cols-[1fr_2fr]` makes the content column twice as wide as the poster column.",
			},
		},
	},
};

export const FixedPosterWidth: Story = {
	args: {
		children: <AuthForm />,
		poster: <BrandingVisual />,
		className: "lg:grid-cols-[1fr_400px]",
	},
	parameters: {
		docs: {
			description: {
				story:
					"You can also set a fixed width for the poster column. For example, `lg:grid-cols-[1fr_400px]` sets the poster column to 400px width.",
			},
		},
	},
};
