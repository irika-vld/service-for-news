import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFilters, INews } from "../../helpers/interfaces";
import { PAGE_SIZE } from "../../constants/constants";

interface State {
  news: INews[];
  filters: IFilters;
}

const initialState: State = {
  news: [],
  filters: {
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  },
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    getNews: (state, action: PayloadAction<INews[]>) => {
      state.news = action.payload;
    },
    changeFilters: (
      state,
      action: PayloadAction<{ key: string; value: string | number | null }>
    ) => {
      const { key, value } = action.payload;
      state.filters = { ...state.filters, [key]: value };
    },
  },
});

export const { getNews, changeFilters } = newsSlice.actions;

export default newsSlice.reducer;
