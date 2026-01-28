import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@verne/ui";
import { useEffect, useState } from "react";

const meta: Meta<typeof Progress> = {
	title: "UI/Progress",
	component: Progress,
	tags: ["autodocs"],
	args: {
		value: 60,
	},
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {};

export const Animated: Story = {
	render: () => {
		const [progress, setProgress] = useState(13);

		useEffect(() => {
			const timer = setTimeout(() => setProgress(66), 500);
			return () => clearTimeout(timer);
		}, []);

		return <Progress value={progress} className="w-[60%]" />;
	},
};
