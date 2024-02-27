import styles from "./main.module.scss";
import LatestNews from "../LatestNews";
import NewsByFilter from "../NewsByFilter";

const Main = () => {
  return (
    <main className={styles.main}>
      <LatestNews />
      <NewsByFilter />
    </main>
  );
};

export default Main;
