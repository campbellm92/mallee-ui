import React from "react";
import { Button } from "../src/components/Button/index";
import { Card } from "../src/components/Card/index";

export default function App() {
  return (
    <div>
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
    </div>
  );
}
