import styles from "./style.module.css";
import SocailLinks from "../socialLinks";

// icons
import cooljobIcon from "./../../assets/icons/footer/cooljob.svg";

function Links() {
  return (
    <div className={styles.container}>
      <a href="#">
        <img src={cooljobIcon} alt="cooljob icon" />
      </a>

      <SocailLinks />
    </div>
  );
}

export default Links;
