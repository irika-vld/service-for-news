import { ForwardedRef, forwardRef } from "react";
import styles from "./index.module.scss";
import { CategoriesType } from "../../helpers/interfaces";
import { useTheme } from "../../context/ThemeContext";

interface Props {
  categories: CategoriesType[];
  setSelectedCategory: (category: CategoriesType | null) => void;
  selectedCategory: CategoriesType | null;
}

const Categories = forwardRef(
  (
    { categories, setSelectedCategory, selectedCategory }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const { isDark } = useTheme();
    return (
      <div ref={ref} className={styles.categories}>
        <button
          onClick={() => setSelectedCategory(null)}
          className={
            !selectedCategory
              ? `${styles.categoriesActive} ${
                  isDark ? styles.dark : styles.light
                }`
              : `${styles.categoriesItem} ${
                  isDark ? styles.dark : styles.light
                }`
          }
        >
          All
        </button>

        {categories.map((category) => {
          return (
            <button
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? `${styles.categoriesActive} ${
                      isDark ? styles.dark : styles.light
                    }`
                  : `${styles.categoriesItem} ${
                      isDark ? styles.dark : styles.light
                    }`
              }
              key={category}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  }
);

Categories.displayName = "Categories";
export default Categories;
