import styles from "./style.module.css";

function CompaniesCard({ card }) {
  return (
    <li className={styles.container}>
      <img src={card.icon} alt={card.title} />
    </li>
  );
}

export default CompaniesCard;
