import type { Meta, StoryObj } from "@storybook/react-vite";
import { Password } from "./Password.tsx";

const meta = {
  component: Password,
} satisfies Meta<typeof Password>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "password-id",
    value: "",
  },
};
