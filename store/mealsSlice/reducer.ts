import {createSlice} from "@reduxjs/toolkit";
import {getInitialState} from "./initialState";

const reducer = createSlice({
  name: "meals",
  initialState: getInitialState(),
  reducers: {},
  extraReducers: () => {
    //TODO: Implement on a relevant slice
    // builder.addCase(PURGE, (state) => {
    //   customEntityAdapter.removeAll(state);
    // });
  },
});

export const mealsReducer = reducer.reducer;
