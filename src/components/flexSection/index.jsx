import styles from "./style.module.css";

function FlexSection({ children }) {
  return <section className={styles.container}>{children}</section>;
}

export default FlexSection;
