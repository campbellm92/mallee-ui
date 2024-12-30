import { ComponentProps } from "react";
import styles from "./styles.module.css";

type TextInputProps = ComponentProps<"input"> & {
  variant?: "basic";
  color?: "primary" | "secondary" | "tertiary" | "neutral";
  label: string;
  name: string;
  placeholder: string;
};

export const TextInput = ({
  variant = "basic",
  color = "primary",
  label,
  name,
  placeholder = name,
  ...props
}: TextInputProps) => {
  const className = [
    styles.input,
    styles[`input-${variant}`],
    styles[`input-${color}`],
    props.className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.inputContainer}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        className={className}
        id={name}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};
