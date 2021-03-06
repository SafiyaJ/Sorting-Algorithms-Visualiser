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


export function getQuickSortAnimations(array) {
  const animations = [];
  const swap = [];

  if (array.length <= 1) {
    return array;
  }
  

  const pivot = array[array.length-1];
  const leftArr = [];
  const rightArr = [];
  for (const el of array.slice(0, array.length-1)){
    el <= pivot ? leftArr.push(el) : rightArr.push(el) && swap.push([el,pivot]);
    animations.push(["comparison1",el,pivot]);
    animations.push(["comparison2",el,pivot]); 
    //animations.push(["swap",el,pivot]); 
    


    //el > pivot ? animations.push(["swap",el,pivot]):animations.push(["swap",el,pivot]); 
    
}
//   for (let i=0; array.length-1; i++){
//     if (array[i] < pivot){
//       //animations.push([array[i],pivot]);
//       leftArr.push(array[i]);
//     } else {
//       //animations.push([array[i],pivot]);
//       rightArr.push(array[i]);
//     }
  

  let sortArray= [...getQuickSortAnimations(leftArr), pivot, ...getQuickSortAnimations(rightArr)];
  //return [[...getQuickSortAnimations(leftArr), pivot, ...getQuickSortAnimations(rightArr)], animations];
  //return animations;
  return [animations, sortArray, swap];

}



// export function getQuickSortAnimations(array) {
//   const animations = [];
//   if (array.length <= 1) return array;
//   quickSortHelper(array, 0, array.length-1, animations);
//   return array;
  
// }

// function quickSortHelper(
//   array,
//   startIdx,
//   endIdx,
//   animations,
//   ) {
//       if (startIdx < endIdx) {
//       let pIndex = partition(array, startIdx, endIdx, animations);
//       quickSortHelper(array, startIdx, pIndex-1, animations);
//       quickSortHelper(array, pIndex+1, endIdx, animations);
//         }
//       }

// function partition(
//   array,
//   startIdx,
//   endIdx,
//   animations,
//   ) {
//       let pivot = array[endIdx];
//       let pIndex = startIdx;
//       for (let i = startIdx; i < endIdx; i++) {
//           if (array[i] < pivot) {
//               animations.push([i, pIndex]);
//               swap(array, i, pIndex);
//               animations.push([i, pIndex]);
//               pIndex++;
//           }
//       }
//       swap(array,pivot,endIdx);
//       return pIndex;
//   }



// function swap(
//   array,
//   a,
//   b,
//   ) {
//     let temp = array[a];
//     array[a]=array[b];
//     array[b]=temp;
// }

