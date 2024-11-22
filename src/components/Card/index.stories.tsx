import { Card } from "./index";
const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible card component that can display images, titles, and content.",
      },
    },
  },
  argTypes: {
    variant: {
      options: [
        "primary",
        "secondary",
        "tertiary",
        "outline-primary",
        "outline-secondary",
        "outline-tertiary",
        "with-image",
      ],
      control: { type: "radio" },
      description: "Defines the style variant of the card.",
    },
    image: {
      control: { type: "text" },
      description: "An image or React node to display in the card.",
    },
    title: {
      control: { type: "text" },
      description: "The title text of the card.",
    },
    content: {
      control: { type: "text" },
      description: "The content text or React node of the card.",
    },
  },
};
export default meta;

export const Primary = {
  args: {
    variant: "primary",
    title: "Card Title",
    content:
      "This is basic card content. Add more details here. What happens if I just put more and more and more and more and more and more and more and more and more and more and more and more and more and more kjsfdjsdjfsdfsdfsdffsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf",
  },
};
export const Secondary = {
  args: {
    variant: "secondary",
    title: "Card Title",
    content: "This is basic card content. Add more details here.",
  },
};
export const Tertiary = {
  args: {
    variant: "tertiary",
    title: "Card Title",
    content: "This is basic card content. Add more details here.",
  },
};
export const OutlinePrimary = {
  args: {
    variant: "outline-primary",
    title: "Card Title",
    content: "This is basic card content. Add more details here.",
  },
};

export const OutlineSecondary = {
  args: {
    variant: "outline-secondary",
    title: "Card Title",
    content: "This is basic card content. Add more details here.",
  },
};

export const OutlineTertiary = {
  args: {
    variant: "outline-tertiary",
    title: "Card Title",
    content: "This is basic card content. Add more details here.",
  },
};

export const WithImage = {
  args: {
    image: <img src="https://via.placeholder.com/500" alt="Example Image" />,
    variant: "with-image",
    title: "Card Title",
    content: "This is basic card content. Add more details here.",
  },
};
