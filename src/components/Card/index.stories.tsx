import React from "react";
import { Card } from "./index";
import { Button } from "../Button/index";
import { Meta, StoryObj } from "@storybook/react";
import ParrotImage from "../../assets/parrot.jpg";

const meta: Meta<typeof Card> = {
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
        "filled",
        "outline",
        "wide",
        "with-image",
        "with-image-transition",
      ],
      control: { type: "select" },
      description: "Defines the style variant of the card.",
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "neutral"],
    },
    image: {
      control: { type: "text" },
      description: "An image or React node to display in the card.",
    },
    alt: {
      control: { type: "text" },
      description: "Alt text for the image.",
    },
    enableHoverEffect: {
      control: { type: "boolean" },
      description: "Enable or disable the hover scale effect.",
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

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "filled",
    color: "primary",
    enableHoverEffect: true,
    children: (
      <>
        <Card.Title>
          <h2>Card Title</h2>
        </Card.Title>
        <Card.Content>
          <p>This is the card content.</p>
        </Card.Content>
      </>
    ),
  },
};

export const FilledCards: Story = {
  render: () => {
    const colors = ["primary", "secondary", "tertiary", "neutral"] as const;
    return (
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {colors.map((color) => (
          <Card key={color} variant="filled" color={color}>
            <Card.Title>
              <h2>{`${color.charAt(0).toUpperCase()}${color.slice(
                1
              )} Card`}</h2>
            </Card.Title>
            <Card.Content>
              <p>This is a {color} filled card.</p>
            </Card.Content>
          </Card>
        ))}
      </div>
    );
  },
};

export const OutlineCards: Story = {
  render: () => {
    const colors = ["primary", "secondary", "tertiary"] as const;
    return (
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {colors.map((color) => (
          <Card key={color} variant="outline" color={color}>
            <Card.Title>
              <h2>{`${color.charAt(0).toUpperCase()}${color.slice(
                1
              )} Card`}</h2>
            </Card.Title>
            <Card.Content>
              <p>This is a {color} filled card.</p>
            </Card.Content>
          </Card>
        ))}
      </div>
    );
  },
};

export const WidthCards: Story = {
  args: {
    enableHoverEffect: true,
  },

  render: () => {
    const colors = ["primary", "secondary", "tertiary"] as const;
    return (
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        {colors.map((color) => (
          <Card
            key={color}
            variant="wide"
            color={color}
            enableHoverEffect={false}
          >
            <Card.Title>
              <h2>{`${color.charAt(0).toUpperCase()}${color.slice(
                1
              )} Card`}</h2>
            </Card.Title>
            <Card.Content>
              <p>This is a {color} filled width card. </p>
            </Card.Content>
          </Card>
        ))}
      </div>
    );
  },
};

export const WithImage = {
  args: {
    variant: "with-image",
    children: (
      <>
        <Card.Image src={ParrotImage} alt="Parrot" />
        <Card.Title>
          <h2>Card Title</h2>
        </Card.Title>
        <Card.Content>
          <p>This is basic card content. Add more details here.</p>
        </Card.Content>
      </>
    ),
  },
};

export const WithImageTransition = {
  render: () => {
    return (
      <>
        <Card
          variant="with-image-transition"
          image={<img src="playground/Localis.png" alt="localis" />}
        >
          <Card.Title>
            <h3>Localis</h3>
          </Card.Title>
          <Card.Content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              explicabo doloremque cumque animi vero quasi architecto
            </p>
          </Card.Content>
        </Card>
      </>
    );
  },
};
