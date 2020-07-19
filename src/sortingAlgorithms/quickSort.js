export function getQuickSortAnimations(array) {
    const animations = [];
    const auxillaryArray = array.slice();
    quickSort(auxillaryArray, 0, auxillaryArray.length - 1, animations);
    return animations;
  }
  
  function quickSort(mainArray, startIndex, endIndex, animations) {
    let pivotIndex;
    if (startIndex < endIndex) {
      pivotIndex = partitionArray(
        mainArray,
        startIndex,
        endIndex,
        animations
      );
      quickSort(mainArray, startIndex, pivotIndex - 1, animations);
      quickSort(mainArray, pivotIndex + 1, endIndex, animations);
    }
  }
  
  function partitionArray(mainArray, startIndex, endIndex, animations) {
    let pivot = mainArray[endIndex];
    let pivotIndex = startIndex;
    for (let i = startIndex; i <= endIndex - 1; i++) {
      animations.push([i, endIndex]);
      animations.push([i, endIndex]);
      if (mainArray[i] <= pivot) {
        //Swap these two heights
        animations.push([i, mainArray[pivotIndex]]);  //we push twice to first swap their colors and then revert their color 
                                                      //if we do the push only once the values stay at their same place
        animations.push([pivotIndex, mainArray[i]]);
        swap(mainArray, i, pivotIndex);
        pivotIndex++;
      } else {
        animations.push([-1, -1]);
        animations.push([-1, -1]);
      }
      animations.push([-1, -1]);
      animations.push([-1, -1]);
    }
    animations.push([-1, -1]);
    animations.push([-1, -1]);
    animations.push([-1, -1]);
    animations.push([-1, -1]);
    //Swap these two heights
    animations.push([pivotIndex, mainArray[endIndex]]);
    animations.push([endIndex, mainArray[pivotIndex]]);
    swap(mainArray, pivotIndex, endIndex);
    return pivotIndex;
  }
  
  function swap(mainArray, firstIndex, secondIndex) {
    let temp = mainArray[firstIndex];
    mainArray[firstIndex] = mainArray[secondIndex];
    mainArray[secondIndex] = temp;
  }