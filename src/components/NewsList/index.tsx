import styles from "./index.module.scss";
import NewsItem from "../NewsItem";
import withLoader from "../../helpers/hocs/withLoader";
import { INews } from "../../helpers/interfaces";

interface Props {
  news?: INews[];
}
const NewsList = ({ news }: Props) => {
  return (
    <ul className={styles.list}>
      {news?.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

const NewsListWithLoader = withLoader<Props>(NewsList);

export default NewsListWithLoader;
