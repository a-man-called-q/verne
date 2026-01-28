import type { Meta, StoryObj } from "@storybook/react";
import {
	Button,
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@verne/ui";
import { PackageOpen } from "lucide-react";

const meta: Meta<typeof Empty> = {
	title: "UI/Empty",
	component: Empty,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Empty>;

export const Default: Story = {
	render: (args) => (
		<Empty {...args}>
			<EmptyHeader>
				<EmptyMedia>
					<PackageOpen className="h-10 w-10 text-muted-foreground" />
				</EmptyMedia>
				<EmptyTitle>No data available</EmptyTitle>
				<EmptyDescription>
					You haven't created any projects yet. Start by creating a new project.
				</EmptyDescription>
			</EmptyHeader>
			<EmptyContent>
				<Button>Create Project</Button>
			</EmptyContent>
		</Empty>
	),
};
