import {InitialState} from "./types";

export const getInitialState = (): InitialState => ({
  bowls: [
    {
      id: "123",
      name: "test",
    },
  ],
});
