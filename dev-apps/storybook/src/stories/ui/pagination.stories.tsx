import type { Meta, StoryObj } from "@storybook/react";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@verne/ui";

const meta: Meta<typeof Pagination> = {
	title: "UI/Pagination",
	component: Pagination,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
	render: () => (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href="#" size="default" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#" size="default">
						1
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#" isActive size="default">
						2
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#" size="default">
						3
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem>
					<PaginationNext href="#" size="default" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	),
};
