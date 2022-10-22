import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  loading: false,
  error: false,
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
  },
});

export const { Loading, Error } = dataSlice.actions;

export default dataSlice.reducer;
