import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, Label } from "@verne/ui";

const meta: Meta<typeof Checkbox> = {
	title: "UI/Checkbox",
	component: Checkbox,
	tags: ["autodocs"],
	argTypes: {
		disabled: {
			control: "boolean",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
	render: (args) => (
		<div className="flex items-center space-x-2">
			<Checkbox id="terms" {...args} />
			<Label htmlFor="terms">Accept terms and conditions</Label>
		</div>
	),
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
	render: (args) => (
		<div className="flex items-center space-x-2">
			<Checkbox id="terms2" {...args} />
			<Label htmlFor="terms2">Accept terms and conditions</Label>
		</div>
	),
};
