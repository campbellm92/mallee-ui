import { ComponentProps } from "react";
import styles from "./styles.module.css";

type CardProps = ComponentProps<"div"> & {
  variant?: "filled" | "outline" | "with-image" | "wide";
  color?: "primary" | "secondary" | "tertiary";
  image?: React.ReactNode;
  enableHoverEffect?: boolean;
};

export const Card = ({
  variant = "filled",
  color = "primary",
  image,
  enableHoverEffect = true,
  children,
  ...props
}: CardProps) => {
  const className = [
    styles.card,
    styles[`card-${variant}`],
    styles[`card-${color}`],
    enableHoverEffect && styles["card-hover-enabled"],
    props.className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div {...props} className={className}>
      {image && <div className={styles.cardImageContainer}>{image}</div>}
      {children}
    </div>
  );
};

const CardImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className={styles.cardImageContainer}>
    <img className={styles.cardImage} src={src} alt={alt} />
  </div>
);

const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.cardTitle}>{children}</div>
);

const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.cardContent}>{children}</div>
);

Card.Image = CardImage;
Card.Title = CardTitle;
Card.Content = CardContent;

export default Card;
