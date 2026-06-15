import style from "./style.module.css";

function SearchInput() {
  return (
    <div className={style.container}>
      <div className={style.inputContainer}></div>
      <button className={style.btn}>Поиск</button>
    </div>
  );
}

export default SearchInput;
