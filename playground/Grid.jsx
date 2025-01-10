import React from "react";
import { Card } from "../src/components/Card";
import { Badge } from "../src/components/Badge";

const GridContainer = () => {
  return (
    <div style={styles.gridContainer}>
      <Card
        variant="with-image-transition"
        image={<img src="./Localis.png" alt="localis" />}
      >
        <Card.Title>Localis</Card.Title>
        <Card.Content>
          Data visualisation dashboard for a company in Brisbane, Australia.
        </Card.Content>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Badge variant="filled" color="secondary">
            React
          </Badge>
          <Badge variant="filled" color="secondary">
            React
          </Badge>
          <Badge variant="filled" color="secondary">
            React
          </Badge>
          <Badge variant="filled" color="secondary">
            React
          </Badge>
        </div>
      </Card>
      <Card variant="with-image-transition">
        <Card.Title>Localis</Card.Title>
        <Card.Content>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus obcaecati esse, minima error eligendi voluptatum eius
          ducimus ab aliquid? Placeat nesciunt, odit veritatis ducimus eius
          voluptatum sint eveniet accusantium ad?
        </Card.Content>
        <Badge variant="filled" color="secondary">
          React
        </Badge>
      </Card>
      <Card variant="with-image-transition">
        <Card.Title>Localis</Card.Title>
        <Card.Content>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus obcaecati esse, minima error eligendi voluptatum eius
          ducimus ab aliquid? Placeat nesciunt, odit veritatis ducimus eius
          voluptatum sint eveniet accusantium ad?
        </Card.Content>
        <Badge variant="filled" color="secondary">
          React
        </Badge>
      </Card>
      <Card variant="with-image-transition"></Card>
      <Card variant="with-image-transition"></Card>
      <Card variant="with-image-transition"></Card>
    </div>
  );
};

const styles = {
  gridContainer: {
    display: "grid",
    gap: "1rem",
    padding: "1rem",
    gridTemplateColumns: "repeat(3, 1fr)",

    // Add responsive breakpoints
    "@media (min-width: 600px)": {
      gridTemplateColumns: "repeat(2, 1fr)", // Two columns for tablets
    },
    "@media (min-width: 1024px)": {
      gridTemplateColumns: "repeat(3, 1fr)", // Three columns for desktops
    },
  },
};

export default GridContainer;
