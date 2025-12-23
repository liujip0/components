import type { Meta, StoryObj } from "@storybook/react-vite";

import { ToggleButton } from "./ToggleButton.tsx";
import { ToggleButtonGroup } from "./ToggleButtonGroup";

const meta = {
  component: ToggleButtonGroup,
} satisfies Meta<typeof ToggleButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "1",
    onChange: () => {},
    children: (
      <>
        <ToggleButton value="1">Toggle 1</ToggleButton>
        <ToggleButton value="2">Toggle 2</ToggleButton>
        <ToggleButton value="3">Toggle 3</ToggleButton>
        <ToggleButton value="4">Toggle 4</ToggleButton>
      </>
    ),
  },
};
