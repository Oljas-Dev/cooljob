import VacancyRow from "../vacancyRow";
import styles from "./style.module.css";

function VacancyTitle({ card }) {
  return (
    <div className={styles.container}>
      <h4 className={styles.h4}>{card.title}</h4>

      <VacancyRow
        src={card.locationIcon}
        alt={"location icon"}
        text={card.location}
      />
    </div>
  );
}

export default VacancyTitle;
