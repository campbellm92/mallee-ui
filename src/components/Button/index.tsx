import { ComponentProps } from "react";
import styles from "./styles.module.css";

//consider:
// adding a style prop for inline styling
// allowing icons w/ an icon prop
// making variant and size extensible
// ARIA

type ButtonProps = ComponentProps<"button"> & {
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "outline-primary"
    | "outline-secondary"
    | "outline-tertiary";
  size?: "small" | "medium" | "large";
  isLoading?: boolean;
};

export const Button = ({
  variant = "primary",
  size = "medium",
  isLoading = false,
  ...props
}: ButtonProps) => {
  const className = [
    styles.button,
    styles[`button-${variant}`], // would look like 'button-primary' for example
    styles[`button-${size}`], // would look like 'button-small' for example
    props.className, // allow additional custom classes
  ]
    .filter(Boolean) // remove any undefined or falsy values
    .join(" ");

  return (
    <button
      {...props}
      className={className}
      disabled={isLoading || props.disabled}
    >
      {isLoading ? <span className="spinner"></span> : props.children}
    </button>
  );
};
