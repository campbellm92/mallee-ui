import { ComponentProps } from "react";
import styles from "./styles.module.css";

type SidebarProps = ComponentProps<"div"> & {
  variant?: "minimal";
};

export const Sidebar = ({ variant = "minimal", ...props }: SidebarProps) => {
  const className = [
    styles.div,
    styles[`div-${variant}`],
    props.className, // allow additional custom classes
  ]
    .filter(Boolean) // remove any undefined or falsy values
    .join(" ");

  return <div {...props} className={className}></div>;
};
