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
  image,
  children,
  ...props
}: CardProps) => {
  const className = [styles.card, styles[`card-${variant}`]]
    .filter(Boolean)
    .join(" ");

  return (
    <div {...props} className={className}>
      {image && <div className={styles.cardImageContainer}>{image}</div>}
      {children}
    </div>
  );
};

Card.Image = ({ src, alt }: { src: string; alt: string }) => (
  <div className={styles.cardImageContainer}>
    <img className={styles.cardImage} src={src} alt={alt} />
  </div>
);

Card.Title = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.cardTitle}>{children}</div>
);

Card.Content = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.cardContent}>{children}</div>
);
