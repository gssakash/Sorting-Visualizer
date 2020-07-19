import React,{useState,useEffect} from 'react';
import {getMergeSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import { getbubbleSortAnimations } from '../sortingAlgorithms/bubbleSort';
import { getQuickSortAnimations } from '../sortingAlgorithms/quickSort';
import { getInsertionSortAnimations } from '../sortingAlgorithms/insertionSort';
import { getSelectionSortAnimations } from '../sortingAlgorithms/selectionSort';

import './SortingVisualizer.css';

// Change this value for the speed of the animations.
  function SortingVisualizer() {

 const ANIMATION_SPEED_MS = 1;


// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 200;  //OriginalValue : "200"

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'yellow';

  
  const [array,setArray] = useState([]);

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
    
}

  useEffect(() => {
    resetArray();
  },[])

  function resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5,400));  //5,400
    }
    setArray(array);
  }

  function mergeSort() {
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  function bubbleSort() {
    const animations = getbubbleSortAnimations(array);
      for (let i = 0; i < animations.length; i++) {
        const isColorChange = i % 4 === 0 || i % 4 === 1;
        const arrayBars = document.getElementsByClassName("array-bar");
        if (isColorChange) {
          const [barOneIndex, barTwoIndex] = animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          const barTwoStyle = arrayBars[barTwoIndex].style;
          const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS/10);
        } else {
          const [barIndex, newHeight] = animations[i];
          if (barIndex === -1) {
            continue;
          }
          const barStyle = arrayBars[barIndex].style;
          setTimeout(() => {
            barStyle.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED_MS/16);
      }
    }
  }

  

  function quickSort(){
     const animations = getQuickSortAnimations(array)
     for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 6 === 0 || i % 6 === 1;
      const arrayBars = document.getElementsByClassName("array-bar");
      if (isColorChange) {
        const [barOneIndex, barTwoIndex] = animations[i];
        if (barOneIndex === -1) { //dont ignore this check prevents the "style not defined error"
          continue;
        }
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const color = i % 6 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS/10);
      } else {
        const [barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
          continue;
        }
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS/3);
    }
  }
  }

  function insertionSort(){ //2 and 6 seems viable  1 and 3 orrr 2 and 5 (DIFFERENCE NEEDED)
    const [animations] = getInsertionSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === "comparision1" ||
        animations[i][0] === "comparision2";
      const arrayBars = document.getElementsByClassName("array-bar");
      if (isColorChange === true) {
        const color =
          animations[i][0] === "comparision1" ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [temp, barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [temp, barIndex, newHeight] = animations[i];
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS/6);
      }
    }
  }

  

  function selectionSort(){  //DIFFERENCE NEEDED
    const animations = getSelectionSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === "comparision1" ||
        animations[i][0] === "comparision2";
      const arrayBars = document.getElementsByClassName("array-bar");
      if (isColorChange === true) {
        const color =
          animations[i][0] === "comparision1" ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [temp, barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [temp, barIndex, newHeight] = animations[i];
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS/16);
      }
    }
  }

  



      return (
        <div className="array-container">
         <div className="btn-container">
          <button className="btn" onClick={resetArray}>Generate</button>
          <button className="btn" onClick={mergeSort}>Merge Sort</button>
          <button className="btn" onClick={bubbleSort}>Bubble Sort</button>
          <button className="btn" onClick={quickSort}>Quick Sort</button>
          <button className="btn" onClick={insertionSort}>Insertion Sort</button>
          <button className="btn" onClick={selectionSort}>Selection Sort</button>
          </div>
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
              }}></div>
          ))}
         
          <br />
        </div>
      );
    }

  
  
export default SortingVisualizer