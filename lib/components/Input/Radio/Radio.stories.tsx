import type { Meta, StoryObj } from "@storybook/react-vite";

import { Radio } from "./Radio";

const meta = {
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "id",
    value: "value",
    label: "Radio Label",
  },
};
