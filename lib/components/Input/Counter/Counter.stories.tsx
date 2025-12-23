import type { Meta, StoryObj } from "@storybook/react-vite";

import { Counter } from "./Counter";

const meta = {
  component: Counter,
} satisfies Meta<typeof Counter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "id",
    value: 0,
    increment: () => {},
    decrement: () => {},
    label: "label",
  },
};
