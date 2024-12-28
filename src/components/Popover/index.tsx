import { HTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.css";

type PopoverProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "basic";
  color?: "primary" | "secondary" | "tertiary" | "neutral";
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  reference?: React.RefObject<HTMLDivElement>;
};

export const Popover = ({
  variant = "basic",
  color = "neutral",
  isOpen,
  onClose,
  children,
  reference,
  ...props
}: PopoverProps) => {
  const className = [
    styles.popover,
    styles[`popover-${variant}`],
    styles[`popover-${color}`],
    props.className,
  ]
    .filter(Boolean) // remove any undefined or falsy values
    .join(" ");

  const adjustCloseButtonColor = (popoverColor: string) => {
    switch (popoverColor) {
      case "primary":
      case "secondary":
      case "tertiary":
        return "var(--text-primary)";
      case "neutral":
        return "var(--text-secondary)";
    }
  };

  const closeButtonColor = {
    color: adjustCloseButtonColor(color),
  };

  if (!isOpen) return null;

  return (
    <div className={className} role="dialog" ref={reference} {...props}>
      <div className={styles.closeButtonContainer}>
        <button
          onClick={onClose}
          aria-label="Close popover"
          className={styles.closeButton}
          style={closeButtonColor}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={styles.icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className={styles.popoverContent}>{children}</div>
    </div>
  );
};
