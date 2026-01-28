import type { Meta, StoryObj } from "@storybook/react";
import { DefaultLayout } from "@verne/ui";

const meta: Meta<typeof DefaultLayout> = {
	title: "Layouts/DefaultLayout",
	component: DefaultLayout,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DefaultLayout>;

export const Basic: Story = {
	args: {
		children: (
			<div className="container mx-auto p-4 py-8">
				<h1 className="text-3xl font-bold mb-4">Welcome to Default Layout</h1>
				<p className="text-lg text-muted-foreground">
					This is the main content area. It will grow to fill the available
					space.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
					{[1, 2, 3].map((i) => (
						<div
							key={i}
							className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm"
						>
							<h3 className="text-xl font-semibold mb-2">Card {i}</h3>
							<p>Sample content for card {i}.</p>
						</div>
					))}
				</div>
			</div>
		),
		headerProps: {
			left: <span className="font-bold text-lg">Verne App</span>,
		},
		footer: (
			<div className="container mx-auto py-6 px-4 text-center text-sm text-muted-foreground">
				© 2024 Verne App. All rights reserved.
			</div>
		),
	},
};

export const NoHeader: Story = {
	args: {
		...Basic.args,
		headerProps: undefined,
	},
};

export const WithHeaderSlots: Story = {
	args: {
		...Basic.args,
		headerProps: {
			left: <div className="font-bold text-xl">My Logo</div>,
			children: (
				<nav className="flex gap-4">
					<a href="/" className="hover:underline">
						Home
					</a>
					<a href="/about" className="hover:underline">
						About
					</a>
				</nav>
			),
			right: <button type="button">Login</button>,
		},
	},
};
