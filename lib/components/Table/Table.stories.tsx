import type { Meta, StoryObj } from "@storybook/react-vite";

import { Table, TableHead, Td, Th } from "./Table";

const meta = {
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <TableHead>
          <tr>
            <Th>Header 1</Th>
            <Th>Header 2</Th>
            <Th>Header 3</Th>
            <Th>Header 4</Th>
          </tr>
        </TableHead>
        <tbody>
          <tr>
            <Th>Row 1</Th>
            <Td>Content 1</Td>
            <Td>Content 2</Td>
            <Td>Content 3</Td>
          </tr>
          <tr>
            <Th>Row 2</Th>
            <Td>Content 4</Td>
            <Td>Content 5</Td>
            <Td>Content 6</Td>
          </tr>
          <tr>
            <Th>Row 3</Th>
            <Td>Content 7</Td>
            <Td>Content 8</Td>
            <Td>Content 9</Td>
          </tr>
        </tbody>
      </>
    ),
  },
};
