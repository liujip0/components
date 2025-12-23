import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tab } from "./Tab";

const meta = {
  component: Tab,
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "value",
    children: "Tab Label",
  },
};
