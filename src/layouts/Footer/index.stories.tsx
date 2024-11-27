import { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./index";

const meta: Meta<typeof Footer> = {
  title: "Layouts/Footer",
  component: Footer,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["minimal", "prominent"],
      description: "Controls the style variant of the Footer.",
    },
    footerItems: {
      control: { type: "object" },
      description: "An array of footer navigation items with label and href.",
    },
    logo: {
      control: { type: "text" },
      description: "A logo or branding element.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Minimal: Story = {
  args: {
    footerItems: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
};
