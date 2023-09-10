import {createSlice} from "@reduxjs/toolkit";
import {getInitialState} from "./initialState";

const reducer = createSlice({
  name: "meals",
  initialState: getInitialState(),
  reducers: {},
  extraReducers: () => {},
});

export const mealsReducer = reducer.reducer;
