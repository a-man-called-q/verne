import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "@verne/ui";
import { Bold, Italic } from "lucide-react";

const meta: Meta<typeof Toggle> = {
	title: "UI/Toggle",
	component: Toggle,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
	render: () => (
		<Toggle aria-label="Toggle bold">
			<Bold className="h-4 w-4" />
		</Toggle>
	),
};

export const Outline: Story = {
	render: () => (
		<Toggle variant="outline" aria-label="Toggle italic">
			<Italic className="h-4 w-4" />
		</Toggle>
	),
};

export const WithText: Story = {
	render: () => (
		<Toggle aria-label="Toggle italic">
			<Italic className="h-4 w-4 mr-2" />
			Italic
		</Toggle>
	),
};

export const Small: Story = {
	render: () => (
		<Toggle size="sm" aria-label="Toggle italic">
			<Italic className="h-4 w-4" />
		</Toggle>
	),
};

export const Large: Story = {
	render: () => (
		<Toggle size="lg" aria-label="Toggle italic">
			<Italic className="h-4 w-4" />
		</Toggle>
	),
};
