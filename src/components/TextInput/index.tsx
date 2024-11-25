import { ComponentProps } from "react";
import styles from "./styles.module.css";

type TextInputProps = ComponentProps<"div"> & {
  variant?: "basic";
};

export const TextInput = ({
  variant = "basic",

  ...props
}: TextInputProps) => {
  const className = [
    styles.div,
    styles[`div-${variant}`],
    props.className, // allow additional custom classes
  ]
    .filter(Boolean) // remove any undefined or falsy values
    .join(" ");

  return <div {...props} className={className}></div>;
};
