import { configureStore } from "@reduxjs/toolkit";
import visualizerReducer from "../features/visualizer/visualizerSlice";

export const store = configureStore({
  reducer: {
    visualizer: visualizerReducer,
  },
});

