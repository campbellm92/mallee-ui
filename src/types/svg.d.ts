import * as React from "react";

declare module "*.svg" {
  // For inline usage <Logo />
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;

  // For <img src={Logo} />
  const content: string;
  export default content;
}
