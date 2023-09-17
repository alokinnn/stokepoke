import {createAsyncThunk} from "@reduxjs/toolkit";
import {Bowl} from "./types";
import {sleep} from "../../src/utils";

export const getAllBowlTypes = createAsyncThunk<Bowl[]>(
  "meals/getAllBowlTypes",
  async () => {
    await sleep(2000);
    return [
      {
        id: 0,
        name: "Chicken",
        description: "Chicken bowl description",
        image: undefined,
        imagePath: "",
      },
    ];
  }
);
