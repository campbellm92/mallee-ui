import { ComponentProps } from "react";
import styles from "./styles.module.css";

type TextInputProps = ComponentProps<"input"> & {
  variant?: "basic";
  color?: "primary" | "secondary" | "tertiary" | "neutral";
  label: string;
  name: string;
  placeholder: string;
  hasWarning?: boolean;
  warningMessage?: string;
  hasError?: boolean;
  errorMessage?: string;
  hasSuccess?: boolean;
  successMessage?: string;
};

export const TextInput = ({
  variant = "basic",
  color = "primary",
  label,
  name,
  placeholder = name,
  hasWarning = false,
  warningMessage,
  hasError = false,
  errorMessage,
  hasSuccess = false,
  successMessage,
  ...props
}: TextInputProps) => {
  const className = [
    styles.input,
    styles[`input-${variant}`],
    styles[`input-${color}`],
    hasWarning && styles["input-warning"],
    hasError && styles["input-error"],
    hasSuccess && styles["input-success"],
    props.className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.inputContainer}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <input
        className={className}
        id={name}
        placeholder={placeholder}
        {...props}
      />
      {hasWarning && warningMessage && (
        <span className={styles.warningMessage}>{warningMessage}</span>
      )}
      {hasError && errorMessage && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
      {hasSuccess && successMessage && (
        <span className={styles.successMessage}>{successMessage}</span>
      )}
    </div>
  );
};
