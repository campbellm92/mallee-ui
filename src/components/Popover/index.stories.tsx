import { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./index";
import { Button } from "../Button/index";
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
        <Button onClick={() => setIsOpen((prev) => !prev)}>
          Toggle Popover
        </Button>
        <Popover {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h2> Glass. </h2>
          <p>A substance used to make things like glasses, windows, etc.</p>
          <Button size="small">Save word</Button>
        </Popover>
      </div>
    );
  },
  args: {
    variant: "basic",
    color: "neutral",
  },
};
