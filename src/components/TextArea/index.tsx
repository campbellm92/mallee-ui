import { ComponentProps } from "react";
import styles from "./styles.module.css";

type TextAreaProps = ComponentProps<"textarea"> & {
  variant?: "basic";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "neutral"
    | "info"
    | "success"
    | "warning"
    | "error";
};

export const TextArea = ({
  variant = "basic",
  color = "primary",
  ...props
}: TextAreaProps) => {
  const className = [
    styles.textArea,
    styles[`textArea-${variant}`],
    styles[`textArea-${color}`],
    props.className,
  ]
    .filter(Boolean)
    .join(" ");

  return <textarea {...props} className={className}></textarea>;
};
