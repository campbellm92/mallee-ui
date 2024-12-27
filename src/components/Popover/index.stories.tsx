import { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./index";
import React, { useState } from "react";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["basic"],
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "neutral"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ControlledPopover: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          Toggle Popover
        </button>
        <Popover {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          Glass. A substance used to make things like glasses, windows, etc.
        </Popover>
      </div>
    );
  },
  args: {
    variant: "basic",
    color: "neutral",
  },
};
