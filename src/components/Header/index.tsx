import styles from "./index.module.scss";
import { formatDate } from "../../helpers/formatDate";
import { themeIcons } from "../../assets";
import { useTheme } from "../../context/ThemeContext";
import Weather from "../Weather";
import Currency from "../Currency";

interface Props {
  setModalIsOpen: (x: boolean) => void;
}

const Header = ({ setModalIsOpen }: Props) => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <h1 className={styles.infoTitle}>service for news</h1>
        <p className={styles.infoDate}>{formatDate(new Date())}</p>
      </div>
      <button className={styles.survey} onClick={() => setModalIsOpen(true)}>
        Take a survey
      </button>

      <div className={styles.infoBlock}>
        <div className={styles.themeImg}>
          <img
            src={isDark ? themeIcons.light : themeIcons.dark}
            width={20}
            alt="theme"
            onClick={toggleTheme}
          />
        </div>
        <div className={styles.widgets}>
          <div className={styles.currency}>
            <Currency />
          </div>
          <div>
            <Weather />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
