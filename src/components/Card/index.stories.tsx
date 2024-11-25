import { Card } from "./index";
const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
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
    children: (
      <>
        <Card.Title>
          <h2>Card Title</h2>
        </Card.Title>
        <Card.Content>
          <p> This is basic card content. Add more details here.</p>
        </Card.Content>
      </>
    ),
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
    children: (
      <>
        <Card.Title>
          <h2>Card Title</h2>
        </Card.Title>
        <Card.Content>
          <p> This is basic card content. Add more details here.</p>
        </Card.Content>
      </>
    ),
  },
};

export const Tertiary = {
  args: {
    variant: "tertiary",
    children: (
      <>
        <Card.Title>
          <h2>Card Title</h2>
        </Card.Title>
        <Card.Content>
          <p> This is basic card content. Add more details here.</p>
        </Card.Content>
      </>
    ),
  },
};

export const OutlinePrimary = {
  args: {
    variant: "outline-primary",
    children: (
      <>
        <Card.Title>
          <h2>Card Title</h2>
        </Card.Title>
        <Card.Content>
          <p> This is basic card content. Add more details here.</p>
        </Card.Content>
      </>
    ),
  },
};

export const OutlineSecondary = {
  args: {
    variant: "outline-secondary",
    children: (
      <>
        <Card.Title>
          <h2>Card Title</h2>
        </Card.Title>
        <Card.Content>
          <p> This is basic card content. Add more details here.</p>
        </Card.Content>
      </>
    ),
  },
};

export const OutlineTertiary = {
  args: {
    variant: "outline-tertiary",
    children: (
      <>
        <Card.Title>
          <h2>Card Title</h2>
        </Card.Title>
        <Card.Content>
          <p> This is basic card content. Add more details here.</p>
        </Card.Content>
      </>
    ),
  },
};

export const WithImage = {
  args: {
    variant: "with-image",
    children: (
      <>
        <Card.Image src="https://via.placeholder.com/250" alt="Example Image" />
        <Card.Title>
          <h2>Card Title</h2>
        </Card.Title>
        <Card.Content>
          <p> This is basic card content. Add more details here.</p>
        </Card.Content>
      </>
    ),
  },
};
