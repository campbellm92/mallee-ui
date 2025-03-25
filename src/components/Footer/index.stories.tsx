import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./index";
import { ReactComponent as MalleeLogo } from "../../assets/logo.svg";
import { ReactComponent as GithubLogo } from "../../assets/github-mark.svg";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
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
      control: { type: "object" },
      description: "A logo or branding element.",
    },
    iconLinks: {
      control: { type: "object" },
      description:
        "An array of footer logos, like for Github or LinkedIn links.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Minimal: Story = {
  args: {
    variant: "minimal",
    logo: <MalleeLogo />,
    children: <span>© 2024 Mallee UI. All rights reserved.</span>,
    iconLinks: [
      {
        icon: <GithubLogo />,
        href: "https://github.com",
        alt: "Github",
      },
    ],
  },
};
