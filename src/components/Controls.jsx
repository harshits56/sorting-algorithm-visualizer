import { heapSort } from "../algorithms/heapSort";
import { quickSort } from "../algorithms/quickSort";
import { mergeSort } from "../algorithms/mergeSort";
import { useDispatch, useSelector } from "react-redux";
import {
  generateArray,
  setAnimations,
  setRunning,
  setArray,
  setSpeed,
  setActiveIndices,
} from "../features/visualizer/visualizerSlice";

import { bubbleSort } from "../algorithms/bubbleSort";

export default function Controls() {
  const dispatch = useDispatch();
  const { array, speed, running } = useSelector(
    (state) => state.visualizer
  );

  const playAnimations = (animations) => {
  let i = 0;
  dispatch(setRunning(true));

  const interval = setInterval(() => {
    if (i >= animations.length) {
      clearInterval(interval);
      dispatch(setRunning(false));
      return;
    }

    const step = animations[i];

    dispatch((dispatch, getState) => {
      const currentArray = getState().visualizer.array;
      let newArray = [...currentArray];

      if (step.type === "compare") {
  dispatch(setActiveIndices(step.indices));
}

if (step.type === "swap" || step.type === "overwrite") {
  dispatch(
    setActiveIndices(
      step.indices ? step.indices : [step.index]
    )
  );
}


      if (step.type === "swap") {
        const [i1, i2] = step.indices;
        newArray[i1] = step.values[0];
        newArray[i2] = step.values[1];
      }

      if (step.type === "overwrite") {
        newArray[step.index] = step.value;
      }

      dispatch(setArray(newArray));
    });

    setTimeout(() => {
  dispatch(setActiveIndices([]));
}, speed);

    i++;
  }, speed);
};

  const runBubbleSort = () => {
    const anims = bubbleSort(array);
    dispatch(setAnimations(anims));
    playAnimations(anims);
  };

  return (
    <div className="controls">
      <button onClick={() => dispatch(generateArray())} disabled={running}>
        Generate New Array
      </button>

      <button onClick={runBubbleSort} disabled={running}>
        Bubble Sort
      </button>

      <button onClick={() => {
  const anims = mergeSort(array);
  dispatch(setAnimations(anims));
  playAnimations(anims);
}} disabled={running}>
  Merge Sort
</button>

      <button
  onClick={() => {
    const anims = quickSort(array);
    dispatch(setAnimations(anims));
    playAnimations(anims);
  }}
  disabled={running}
>
  Quick Sort
</button>

      <button
  onClick={() => {
    const anims = heapSort(array);
    dispatch(setAnimations(anims));
    playAnimations(anims);
  }}
  disabled={running}
>
  Heap Sort
</button>
<div style={{ marginTop: "15px" }}>
  <label>Speed: </label>
  <input
    type="range"
    min="5"
    max="200"
    value={speed}
    disabled={running}
    onChange={(e) => dispatch(setSpeed(Number(e.target.value)))}
  />
</div>


    </div>
    
  );
}

