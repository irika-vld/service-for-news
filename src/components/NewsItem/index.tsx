import styles from "./index.module.scss";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import { INews } from "../../helpers/interfaces";
import { useTheme } from "../../context/ThemeContext";

interface Props {
  item: INews
}

const NewsItem = ({ item }: Props ) => {
  const { isDark } = useTheme();
  return (
    <a href={item.url} className={`${styles.item} ${isDark ? styles.dark : styles.light}`}>
      <div
        className={styles.itemWrapper}
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className={styles.itemInfo}>
        <h3 className={styles.itemInfoTitle}>{item.title}</h3>
        <p className={styles.itemInfoExtra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </a>
  );
};

export default NewsItem;
