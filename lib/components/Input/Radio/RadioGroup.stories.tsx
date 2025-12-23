import type { Meta, StoryObj } from "@storybook/react-vite";

import { Radio } from "./Radio.tsx";
import { RadioGroup } from "./RadioGroup";

const meta = {
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "radio-group-id",
    value: "1",
    onChange: () => {},
    children: (
      <>
        <Radio
          id="radio-group-1"
          value="1"
          label="Radio 1"
        />
        <Radio
          id="radio-group-2"
          value="2"
          label="Radio 2"
        />
        <Radio
          id="radio-group-3"
          value="3"
          label="Radio 3"
        />
        <Radio
          id="radio-group-4"
          value="4"
          label="Radio 4"
        />
      </>
    ),
  },
};
