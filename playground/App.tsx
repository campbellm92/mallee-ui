import React from "react";
import { Button } from "../src/components/Button/index";
import { Card } from "../src/components/Card/index";
import { Navbar } from "../src/layouts/Navbar/index";

export default function App() {
  const navItems = [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <div>
      <Navbar
        variant="with-branding-sticky-fade"
        logo="THIS IS MY BRAND"
        navItems={navItems}
      />
      <Button variant="secondary" size="large">
        Button Button Button
      </Button>
      <Card variant="primary">
        <Card.Title>
          <h2>This is the title</h2>
        </Card.Title>
        <Card.Content>
          <p>
            {" "}
            This is the content. This is the content. This is the content. This
            is the content. This is the content. This is the content. This is
            the content. This is the content. This is the content. This is the
            content. This is the content.
          </p>
        </Card.Content>
      </Card>
      <Card variant="secondary">
        <Card.Title>This is the title</Card.Title>
        <Card.Content>This is the content</Card.Content>
      </Card>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        in id molestias voluptas corrupti qui fugit deleniti placeat. Quam
        ratione sapiente ut nisi illo necessitatibus nihil nam accusantium
        reiciendis minima.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        in id molestias voluptas corrupti qui fugit deleniti placeat. Quam
        ratione sapiente ut nisi illo necessitatibus nihil nam accusantium
        reiciendis minima.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        in id molestias voluptas corrupti qui fugit deleniti placeat. Quam
        ratione sapiente ut nisi illo necessitatibus nihil nam accusantium
        reiciendis minima.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        in id molestias voluptas corrupti qui fugit deleniti placeat. Quam
        ratione sapiente ut nisi illo necessitatibus nihil nam accusantium
        reiciendis minima.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        in id molestias voluptas corrupti qui fugit deleniti placeat. Quam
        ratione sapiente ut nisi illo necessitatibus nihil nam accusantium
        reiciendis minima.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        in id molestias voluptas corrupti qui fugit deleniti placeat. Quam
        ratione sapiente ut nisi illo necessitatibus nihil nam accusantium
        reiciendis minima.
      </p>
    </div>
  );
}
