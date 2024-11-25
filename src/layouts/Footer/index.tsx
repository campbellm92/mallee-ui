import { ComponentProps } from "react";
import styles from "./styles.module.css";

type FooterProps = ComponentProps<"div"> & {
  variant?: "minimal" | "prominent";
};

export const Footer = ({ variant = "minimal", ...props }: FooterProps) => {
  const className = [
    styles.div,
    styles[`div-${variant}`],
    props.className, // allow additional custom classes
  ]
    .filter(Boolean) // remove any undefined or falsy values
    .join(" ");

  return <div {...props} className={className}></div>;
};
