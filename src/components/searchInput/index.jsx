import Button from "../button";
import style from "./style.module.css";

// icon
import locationSearch from "./../../assets/icons/location_search.svg";
import searchIcon from "./../../assets/icons/search_icon.svg";

function SearchInput() {
  return (
    <div className={style.container}>
      <div className={style.inputContainer}>
        <div className={style.inputLeft}>
          <input type="text" placeholder="Должность или компания" />
          <button>
            <img src={searchIcon} alt="search job icon" />
          </button>
        </div>
        <div className={style.inputRight}>
          <input type="text" placeholder="Город, Страна" />
          <button>
            <img src={locationSearch} alt="search city icon" />
          </button>
        </div>
      </div>
      <Button
        btnText={"Поиск"}
        newStyles={{ boxShadow: "6px 5px 9px 0 rgba(0, 0, 0, 0.35)" }}
      />
    </div>
  );
}

export default SearchInput;
