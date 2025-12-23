import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tab } from "./Tab.tsx";
import { TabBar } from "./TabBar";

const meta = {
  component: TabBar,
} satisfies Meta<typeof TabBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "value",
    onChange: () => {},
    children: (
      <>
        <Tab value="1">Tab 1</Tab>
        <Tab value="2">Tab 2</Tab>
        <Tab value="3">Tab 3</Tab>
        <Tab value="4">Tab 4</Tab>
      </>
    ),
  },
};
