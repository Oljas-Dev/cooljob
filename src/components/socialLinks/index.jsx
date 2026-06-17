import styles from "./style.module.css";

// icons
import facebookIcon from "./../../assets/icons/footer/facebook.svg";
import googleIcon from "./../../assets/icons/footer/google.svg";
import linkedinIcon from "./../../assets/icons/footer/linkedin.svg";
import twitterIcon from "./../../assets/icons/footer/twitter.svg";

function SocailLinks() {
  return (
    <div className={styles.container}>
      <img src={facebookIcon} alt="facebook icon" />
      <img src={googleIcon} alt="google icon" />
      <img src={linkedinIcon} alt="linkedIn icon" />
      <img src={twitterIcon} alt="twitter icon" />
    </div>
  );
}

export default SocailLinks;
