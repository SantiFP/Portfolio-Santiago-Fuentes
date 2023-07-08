import { configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "./loading";
import { citiesReducer } from "./cities";


const store = configureStore({
  reducer: {loading: loadingReducer,cities: citiesReducer}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;









// interface CounterState {
//   count: number;
//   show: boolean;
// }

// interface AuthState {
//   isAuth: boolean;
// }

// const initialCounterState: CounterState = { count: 0, show: true };
// const initialAuthState: AuthState = { isAuth: false };

// const add = (state: CounterState) => {
//   state.count++;
// };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initialCounterState,
//   reducers: {
//     increment(state) {
//       add(state);
//     },
//     decrement(state) {
//       state.count--;
//     },
//     increase(state, action: PayloadAction<number>) {
//       state.count = state.count + action.payload;
//     },
//     toggleCounter(state) {
//       state.show = !state.show;
//     },
//   },
// });

// const authSlice = createSlice({
//   name: "auth",
//   initialState: initialAuthState,
//   reducers: {
//     logStatus(state) {
//       state.isAuth = !state.isAuth;
//     },
//   },
// });

// const store = configureStore({
//   reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
// });


// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

// export default store;
