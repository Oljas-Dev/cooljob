import styles from "./style.module.css";

function PopularCitiesCard({ city }) {
  return (
    <li className={styles.container}>
      <a>{city}</a>
    </li>
  );
}

export default PopularCitiesCard;
