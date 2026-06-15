import styles from "./styles.module.css";
import Header from "../../components/header";
import Main from "../../components/main";
import CompaniesCardList from "../../components/companiesCardList";
// import CategoryCardList from "../../components/categoryCardList";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <Main />
      <CompaniesCardList />
      {/* <CategoryCardList /> */}
    </div>
  );
}

export default Home;
