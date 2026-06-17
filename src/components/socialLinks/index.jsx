import styles from "./style.module.css";

// icons
import facebookIcon from "./../../assets/icons/footer/facebook.svg";
import googleIcon from "./../../assets/icons/footer/google.svg";
import linkedinIcon from "./../../assets/icons/footer/linkedin.svg";
import twitterIcon from "./../../assets/icons/footer/twitter.svg";

function SocailLinks() {
  return (
    <div className={styles.container}>
      <a href="#">
        <img src={facebookIcon} alt="facebook icon" />
      </a>
      <a href="#">
        <img src={googleIcon} alt="google icon" />
      </a>
      <a href="#">
        <img src={linkedinIcon} alt="linkedIn icon" />
      </a>
      <a href="#">
        <img src={twitterIcon} alt="twitter icon" />
      </a>
    </div>
  );
}

export default SocailLinks;
