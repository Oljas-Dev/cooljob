import styles from "./styles.module.css";

// icons
import finance from "./../../assets/icons/finance.svg";
import cargoCar from "./../../assets/icons/cargoCar.svg";
import design from "./../../assets/icons/design.svg";
import utensils from "./../../assets/icons/utensils.svg";
import medicine from "./../../assets/icons/medicine.svg";
import media from "./../../assets/icons/media.svg";
import support from "./../../assets/icons/support.svg";
import management from "./../../assets/icons/management.svg";
import cart from "./../../assets/icons/cart.svg";
import CategoryCard from "../categoryCard";
import arrow from "./../../assets/icons/arrow.svg";

const categoryCardList = [
  {
    id: Math.random(),
    title: "Финансы",
    icon: finance,
  },
  {
    id: Math.random(),
    title: "Грузоперевозки",
    icon: cargoCar,
  },
  {
    id: Math.random(),
    title: "Дизайн",
    icon: design,
  },
  {
    id: Math.random(),
    title: "Ресторанный бизнес",
    icon: utensils,
  },
  {
    id: Math.random(),
    title: "Медицина",
    icon: medicine,
  },
  {
    id: Math.random(),
    title: "Мультимедиа",
    icon: media,
  },
  {
    id: Math.random(),
    title: "Служба поддержки",
    icon: support,
  },
  {
    id: Math.random(),
    title: "Менеджмент",
    icon: management,
  },
  {
    id: Math.random(),
    title: "Продажи",
    icon: cart,
  },
  {
    id: Math.random(),
    title: "Больше категорий",
    icon: arrow,
  },
];
function CategoryCardList() {
  return (
    <div className={styles.container}>
      <h2>
        Работа <br /> по категориям
      </h2>
      <ul>
        {categoryCardList.map((card) => {
          return <CategoryCard key={card.id} card={card} />;
        })}
      </ul>
    </div>
  );
}
export default CategoryCardList;
