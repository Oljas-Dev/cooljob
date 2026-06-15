import style from "./style.module.css";
import SearchBar from "../searchBar";

function Main() {
  return (
    <div className={style.container}>
      <SearchBar />
    </div>
  );
}

export default Main;
