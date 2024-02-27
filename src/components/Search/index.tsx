import { useTheme } from "../../context/ThemeContext";
import styles from "./index.module.scss";

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

const Search = ({ keywords, setKeywords}: Props) => {
  const {isDark} = useTheme()
  return (
    <div
      className={styles.search}
    >
      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        className={`${styles.searchInput} ${isDark ? styles.dark : styles.light}`}
        placeholder="Search news..."
      />
    </div>
  );
};

export default Search;
