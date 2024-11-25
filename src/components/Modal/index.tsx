import { ComponentProps } from "react";
import styles from "./styles.module.css";

type ModalProps = ComponentProps<"div"> & {
  variant?: "basic";
};

export const Modal = ({
  variant = "basic",

  ...props
}: ModalProps) => {
  const className = [
    styles.div,
    styles[`div-${variant}`],
    props.className, // allow additional custom classes
  ]
    .filter(Boolean) // remove any undefined or falsy values
    .join(" ");

  return <div {...props} className={className}></div>;
};
