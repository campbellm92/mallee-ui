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
  label: string;
  name: string;
  placeholder: string;
};

export const TextArea = ({
  variant = "basic",
  color = "primary",
  label,
  name,
  placeholder = name,
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

  return (
    <div className={styles.textAreaContainer}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <textarea
        className={className}
        id={name}
        name={name}
        placeholder={placeholder}
        {...props}
      ></textarea>
    </div>
  );
};
