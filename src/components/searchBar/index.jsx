import SearchInput from "../searchInput";
import style from "./style.module.css";

function SearchBar() {
  return (
    <section className={style.container}>
      <h2>
        Один клик
        <br /> и работа в кармане
      </h2>
      <SearchInput />
    </section>
  );
}

export default SearchBar;
