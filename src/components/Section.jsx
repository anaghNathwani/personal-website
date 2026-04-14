import styles from "./Section.module.css";

export default function Section({ title, subtitle, children, id }) {
  return (
    <section className={styles.section} id={id}>
      {title && (
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
