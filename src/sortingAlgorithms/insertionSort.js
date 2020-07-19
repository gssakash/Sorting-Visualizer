export function getInsertionSortAnimations(array) {
  let animations = [];
  let auxillaryArray = array.slice();
  insertionSort(auxillaryArray, animations);
  array = auxillaryArray;
  return [animations, array];
}

function insertionSort(auxillaryArray, animations) { 
  const N = auxillaryArray.length;
  for (let i = 1; i < N; i++) {
    let key = auxillaryArray[i];
    let j = i - 1;
    animations.push(["comparison1", j, i]);
    animations.push(["comparison2", j, i]);
    while (j >= 0 && auxillaryArray[j] > key) {
      animations.push(["overwrite", j + 1, auxillaryArray[j]]);
      auxillaryArray[j + 1] = auxillaryArray[j];
      j = j - 1;
      if (j >= 0) {
        animations.push(["comparison1", j, i]);
        animations.push(["comparison2", j, i]);
      }
    }
    animations.push(["overwrite", j + 1, key]);
    auxillaryArray[j + 1] = key;
  }
}