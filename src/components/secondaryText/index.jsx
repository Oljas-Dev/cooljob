import styles from "./style.module.css";

function SecondaryText({ text }) {
  return <p className={styles.main}>{text}</p>;
}

export default SecondaryText;
