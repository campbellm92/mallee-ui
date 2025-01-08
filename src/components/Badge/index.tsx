import { HTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.css";

type BadgeProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "filled" | "outline";
  color?: "primary" | "secondary" | "tertiary" | "neutral";
  children: ReactNode;
};

export const Badge = ({
  variant = "filled",
  color = "primary",
  children,
  ...props
}: BadgeProps) => {
  const className = [
    styles.badge,
    styles[`badge-${variant}`],
    styles[`badge-${color}`],
    props.className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
};
