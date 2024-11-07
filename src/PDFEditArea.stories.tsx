import { Meta, StoryObj } from "@storybook/react";
import { PDFEditArea } from "./PDFEditArea";

const meta = {
  component: PDFEditArea,
} satisfies Meta<typeof PDFEditArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
