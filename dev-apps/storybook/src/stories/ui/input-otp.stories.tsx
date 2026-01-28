import type { Meta, StoryObj } from "@storybook/react";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "@verne/ui";

const meta: Meta<typeof InputOTP> = {
	title: "UI/InputOTP",
	component: InputOTP,
	tags: ["autodocs"],
	argTypes: {
		maxLength: {
			control: "number",
			defaultValue: 6,
		},
	},
};

export default meta;
type Story = StoryObj<typeof InputOTP>;

export const Default: Story = {
	args: {
		maxLength: 6,
	},
	render: (args) => {
		const { children, render, ...rest } = args;
		return (
			<InputOTP {...rest}>
				<InputOTPGroup>
					<InputOTPSlot index={0} />
					<InputOTPSlot index={1} />
					<InputOTPSlot index={2} />
				</InputOTPGroup>
				<InputOTPSeparator />
				<InputOTPGroup>
					<InputOTPSlot index={3} />
					<InputOTPSlot index={4} />
					<InputOTPSlot index={5} />
				</InputOTPGroup>
			</InputOTP>
		);
	},
};
