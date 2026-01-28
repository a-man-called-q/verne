import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@verne/ui";
import { Loader2, Mail } from "lucide-react";

const meta: Meta<typeof Button> = {
	title: "UI/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: [
				"default",
				"destructive",
				"outline",
				"secondary",
				"ghost",
				"link",
			],
		},
		size: {
			control: "select",
			options: ["default", "sm", "lg", "icon"],
		},
		asChild: {
			control: "boolean",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: "Button",
		variant: "default",
		size: "default",
	},
};

export const Secondary: Story = {
	args: {
		children: "Secondary",
		variant: "secondary",
	},
};

export const Destructive: Story = {
	args: {
		children: "Destructive",
		variant: "destructive",
	},
};

export const Outline: Story = {
	args: {
		children: "Outline",
		variant: "outline",
	},
};

export const Ghost: Story = {
	args: {
		children: "Ghost",
		variant: "ghost",
	},
};

export const Link: Story = {
	args: {
		children: "Link",
		variant: "link",
	},
};

export const WithIcon: Story = {
	args: {
		children: (
			<>
				<Mail /> Login with Email
			</>
		),
	},
};

export const Loading: Story = {
	args: {
		disabled: true,
		children: (
			<>
				<Loader2 className="animate-spin" /> Please wait
			</>
		),
	},
};
