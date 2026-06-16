import styles from "./style.module.css";

function VacancyRow({ src, alt, text }) {
  return (
    <span className={styles.container}>
      <img src={src} alt={alt} />
      <p>{text}</p>
    </span>
  );
}

export default VacancyRow;
