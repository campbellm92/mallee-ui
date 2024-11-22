import React from "react";
import { Button } from "../src/components/Button/index";
import { Card } from "../src/components/Card/index";

export default function App() {
  return (
    <div>
      <Button variant="secondary" size="large">
        Test
      </Button>
      <Card
        title="This is my card"
        content="Hellooooo I am a card. Hellooooo I am a card. Hellooooo I am a card. Hellooooo I am a card. Hellooooo I am a card. Hellooooo I am a card. Hellooooo I am a card. Hellooooo I am a card. "
      ></Card>
    </div>
  );
}
