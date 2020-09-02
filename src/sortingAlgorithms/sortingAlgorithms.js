/*export const mergeSort = array => {
    if (array.length === 1) return array;
    const middleIdx = Math.floor(array.length / 2);
    const firstHalf = mergeSort(array.slice(0, middleIdx));
    const secondHalf = mergeSort(array.slice(middleIdx));
    const sortedArray = [];
    let i = 0,
        j =0;
    while (i < firstHalf.length && j < secondHalf.length) {
        if (firstHalf[i] < secondHalf[j]) {
            sortedArray.push(firstHalf[i++]);
        } else {
            sortedArray.push(secondHalf[j++]);
        }
    }
    
    while (i < firstHalf.length) sortedArray.push(firstHalf[i++]);
    while (j < secondHalf.length) sortedArray.push(secondHalf[j++]);
    return sortedArray;

};*/


                    /*Merge Sort*/

export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length-1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        // These are the values that we're comparing; we push them once
        // to change their colour.
        animations.push([i, j]);
        //These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            // We overwrite the value at the index k in the original array with the
            // value at index i in the auxiliary array.
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            //We overwrite the value at index k in the original array with the
            // value at index j in the auxialiary array.
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
        //animations.push(animation);
    }
    while (i <= middleIdx) {
        //These are the values that we're comparing; we push them once
        // to change their colour.
        animations.push([i, i]);
        //These are the valuees that we're comparing ; we push them a second 
        // time to revert their colour.
        animations.push([i, i]);
        //We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        //These are the values that we're comparing; we push them once
        // to change their colour.
        animations.push([j, j]);
        //These are the valuees that we're comparing ; we push them a second 
        // time to revert their colour.
        animations.push([j, j]);
        //We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];   
        }
    }

                 /* Quick Sort*/

// export function getQuickSortAnimations(array) {
//     const animations = [];
//     if (array.length <= 1) return array;
//     quickSortHelper(array, 0, array.length-1, animations);
//     return animations;
// }

// function quickSortHelper(
//     array,
//     startIdx,
//     endIdx,
//     animations,
//     ) {
//         if (startIdx < endIdx) return;
//         let pIndex = partition(array, startIdx, endIdx);
//         quickSortHelper(array, startIdx, pIndex-1, animations);
//         quickSortHelper(array, pIndex+1, endIdx, animations);
//         }

// function partition(
//     array,
//     startIdx,
//     endIdx,
//     animations,
//     ) {
//         let pivot = array[endIdx];
//         let pIndex = array[startIdx];
//         for (let i = startIdx; i < endIdx; i++) {
//             if (array[i] < pivot) {
//                 swap(array, i, pIndex);
//                 pIndex++;
//             }
//         }
//         swap(array,pivot,endIdx);
//         return pIndex;
//     }

// function swap(
//     array,
//     a,
//     b,
//     animations,
// ) {
//     animations.push([a,b]);
//     let temp = array[a];
//     array[a]=array[b];
//     array[b]=temp;
//     animations.push([a,b]);
// }

export function quicksortBasic(array) {
    const animations = [];
    if(array.length < 2) {
      return array;
    }
  
    var pivot = array[0];
    var lesser = [];
    var greater = [];
  
    for(var i = 1; i < array.length; i++) {
      if(array[i] < pivot) {
        lesser.push(array[i]);
      } else {
        greater.push(array[i]);
      }
    }
  
    return quicksortBasic(lesser).concat(pivot, quicksortBasic(greater));
    return animations;
  }
  
  //console.log(quicksortBasic(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  
  // swap function helper
  function swap(array, i, j, animations) {
    animations.push([i,j]);
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    animations.push([i,j]);
  }
  
  // classic implementation (with Hoare or Lomuto partition scheme, you can comment either one method or the other to see the difference)
  function quicksort(array, left, right) {
    left = left || 0;
    right = right || array.length - 1;
  
    // var pivot = partitionLomuto(array, left, right); // you can play with both partition
    var pivot = partitionHoare(array, left, right); // you can play with both partition
  
    if(left < pivot - 1) {
      quicksort(array, left, pivot - 1);
    }
    if(right > pivot) {
      quicksort(array, pivot, right);
    }
    return array;
  }
  // Lomuto partition scheme, it is less efficient than the Hoare partition scheme
  function partitionLomuto(array, left, right) {
    var pivot = right;
    var i = left;
  
    for(var j = left; j < right; j++) {
      if(array[j] <= array[pivot]) {
        swap(array, i , j);
        i = i + 1;
      }
    }
    swap(array, i, j);
    return i;
  }
  // Hoare partition scheme, it is more efficient than the Lomuto partition scheme because it does three times fewer swaps on average
  function partitionHoare(array, left, right) {
    var pivot = Math.floor((left + right) / 2 );
  
    while(left <= right) {
      while(array[left] < array[pivot]) {
        left++;
      }
      while(array[right] > array[pivot]) {
        right--;
      }
      if(left <= right) {
        swap(array, left, right);
        left++;
        right--;
      }
    }
    return left;
  }
  

