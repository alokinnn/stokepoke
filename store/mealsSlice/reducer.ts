import {createSlice} from "@reduxjs/toolkit";
import {getInitialState} from "./initialState";
import {getAllBowlTypes} from "./actions";

const reducer = createSlice({
  name: "meals",
  initialState: getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBowlTypes.fulfilled, (state, action) => {
      state.bowls = action.payload;
    });
    //TODO: Implement on a relevant slice
    // builder.addCase(PURGE, (state) => {
    //   customEntityAdapter.removeAll(state);
    // });
  },
});

export const mealsReducer = reducer.reducer;
