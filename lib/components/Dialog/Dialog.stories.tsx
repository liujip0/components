import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../Button/Button.tsx";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "./Dialog";

const meta = {
  component: Dialog,
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    children: (
      <>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>Blah</DialogContent>
        <DialogActions>
          <Button>Cancel</Button>
          <Button>Done</Button>
        </DialogActions>
      </>
    ),
  },
};
