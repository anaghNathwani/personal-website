import styles from "./Button.module.css";

/**
 * variant: "primary" | "secondary" | "ghost"
 * size: "sm" | "md" | "lg"
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  external,
  ...props
}) {
  const cls = [styles.btn, styles[variant], styles[size]].join(" ");

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
