import React from "react";
import { Navbar } from "../src/layouts/Navbar";
// import { Badge } from "../src/components/Badge";

import GridContainer from "./Grid";

export default function App() {
  return (
    <div>
      <Navbar variant="with-branding-sticky-fade" logo="LOGO" />
    </div>
  );
}
