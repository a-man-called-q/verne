import type { Meta, StoryObj } from "@storybook/react";
import { Label, Switch } from "@verne/ui";

const meta: Meta<typeof Switch> = {
	title: "UI/Switch",
	component: Switch,
	tags: ["autodocs"],
	argTypes: {
		disabled: { control: "boolean" },
		size: { control: "select", options: ["default", "sm"] },
	},
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
	render: (args) => (
		<div className="flex items-center space-x-2">
			<Switch id="airplane-mode" {...args} />
			<Label htmlFor="airplane-mode">Airplane Mode</Label>
		</div>
	),
};
