import type { Meta, StoryObj } from "@storybook/react";
import { Label, RadioGroup, RadioGroupItem } from "@verne/ui";

const meta: Meta<typeof RadioGroup> = {
	title: "UI/RadioGroup",
	component: RadioGroup,
	tags: ["autodocs"],
	args: {
		defaultValue: "comfortable",
	},
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
	render: () => (
		<RadioGroup defaultValue="comfortable">
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="default" id="r1" />
				<Label htmlFor="r1">Default</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="comfortable" id="r2" />
				<Label htmlFor="r2">Comfortable</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="compact" id="r3" />
				<Label htmlFor="r3">Compact</Label>
			</div>
		</RadioGroup>
	),
};
