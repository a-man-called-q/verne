import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarImage } from "@verne/ui";

const meta: Meta<typeof Avatar> = {
	title: "UI/Avatar",
	component: Avatar,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["default", "sm", "lg"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
	render: (args) => (
		<Avatar {...args}>
			<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	),
};

export const Small: Story = {
	args: {
		size: "sm",
	},
	render: (args) => (
		<Avatar {...args}>
			<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	),
};

export const Large: Story = {
	args: {
		size: "lg",
	},
	render: (args) => (
		<Avatar {...args}>
			<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	),
};

export const Fallback: Story = {
	render: (args) => (
		<Avatar {...args}>
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	),
};
