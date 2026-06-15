import styles from "./style.module.css";

function CategoryCard({ card }) {
  return (
    <li key={card.id} className={styles.container}>
      <a href="#" className={styles.link}>
        <img src={card.icon} alt="icon" />
        <h4>{card.title}</h4>
      </a>
    </li>
  );
}

export default CategoryCard;
