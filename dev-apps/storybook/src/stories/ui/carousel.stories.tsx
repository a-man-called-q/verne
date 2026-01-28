import type { Meta, StoryObj } from "@storybook/react";
import {
	Card,
	CardContent,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@verne/ui";

const meta: Meta<typeof Carousel> = {
	title: "UI/Carousel",
	component: Carousel,
	tags: ["autodocs"],
	argTypes: {
		orientation: {
			control: "select",
			options: ["horizontal", "vertical"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
	render: (args) => (
		<Carousel className="w-full max-w-xs" {...args}>
			<CarouselContent>
				{[1, 2, 3, 4, 5].map((item) => (
					<CarouselItem key={item}>
						<div className="p-1">
							<Card>
								<CardContent className="flex aspect-square items-center justify-center p-6">
									<span className="text-4xl font-semibold">{item}</span>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	),
};

export const Vertical: Story = {
	args: {
		orientation: "vertical",
	},
	render: (args) => (
		<Carousel className="w-full max-w-xs" {...args}>
			<CarouselContent className="-mt-1 h-[200px]">
				{[1, 2, 3, 4, 5].map((item) => (
					<CarouselItem key={item} className="pt-1 md:basis-1/2">
						<div className="p-1">
							<Card>
								<CardContent className="flex items-center justify-center p-6">
									<span className="text-3xl font-semibold">{item}</span>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	),
};
