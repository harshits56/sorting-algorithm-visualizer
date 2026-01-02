export function mergeSort(array) {
  const animations = [];
  const arr = [...array];
  const aux = [...array];

  mergeSortHelper(arr, 0, arr.length - 1, aux, animations);
  return animations;
}

function mergeSortHelper(main, start, end, aux, animations) {
  if (start >= end) return;

  const mid = Math.floor((start + end) / 2);
  mergeSortHelper(aux, start, mid, main, animations);
  mergeSortHelper(aux, mid + 1, end, main, animations);
  merge(main, start, mid, end, aux, animations);
}

function merge(main, start, mid, end, aux, animations) {
  let i = start;
  let j = mid + 1;
  let k = start;

  while (i <= mid && j <= end) {
    animations.push({ type: "compare", indices: [i, j] });

    if (aux[i] <= aux[j]) {
      animations.push({
        type: "overwrite",
        index: k,
        value: aux[i],
      });
      main[k++] = aux[i++];
    } else {
      animations.push({
        type: "overwrite",
        index: k,
        value: aux[j],
      });
      main[k++] = aux[j++];
    }
  }

  while (i <= mid) {
    animations.push({
      type: "overwrite",
      index: k,
      value: aux[i],
    });
    main[k++] = aux[i++];
  }

  while (j <= end) {
    animations.push({
      type: "overwrite",
      index: k,
      value: aux[j],
    });
    main[k++] = aux[j++];
  }
}
