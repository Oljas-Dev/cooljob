import PopularCitiesCard from "../popularCititesCard";
import styles from "./style.module.css";

function PopularCities() {
  const cities = [
    "Осака",
    "Коясан",
    "Токио",
    "Хаконэ",
    "Наэба",
    "Томаму",
    "Йокогама",
    "Нагоя",
    "Саппоро",
    "Кобе",
  ];
  return (
    <div className={styles.container}>
      <h4>Популярные города</h4>
      <ul>
        {cities.map((city) => (
          <PopularCitiesCard city={city} key={`city-${city}`} />
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default PopularCities;
