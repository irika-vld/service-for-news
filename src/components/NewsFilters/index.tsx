import { useTheme } from "../../context/ThemeContext";
import { IFilters } from "../../helpers/interfaces";
import { changeFilters } from "../../store/slices/newsSlice";
import { useAppDispatch } from "../../store";
import Categories from "../Categories";
import Search from "../Search";
import Slider from "../Slider";
import styles from "./index.module.scss";
import { useGetCategoriesQuery } from "../../store/services/newsApi";

interface Props {
  filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {
  const dispatch = useAppDispatch();
  const { isDark } = useTheme();

  const { data } = useGetCategoriesQuery(null);

  return (
    <div className={styles.filters}>
      {data ? (
        <Slider isDark={isDark}>
          <Categories
            categories={data.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(changeFilters({ key: "category", value: category }))
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(changeFilters({ key: "keywords", value: keywords }))
        }
      />
    </div>
  );
};

export default NewsFilters;
