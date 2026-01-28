import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@verne/ui";

const meta: Meta<typeof Label> = {
	title: "UI/Label",
	component: Label,
	tags: ["autodocs"],
	args: {
		children: "Accept terms and conditions",
	},
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};
