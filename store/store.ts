import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import {mealsReducer} from "./mealsSlice/reducer";

export const store = configureStore({
  reducer: {
    meals: mealsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
