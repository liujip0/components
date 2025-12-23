import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input.tsx";

const meta = {
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "input-id",
    value: "",
  },
};
