import styles from "./style.module.css";

function VacancyCategory({ card }) {
  return (
    <div className={styles.categoryContainer}>
      <span
        className={styles.dot}
        style={{ backgroundColor: card.color }}
      ></span>
      <p>{card.section}</p>
    </div>
  );
}

export default VacancyCategory;
