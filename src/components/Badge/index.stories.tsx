import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./index";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["filled", "outline"],
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "neutral"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "filled",
    color: "primary",
    children: "JavaScript",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    color: "primary",
    children: "JavaScript",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    color: "primary",
    children: "JavaScript",
  },
};
