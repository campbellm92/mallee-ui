import { ComponentProps } from "react";
import styles from "./styles.module.css";

type FooterItem = {
  label: string;
  href: string;
};

type IconLink = {
  icon: React.ReactNode;
  href: string;
  alt?: string;
  iconLinks?: IconLink[];
  children?: React.ReactNode;
};

type FooterProps = ComponentProps<"footer"> & {
  variant?: "minimal" | "prominent";
  footerItems?: FooterItem[];
  logo?: React.ReactNode;
  iconLinks?: IconLink[];
};

export const Footer = ({
  variant = "minimal",
  footerItems = [],
  logo,
  iconLinks = [],
  children,
  ...props
}: FooterProps) => {
  const className = [
    styles.footer,
    styles[`footer-${variant}`],
    props.className, // allow additional custom classes
  ]
    .filter(Boolean) // remove any undefined or falsy values
    .join(" ");

  return (
    <footer {...props} className={className}>
      <div className={styles.footerContent}>
        {/* Left: Logo and Footer Items */}
        <div className={styles.leftSection}>
          {logo && <div className={styles.logo}>{logo}</div>}
          <ul className={styles.footerItems}>
            {footerItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Center: Children (e.g., Copyright Notice) */}
        {children && <div className={styles.centerSection}>{children}</div>}

        {/* Right: Icon Links */}
        {iconLinks.length > 0 && (
          <div className={styles.rightSection}>
            {iconLinks.map((iconLink, index) => (
              <a
                key={index}
                href={iconLink.href}
                className={styles.iconLink}
                aria-label={iconLink.alt || "Icon link"}
              >
                {iconLink.icon}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
};
