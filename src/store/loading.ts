import { createSlice } from "@reduxjs/toolkit";

interface LoadingState {
  loading: boolean;
  notFound: boolean
}

const initialState: LoadingState = {
  loading: false,
  notFound: false
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    startLoading(state) {
      state.loading = true;
    },
    stopLoading(state) {
      state.loading = false;
    },
    notFoundHandler(state){
      state.notFound = !state.notFound
    }
  },
});

export const loadingActions = loadingSlice.actions;

export const loadingReducer = loadingSlice.reducer;