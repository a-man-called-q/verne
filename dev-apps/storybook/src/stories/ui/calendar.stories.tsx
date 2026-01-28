import type { Meta, StoryObj } from "@storybook/react";
import { Calendar, type DateRange } from "@verne/ui";
import React from "react";

const meta: Meta<typeof Calendar> = {
	title: "UI/Calendar",
	component: Calendar,
	tags: ["autodocs"],
	argTypes: {
		showOutsideDays: {
			control: "boolean",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
	args: {
		mode: "single",
		className: "rounded-md border",
	},
	render: (args) => {
		const [date, setDate] = React.useState<Date | undefined>(new Date());
		const { mode, ...rest } = args;
		return (
			<Calendar
				{...rest}
				mode="single"
				selected={date}
				onSelect={setDate}
				className="rounded-md border"
			/>
		);
	},
};

export const Range: Story = {
	args: {
		mode: "range",
		className: "rounded-md border",
	},
	render: (args) => {
		const [date, setDate] = React.useState<DateRange | undefined>({
			from: new Date(2023, 0, 20),
			to: new Date(2023, 0, 24),
		});
		const { mode, selected, onSelect, ...rest } =
			args as unknown as React.ComponentProps<typeof Calendar> & {
				selected?: unknown;
				onSelect?: unknown;
			};
		return (
			<Calendar
				mode="range"
				selected={date}
				onSelect={setDate}
				className="rounded-md border"
				{...rest}
			/>
		);
	},
};
