import { createSlice } from "@reduxjs/toolkit";

interface LoadingState {
  loading: boolean;
  notFound: boolean
}

const initialState: LoadingState = {
  loading: true,
  notFound: false
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    loadingHandler(state) {
      state.loading = !state.loading;
    },
    notFoundHandler(state){
      state.notFound = !state.notFound
    }
  },
});

export const loadingActions = loadingSlice.actions;

export const loadingReducer = loadingSlice.reducer