import type { Meta, StoryObj } from "@storybook/react";
import {
	Item,
	ItemContent,
	ItemDescription,
	ItemGroup,
	ItemMedia,
	ItemSeparator,
	ItemTitle,
} from "@verne/ui";
import { Package, User } from "lucide-react";

const meta: Meta<typeof Item> = {
	title: "UI/Item",
	component: Item,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Item>;

export const Default: Story = {
	render: (args) => (
		<ItemGroup className="w-[300px]">
			<Item {...args}>
				<ItemMedia>
					<User />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Profile</ItemTitle>
					<ItemDescription>Manage your profile</ItemDescription>
				</ItemContent>
			</Item>
			<ItemSeparator />
			<Item {...args}>
				<ItemMedia>
					<Package />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Billing</ItemTitle>
					<ItemDescription>Manage your billing</ItemDescription>
				</ItemContent>
			</Item>
		</ItemGroup>
	),
};
