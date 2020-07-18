import React,{useState,useEffect} from 'react';
import {getMergeSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import { getbubbleSortAnimations } from '../sortingAlgorithms/bubble';

import './SortingVisualizer.css';

// Change this value for the speed of the animations.
  function SortingVisualizer() {

    const ANIMATION_SPEED_MS = 1;


// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 200;

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
      array.push(randomIntFromInterval(5, 400));
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
          const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          const [barOneIndex, barTwoIndex] = animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          const barTwoStyle = arrayBars[barTwoIndex].style;
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

  // function bubbleSort() {
  //   this.disableSortButtons();
  //   const animations = getbubbleSortAnimations(this.state.array);
  //   for (let i = 0; i < animations.length; i++) {
  //     const isColorChange = i % 4 === 0 || i % 4 === 1;
  //     const arrayBars = document.getElementsByClassName("array-bar");
  //     if (isColorChange) {
  //       const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
  //       const [barOneIndex, barTwoIndex] = animations[i];
  //       const barOneStyle = arrayBars[barOneIndex].style;
  //       const barTwoStyle = arrayBars[barTwoIndex].style;
  //       setTimeout(() => {
  //         barOneStyle.backgroundColor = color;
  //         barTwoStyle.backgroundColor = color;
  //       }, i * ANIMATION_SPEED_MS);
  //     } else {
  //       const [barIndex, newHeight] = animations[i];
  //       if (barIndex === -1) {
  //         continue;
  //       }
  //       const barStyle = arrayBars[barIndex].style;
  //       setTimeout(() => {
  //         barStyle.height = `${newHeight}px`;
  //       }, i * ANIMATION_SPEED_MS);
  //     }
  //   }

      return (
        <div className="array-container">
         <div class="btn-container">
          <button class="btn" onClick={resetArray}>Generate</button>
          <button class="btn" onClick={mergeSort}>Merge Sort</button>
          <button class="btn" onClick={bubbleSort}>Bubble Sort</button>
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