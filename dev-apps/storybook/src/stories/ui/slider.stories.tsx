import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@verne/ui";

const meta: Meta<typeof Slider> = {
	title: "UI/Slider",
	component: Slider,
	tags: ["autodocs"],
	args: {
		defaultValue: [50],
		max: 100,
		step: 1,
	},
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
	render: (args) => <Slider {...args} className="w-[60%]" />,
};

export const Range: Story = {
	args: {
		defaultValue: [25, 75],
	},
	render: (args) => <Slider {...args} className="w-[60%]" />,
};

export const Steps: Story = {
	args: {
		defaultValue: [50],
		step: 10,
	},
	render: (args) => <Slider {...args} className="w-[60%]" />,
};
