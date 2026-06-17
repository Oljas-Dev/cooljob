import style from "./style.module.css";
import SearchBar from "../searchBar";
import CompaniesCardList from "../companiesCardList";
import CategoryCardList from "../categoryCardList";
import VacancyCardList from "../vacancyCardList";

function Main() {
  return (
    <div className={style.container}>
      <SearchBar />
      <CompaniesCardList />
      <CategoryCardList />
      <VacancyCardList />
    </div>
  );
}

export default Main;
