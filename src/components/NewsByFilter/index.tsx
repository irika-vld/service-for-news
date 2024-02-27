import { TOTAL_PAGES } from "../../constants/constants";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { changeFilters } from "../../store/slices/newsSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import NewsFilters from "../NewsFilters";
import NewsList from "../NewsList";
import PaginationWrapper from "../PaginationWrapper";
import styles from "./index.module.scss";
import { useGetNewsQuery } from "../../store/services/newsApi";

const NewsByFilter = () => {
  const dispatch = useAppDispatch();

  const filters = useAppSelector((state) => state.news.filters);

  const debounceKeywords = useDebounce(filters.keywords as string, 1000);

  const { data, isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debounceKeywords,
  });

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(
        changeFilters({ key: "page_number", value: filters.page_number + 1 })
      );
    }
  };

  const handlePrevPage = () => {
    if (filters.page_number > 1) {
      dispatch(
        changeFilters({ key: "page_number", value: filters.page_number - 1 })
      );
    }
  };

  const handlePageClick = (pageNumber: number) => {
    dispatch(changeFilters({ key: "page_number", value: pageNumber }));
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} />

      <PaginationWrapper
        top
        bottom
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
      >
        <NewsList isLoading={isLoading} news={data?.news} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilter;
