import { TextArea } from "./index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A text area component for things like contact forms.",
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
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "basic",
    color: "primary",
  },
};
