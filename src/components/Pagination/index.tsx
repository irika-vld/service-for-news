import { useTheme } from "../../context/ThemeContext";
import { IPaginationProps } from "../../helpers/interfaces";
import styles from "./index.module.scss";

const Pagination = ({
  totalPages,
  currentPage,
  handlePageClick,
  handleNextPage,
  handlePrevPage,
}: IPaginationProps) => {
  const { isDark } = useTheme();
  return (
    <div
      className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}
    >
      <button
        disabled={currentPage <= 1}
        onClick={handlePrevPage}
        className={styles.arrow}
      >
        {"<"}
      </button>
      <div className={`${styles.list} ${isDark ? styles.dark : styles.light}`}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              className={styles.pageNumber}
              disabled={index + 1 === currentPage}
              key={index}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}
        className={styles.arrow}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
