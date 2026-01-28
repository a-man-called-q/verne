import type { Meta, StoryObj } from "@storybook/react";
import {
	Field,
	FieldContent,
	FieldGroup,
	FieldLegend,
	FieldSet,
	Input,
	Label,
	Switch,
} from "@verne/ui";

const meta: Meta<typeof Field> = {
	title: "UI/Field",
	component: Field,
	tags: ["autodocs"],
	argTypes: {
		orientation: {
			control: "select",
			options: ["vertical", "horizontal", "responsive"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Field>;

export const Default: Story = {
	args: {
		orientation: "vertical",
	},
	render: (args) => (
		<Field {...args}>
			<Label>Username</Label>
			<FieldContent>
				<Input placeholder="Enter username" />
			</FieldContent>
		</Field>
	),
};

export const Horizontal: Story = {
	args: {
		orientation: "horizontal",
	},
	render: (args) => (
		<Field {...args}>
			<Label>Notifications</Label>
			<FieldContent>
				<Switch />
			</FieldContent>
		</Field>
	),
};

export const WithFieldSet: Story = {
	render: () => (
		<FieldSet>
			<FieldLegend>Profile Settings</FieldLegend>
			<FieldGroup>
				<Field>
					<Label>Full Name</Label>
					<FieldContent>
						<Input placeholder="John Doe" />
					</FieldContent>
				</Field>
				<Field>
					<Label>Email</Label>
					<FieldContent>
						<Input placeholder="john@example.com" type="email" />
					</FieldContent>
				</Field>
			</FieldGroup>
		</FieldSet>
	),
};
