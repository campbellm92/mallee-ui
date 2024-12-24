import React from "react";
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
      options: ["filled", "outline"], // choose the button type
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
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

export const Default: Story = {
  args: {
    variant: "filled",
    color: "primary",
    size: "large",
    children: "Button",
  },
};

export const FilledButtons: Story = {
  args: {
    size: "medium",
  },
  render: (args) => {
    const colors = ["primary", "secondary", "tertiary"] as const;
    return (
      <div style={{ display: "flex", gap: "1rem" }}>
        {colors.map((color) => (
          <Button key={color} variant="filled" color={color} size={args.size}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </Button>
        ))}
      </div>
    );
  },
};

export const OutlineButtons: Story = {
  args: {
    size: "medium",
  },
  render: (args) => {
    const colors = ["primary", "secondary", "tertiary"] as const;
    return (
      <div style={{ display: "flex", gap: "1rem" }}>
        {colors.map((color) => (
          <Button key={color} variant="outline" color={color} size={args.size}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </Button>
        ))}
      </div>
    );
  },
};

export const StateButtons = () => {
  const colors = ["info", "success", "warning", "error"] as const;
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {colors.map((color) => (
        <Button key={color} variant="filled" color={color}>
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </Button>
      ))}
    </div>
  );
};

export const Loading: Story = {
  args: {
    children: "Loading...",
    color: "primary",
    size: "medium",
    isLoading: true, // shows a loading spinner -- not coded yet
  },
};
