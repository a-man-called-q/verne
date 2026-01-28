import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "@verne/ui";

const meta: Meta<typeof AspectRatio> = {
	title: "UI/AspectRatio",
	component: AspectRatio,
	tags: ["autodocs"],
	argTypes: {
		ratio: {
			control: "number",
			defaultValue: 16 / 9,
		},
	},
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
	args: {
		ratio: 16 / 9,
	},
	render: (args) => (
		<div className="w-[450px]">
			<AspectRatio {...args} className="bg-muted rounded-md">
				<img
					src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
					alt="Scenery by Drew Beamer"
					className="h-full w-full rounded-md object-cover"
				/>
			</AspectRatio>
		</div>
	),
};
