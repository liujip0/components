import type { Meta, StoryObj } from "@storybook/react-vite";

import { TextArea } from "./TextArea";

const meta = {
  component: TextArea,
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "id",
    value: "",
  },
};
