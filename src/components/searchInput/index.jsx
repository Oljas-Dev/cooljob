import Button from "../button";
import style from "./style.module.css";

function SearchInput() {
  return (
    <div className={style.container}>
      <div className={style.inputContainer}></div>
      <Button btnText={"Поиск"} />
    </div>
  );
}

export default SearchInput;
