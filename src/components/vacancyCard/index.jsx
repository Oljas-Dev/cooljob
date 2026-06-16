import styles from "./style.module.css";
import VacancyCategory from "../vacancyCategory.jsx/index.jsx";
import VacancyTitle from "../vacancyTitle/index.jsx";
import VacancyRow from "../vacancyRow/index.jsx";

function VacancyCard({ card }) {
  return (
    <li className={styles.container}>
      <VacancyCategory card={card} />

      <VacancyTitle card={card} />

      <VacancyRow
        src={card.companyIcon}
        alt={`${card.companyName}-icon`}
        text={card.lastSeen}
      />
    </li>
  );
}

export default VacancyCard;
