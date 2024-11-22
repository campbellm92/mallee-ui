import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";

const meta: Meta<typeof Button> = {
  title: "Components/Button", // category of the component
  component: Button, // name of the component
  parameters: {
    layout: "centered", // centers in preview
  },
  tags: ["autodocs"], // automatic documentation
  argTypes: {
    // various configurations for the component that you see in storybook
    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "tertiary",
        "outline-primary",
        "outline-secondary",
        "outline-tertiary",
      ], // choose the button type
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"], // choose the size
    },
    isLoading: {
      control: { type: "boolean" }, // toggle loading state
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary", // Default label
    variant: "primary", // Default variant
    size: "medium", // Default size
    isLoading: false, // Default loading state
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
    size: "medium",
    isLoading: false,
  },
};

export const Tertiary: Story = {
  args: {
    children: "Tertiary",
    variant: "tertiary",
    size: "medium",
    isLoading: false,
  },
};

export const OutlinePrimary: Story = {
  args: {
    children: "Outline Primary",
    variant: "outline-primary",
    size: "medium",
    isLoading: false,
  },
};

export const OutlineSecondary: Story = {
  args: {
    children: "Outline Secondary",
    variant: "outline-secondary",
    size: "medium",
    isLoading: false,
  },
};

export const OutlineTertiary: Story = {
  args: {
    children: "Outline Tertiary",
    variant: "outline-tertiary",
    size: "medium",
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    children: "Loading...",
    variant: "primary",
    size: "medium",
    isLoading: true, // Shows a loading spinner
  },
};
