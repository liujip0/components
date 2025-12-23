import type { Meta, StoryObj } from "@storybook/react-vite";

import { IconButton } from "../../main.ts";
import { Snackbar } from "./Snackbar";

const meta = {
  component: Snackbar,
} satisfies Meta<typeof Snackbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    message: "This is a snackbar message",
    action: (
      <IconButton>
        <span className="material-symbols-outlined">close</span>
      </IconButton>
    ),
  },
};
