export function getSelectionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxillaryArray = array.slice();
    selectionSort(auxillaryArray, 0, auxillaryArray.length - 1, animations);
    return animations;
  }
  function selectionSort(auxillaryArray,startIndex, endIndex, animations) {
    for (let i = startIndex; i < auxillaryArray.length - 1; i++) {
      let minIndex = i; //Finding minimum element in unsorted array
      for (let j = i + 1; j < auxillaryArray.length; j++) {
        animations.push(["comparison1", j, minIndex]);
        animations.push(["comparison2", j, minIndex]);
        if (auxillaryArray[j] < auxillaryArray[minIndex]) {
          minIndex = j;
        }
      }
      animations.push(["swap", minIndex, auxillaryArray[i]]);
      animations.push(["swap", i, auxillaryArray[minIndex]]);
      // Swap the found minimum element with the first element
      swap(auxillaryArray, minIndex, i);
    }
  }
  
  function swap(auxillaryArray, firstIndex, secondIndex) {
    let temp = auxillaryArray[firstIndex];
    auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
    auxillaryArray[secondIndex] = temp;
  }
  
