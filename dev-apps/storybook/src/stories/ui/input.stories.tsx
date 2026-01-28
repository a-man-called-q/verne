import type { Meta, StoryObj } from "@storybook/react";
import { Button, Input, Label } from "@verne/ui";

const meta: Meta<typeof Input> = {
	title: "UI/Input",
	component: Input,
	tags: ["autodocs"],
	argTypes: {
		type: {
			control: "select",
			options: ["text", "password", "email", "number", "file", "date"],
		},
		disabled: {
			control: "boolean",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		type: "email",
		placeholder: "Email",
	},
};

export const WithLabel: Story = {
	render: (args) => (
		<div className="grid w-full max-w-sm items-center gap-1.5">
			<Label htmlFor="email-2">Email</Label>
			<Input {...args} id="email-2" placeholder="Email" />
		</div>
	),
};

export const WithButton: Story = {
	render: (args) => (
		<div className="flex w-full max-w-sm items-center space-x-2">
			<Input {...args} type="email" placeholder="Email" />
			<Button type="submit">Subscribe</Button>
		</div>
	),
};

export const File: Story = {
	args: {
		type: "file",
		id: "picture",
	},
	render: (args) => (
		<div className="grid w-full max-w-sm items-center gap-1.5">
			<Label htmlFor="picture">Picture</Label>
			<Input {...args} />
		</div>
	),
};

export const Disabled: Story = {
	args: {
		disabled: true,
		type: "email",
		placeholder: "Email",
	},
};
