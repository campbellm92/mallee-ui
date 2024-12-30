import { TextInput } from "./index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An input component for text inputs like name, username or email.",
      },
    },
  },
  argTypes: {
    variant: {
      options: ["basic"],
      control: { type: "select" },
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "neutral"],
    },
    name: {
      control: { type: "text" },
      description: "The name attribute for the input element.",
    },
    label: {
      control: { type: "text" },
      description: "The label displayed for the input.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "basic",
    color: "primary",
    name: "Email",
  },
};
