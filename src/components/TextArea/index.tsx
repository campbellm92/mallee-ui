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
  hasWarning?: boolean;
  warningMessage?: string;
  hasError?: boolean;
  errorMessage?: string;
  hasSuccess?: boolean;
  successMessage?: string;
};

export const TextArea = ({
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
}: TextAreaProps) => {
  const className = [
    styles.textArea,
    styles[`textArea-${variant}`],
    styles[`textArea-${color}`],
    hasWarning && styles["textArea-warning"],
    hasError && styles["textArea-error"],
    hasSuccess && styles["textArea-success"],
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
