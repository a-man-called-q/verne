import type { Meta, StoryObj } from "@storybook/react";
import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxGroup,
	ComboboxInput,
	ComboboxItem,
	ComboboxLabel,
	ComboboxList,
} from "@verne/ui";

const meta: Meta<typeof Combobox> = {
	title: "UI/Combobox",
	component: Combobox,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const frameworks = [
	{
		value: "next.js",
		label: "Next.js",
	},
	{
		value: "sveltekit",
		label: "SvelteKit",
	},
	{
		value: "nuxt.js",
		label: "Nuxt.js",
	},
	{
		value: "remix",
		label: "Remix",
	},
	{
		value: "astro",
		label: "Astro",
	},
];

export const Default: Story = {
	render: () => (
		<Combobox>
			<ComboboxInput placeholder="Select framework..." />
			<ComboboxContent>
				<ComboboxList>
					<ComboboxEmpty>No framework found.</ComboboxEmpty>
					<ComboboxGroup>
						<ComboboxLabel>Frameworks</ComboboxLabel>
						{frameworks.map((framework) => (
							<ComboboxItem key={framework.value} value={framework.value}>
								{framework.label}
							</ComboboxItem>
						))}
					</ComboboxGroup>
				</ComboboxList>
			</ComboboxContent>
		</Combobox>
	),
};
