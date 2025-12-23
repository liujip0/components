import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tabs } from "./Tabs";

const meta = {
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: {
      tab1: "Tab 1 Content",
      tab2: "Tab 2 Content",
      tab3: "Tab 3 Content",
    },
  },
};
