import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "@verne/ui";

const meta: Meta<typeof Spinner> = {
	title: "UI/Spinner",
	component: Spinner,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
	args: {
		size: "default",
	},
};

export const Small: Story = {
	args: {
		size: "sm",
	},
};

export const Large: Story = {
	args: {
		size: "lg",
	},
};

export const CustomClass: Story = {
	args: {
		className: "text-blue-500",
	},
};
