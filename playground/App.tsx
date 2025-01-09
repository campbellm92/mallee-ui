import React from "react";
import { Navbar } from "../src/layouts/Navbar/index";
import { Badge } from "../src/components/Badge";
import Projects from "./Projects";

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <Projects />
      </div>
      <div
        style={{ backgroundColor: "black", height: "100vh", width: "100vw" }}
      >
        <Badge variant="outline" color="primary">
          A
        </Badge>
        <Badge variant="outline" color="secondary">
          B
        </Badge>
        <Badge variant="outline" color="tertiary">
          C
        </Badge>
      </div>
    </div>
  );
}
