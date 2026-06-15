import styles from "./style.module.css";

// icons
import disney from "./../../assets/icons/disney.svg";
import facebook from "./../../assets/icons/facebook.svg";
import microsoft from "./../../assets/icons/microsoft.svg";
import sony from "./../../assets/icons/sony.svg";
import cocaCola from "./../../assets/icons/coca.svg";
import CompaniesCard from "../companiesCard";

function CompaniesCardList() {
  const companies = [
    {
      id: crypto.randomUUID(),
      title: "disney",
      icon: disney,
    },
    {
      id: crypto.randomUUID(),
      title: "facebook",
      icon: facebook,
    },
    {
      id: crypto.randomUUID(),
      title: "microsoft",
      icon: microsoft,
    },
    {
      id: crypto.randomUUID(),
      title: "sony",
      icon: sony,
    },
    {
      id: crypto.randomUUID(),
      title: "coca-cola",
      icon: cocaCola,
    },
  ];
  return (
    <div className={styles.container}>
      <p>Помогаем найти работу:</p>
      <ul>
        {companies.map((company) => {
          return <CompaniesCard key={company.id} card={company} />;
        })}
      </ul>
    </div>
  );
}

export default CompaniesCardList;
