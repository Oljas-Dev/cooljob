import SearchInput from "../searchInput";
import style from "./style.module.css";

function SearchBar() {
  return (
    <section className={style.container}>
      <h1>
        Один клик
        <br /> и работа в кармане
      </h1>
      <SearchInput />
    </section>
  );
}

export default SearchBar;
