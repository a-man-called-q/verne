import type { Meta, StoryObj } from "@storybook/react";
import { Kbd, KbdGroup } from "@verne/ui";

const meta: Meta<typeof Kbd> = {
	title: "UI/Kbd",
	component: Kbd,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
	args: {
		children: "⌘ K",
	},
};

export const Group: Story = {
	render: () => (
		<KbdGroup>
			<Kbd>⌘</Kbd>
			<Kbd>K</Kbd>
		</KbdGroup>
	),
};
