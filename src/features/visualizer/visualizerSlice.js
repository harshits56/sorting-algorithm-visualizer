import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  array: [],
  animations: [],
  activeIndices: [],
  running: false,
  speed: 50,
};

const visualizerSlice = createSlice({
  name: "visualizer",
  initialState,
  reducers: {
    generateArray(state) {
      state.array = Array.from({ length: 50 }, () =>
        Math.floor(Math.random() * 300) + 20
      );
      state.animations = [];
      state.running = false;
    },
    setAnimations(state, action) {
      state.animations = action.payload;
    },
    setRunning(state, action) {
      state.running = action.payload;
    },
    setArray(state, action) {
      state.array = action.payload;
    },
    setSpeed(state, action) {
  state.speed = action.payload;
    },
    setActiveIndices(state, action) {
  state.activeIndices = action.payload;
    },
  },
});

export const {
  generateArray,
  setAnimations,
  setRunning,
  setArray,
  setSpeed,
  setActiveIndices,
} = visualizerSlice.actions;


export default visualizerSlice.reducer;
