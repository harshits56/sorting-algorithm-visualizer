export function heapSort(array) {
  const animations = [];
  const arr = [...array];
  const n = arr.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i, animations);
  }

  // Extract elements one by one
  for (let i = n - 1; i > 0; i--) {
    animations.push({
      type: "swap",
      indices: [0, i],
      values: [arr[i], arr[0]],
    });

    [arr[0], arr[i]] = [arr[i], arr[0]];

    heapify(arr, i, 0, animations);
  }

  return animations;
}

function heapify(arr, n, i, animations) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n) {
    animations.push({ type: "compare", indices: [left, largest] });
    if (arr[left] > arr[largest]) largest = left;
  }

  if (right < n) {
    animations.push({ type: "compare", indices: [right, largest] });
    if (arr[right] > arr[largest]) largest = right;
  }

  if (largest !== i) {
    animations.push({
      type: "swap",
      indices: [i, largest],
      values: [arr[largest], arr[i]],
    });

    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest, animations);
  }
}
