import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonGroup, ButtonGroupSeparator } from "@verne/ui";
import { ChevronDown, Cloud, Github, Keyboard, LifeBuoy } from "lucide-react";

const meta: Meta<typeof ButtonGroup> = {
	title: "UI/ButtonGroup",
	component: ButtonGroup,
	tags: ["autodocs"],
	argTypes: {
		orientation: {
			control: "select",
			options: ["horizontal", "vertical"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
	args: {
		orientation: "horizontal",
	},
	render: (args) => (
		<ButtonGroup {...args}>
			<Button variant="outline">One</Button>
			<Button variant="outline">Two</Button>
			<Button variant="outline">Three</Button>
		</ButtonGroup>
	),
};

export const WithSeparator: Story = {
	args: {
		orientation: "horizontal",
	},
	render: (args) => (
		<ButtonGroup {...args}>
			<Button variant="outline">One</Button>
			<ButtonGroupSeparator />
			<Button variant="outline">Two</Button>
			<ButtonGroupSeparator />
			<Button variant="outline">Three</Button>
		</ButtonGroup>
	),
};

export const Toolbar: Story = {
	render: () => (
		<ButtonGroup>
			<Button variant="ghost" size="icon">
				<Github className="h-4 w-4" />
			</Button>
			<ButtonGroupSeparator />
			<Button variant="ghost" size="icon">
				<LifeBuoy className="h-4 w-4" />
			</Button>
			<ButtonGroupSeparator />
			<Button variant="ghost" size="icon">
				<Cloud className="h-4 w-4" />
			</Button>
			<ButtonGroupSeparator />
			<Button variant="ghost" size="icon">
				<Keyboard className="h-4 w-4" />
			</Button>
			<ButtonGroupSeparator />
			<Button variant="ghost" className="gap-1 px-3">
				<span>Profile</span>
				<ChevronDown className="h-4 w-4" />
			</Button>
		</ButtonGroup>
	),
};
