import React from "react";
import { Navbar } from "../src/layouts/Navbar/index";
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
    </div>
  );
}
