import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  loading: false,
  error: false,
  isDark: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    Loading: (state, action) => {
      state.loading = action.payload;
    },

    Error: (state, action) => {
      state.error = action.payload;
    },

    Theme: (state, action) => {
      state.isDark = action.payload;
    },

    OpenSidebar: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { Loading, Error, Theme, OpenSidebar } = dataSlice.actions;

export default dataSlice.reducer;
