import styles from "./index.module.scss";
import withLoader from "../../helpers/hocs/withLoader";
import NewsBanner from "../NewsBanner";
import { INews } from "../../helpers/interfaces";

interface Props {
  banners?: INews[] | null;
}

const BannersList = ({ banners }: Props) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
};

const BannersListWithLoader = withLoader<Props>(
  BannersList
);

export default BannersListWithLoader;
