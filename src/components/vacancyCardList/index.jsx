import styles from "./style.module.css";
import SecondaryText from "../secondaryText";
import FlexSection from "../flexSection";
import VacancyCard from "../vacancyCard";

// icons
import sony from "./../../assets/icons/vacancies/sony.svg";
import facebook from "./../../assets/icons/vacancies/facebook.svg";
import coca from "./../../assets/icons/vacancies/coca.svg";
import locationIcon from "./../../assets/icons/vacancies/locationIcon.svg";

function VacancyCardList() {
  const vacancies = [
    {
      section: "Финансы",
      title: "Менеджер по управлению финансами в крупной компании",
      location: "Осака, Япония",
      locationIcon: locationIcon,
      lastSeen: "Sony, 3 дня назад",
      companyIcon: sony,
      companyName: "sony",
      color: "#5182FF",
    },
    {
      section: "Продажи",
      title: "Специалист по продажам",
      location: "Коясан, Япония",
      locationIcon: locationIcon,
      lastSeen: "Facebook, 7 дней назад",
      companyIcon: facebook,
      companyName: "facebook",
      color: "#FF51EE",
    },
    {
      section: "Служба поддержки",
      title: "Оператор колл центра",
      location: "Томаму, Япония",
      locationIcon: locationIcon,
      lastSeen: "CocaCola, 1 день назад",
      companyIcon: coca,
      companyName: "coca-cola",
      color: "#58D94D",
    },
    {
      section: "Мультимедиа",
      title: "Системный администратор",
      location: "Токио, Япония",
      locationIcon: locationIcon,
      lastSeen: "Sony, 3 дня назад",
      companyIcon: sony,
      companyName: "sony",
      color: "#FF9051",
    },
    {
      section: "Дизайн",
      title: "Дизайнер интерьера в профессиональную студию в центре города",
      location: "Йокогама, Япония",
      locationIcon: locationIcon,
      lastSeen: "Facebook, 7 дней назад",
      companyIcon: facebook,
      companyName: "facebook",
      color: "#F84242",
    },
    {
      section: "Грузоперевозки",
      title: "Водитель на дальние дистанции",
      location: "Кобе, Япония",
      locationIcon: locationIcon,
      lastSeen: "CocaCola, 1 день назад",
      companyIcon: coca,
      companyName: "coca-cola",
      color: "#383838",
    },
  ];
  return (
    <FlexSection>
      <div className={styles.headingContainer}>
        <h2>Новые вакансии</h2>
        <SecondaryText text="Найди работу своей мечты прямо сейчас" />
      </div>
      <ul className={styles.ulList}>
        {vacancies.map((vacancy) => {
          return <VacancyCard card={vacancy} />;
        })}
      </ul>
    </FlexSection>
  );
}

export default VacancyCardList;
