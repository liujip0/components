import type { Meta, StoryObj } from "@storybook/react-vite";

import { ToggleButton } from "./ToggleButton";

const meta = {
  component: ToggleButton,
} satisfies Meta<typeof ToggleButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const False: Story = {
  args: {
    children: "Toggle False",
    value: false,
    onChange: () => {},
  },
};

export const True: Story = {
  args: {
    children: "Toggle True",
    value: true,
    onChange: () => {},
  },
};
