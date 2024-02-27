import styles from "./index.module.scss";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import Image from "../Image";
import { INews } from "../../helpers/interfaces";

interface Props {
  item: INews;
}

const NewsBanner = ({item}: Props) => {
  return (
    <a href={item.url} className={styles.banner}>
      <Image image={item?.image}/>
      <h3 className={styles.bannerTitle}>{item.title}</h3>
      <p className={styles.bannerExtra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </a>
  );
};


export default NewsBanner;
