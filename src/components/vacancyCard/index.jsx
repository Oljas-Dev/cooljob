import styles from "./style.module.css";

function VacancyCard({ card }) {
  return (
    <li className={styles.container}>
      <div className={styles.categoryContainer}>
        <span
          className={styles.dot}
          style={{ backgroundColor: card.color }}
        ></span>
        <p>{card.section}</p>
      </div>
      <h4>{card.title}</h4>
      <span>
        <img src={card.locationIcon} alt="location icon" />
        <p>{card.location}</p>
      </span>

      <span>
        <img src={card.companyIcon} alt={`${card.companyName}-icon`} />
        <p>{card.lastSeen}</p>
      </span>
    </li>
  );
}

export default VacancyCard;
