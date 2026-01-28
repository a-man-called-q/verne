import type { Meta, StoryObj } from "@storybook/react";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "@verne/ui";
import { Search, X } from "lucide-react";

const meta: Meta<typeof InputGroup> = {
	title: "UI/InputGroup",
	component: InputGroup,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const Default: Story = {
	render: (args) => (
		<div className="w-[300px]">
			<InputGroup {...args}>
				<InputGroupAddon>
					<Search />
				</InputGroupAddon>
				<InputGroupInput placeholder="Search..." />
			</InputGroup>
		</div>
	),
};

export const WithButton: Story = {
	render: (args) => (
		<div className="w-[300px]">
			<InputGroup {...args}>
				<InputGroupInput placeholder="Search..." />
				<InputGroupAddon align="inline-end">
					<InputGroupButton size="icon-xs" variant="ghost">
						<X />
					</InputGroupButton>
				</InputGroupAddon>
			</InputGroup>
		</div>
	),
};
