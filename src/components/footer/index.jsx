import Links from "../links";
import PopularCities from "../popularCities";
import styles from "./style.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <PopularCities />
      <Links />
    </div>
  );
}

export default Footer;
