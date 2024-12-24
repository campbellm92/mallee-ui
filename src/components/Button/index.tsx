import { ComponentProps } from "react";
import styles from "./styles.module.css";

//consider:
// adding a style prop for inline styling
// allowing icons w/ an icon prop
// making variant and size extensible
// ARIA

type ButtonProps = ComponentProps<"button"> & {
  variant?: "filled" | "outline";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "info"
    | "success"
    | "warning"
    | "error";
  size?: "small" | "medium" | "large";
  isLoading?: boolean;
};

export const Button = ({
  variant = "filled",
  color = "primary",
  size = "medium",
  isLoading = false,
  ...props
}: ButtonProps) => {
  const className = [
    styles.button,
    styles[`button-${variant}`],
    styles[`button-${color}`],
    styles[`button-${size}`],
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
