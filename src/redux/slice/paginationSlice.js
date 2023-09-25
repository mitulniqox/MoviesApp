import { createSlice } from "@reduxjs/toolkit"

export const paginationSlice = createSlice({
  name: 'paginationSlice',
  initialState: {
    currentPage: 0,
    onePageData: []
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setOnePageData: (state, action) => {
      state.onePageData = action.payload;
    },
    setDefaultPagination: (state) => {
      state.currentPage = 0;
      state.onePageData = [];

    }
  }
});

export const { setCurrentPage, setOnePageData, setDefaultPagination } = paginationSlice.actions;