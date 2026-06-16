import styles from "./style.module.css";

function Button({ btnText, newStyles }) {
  return (
    <button className={styles.btn} style={{ newStyles }}>
      {btnText}
    </button>
  );
}

export default Button;
