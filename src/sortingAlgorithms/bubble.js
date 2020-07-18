export function getbubbleSortAnimations(array) {
    const animations = [];
    const auxiliaryArray = array.slice();
    bubbleSort(auxiliaryArray, animations);
    return animations;
  }
  
  function bubbleSort(mainArr, animations) {
    const n = mainArr.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        animations.push([j, j + 1]);
        animations.push([j, j + 1]);
        if (mainArr[j] > mainArr[j + 1]) {
          animations.push([j, mainArr[j + 1]]);
          animations.push([j + 1, mainArr[j]]);
          swap(mainArr, j, j + 1);
        } else {
          animations.push([-1, -1]);
          animations.push([-1, -1]);
        }
      }
    }
  }
  
  function swap(auxiliaryArray, firstIndex, secondIndex) {
    let temp = auxiliaryArray[firstIndex];
    auxiliaryArray[firstIndex] = auxiliaryArray[secondIndex];
    auxiliaryArray[secondIndex] = temp;
  }