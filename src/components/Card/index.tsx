import { ComponentProps } from "react";
import styles from "./styles.module.css";

type CardProps = ComponentProps<"div"> & {
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "outline-primary"
    | "outline-secondary"
    | "outline-tertiary"
    | "with-image";
  image?: React.ReactNode;
};

export const Card = ({
  variant = "primary",

  children,
  ...props
}: CardProps) => {
  const className = [styles.card, styles[`card-${variant}`]].join(" ");

  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
};

Card.Title = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.cardTitle}>{children}</div>
);

Card.Content = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.cardContent}>{children}</div>
);

Card.Image = ({ src, alt }: { src: string; alt: string }) => (
  <img className={styles.cardImage} src={src} alt={alt} />
);
