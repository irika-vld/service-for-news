import { useLayoutEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import BannersList from "../BannersList";
import styles from "./index.module.scss";
import { useGetLatestNewsQuery } from "../../store/services/newsApi";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);
  const { isDark } = useTheme();
  const [showNews, setShowNews] = useState(true);
  
  const handleSize = () => {
    window.innerWidth >= 768 && showNews && setShowNews(true);
  };
  useLayoutEffect(() => {
    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <section
      className={`${styles.section} ${isDark ? styles.dark : styles.light}`}
    >
      <button className={styles.button} onClick={() => setShowNews(!showNews)}>
        {showNews ? "Hide latest news" : "Show latest news"}
      </button>

      {showNews ? (
        <BannersList banners={data?.news} isLoading={isLoading} />
      ) : (
        <p>You can see the latest news here</p>
      )}
    </section>
  );
};

export default LatestNews;
