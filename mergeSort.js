import { loadData } from "./main.js";

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

//Color Palette
var color_red = "#96384b";
var color_blue = "#387a96";
var color_gold = "#baa347";
var color_green = "#4b9638";

export async function mergeSort(array){
    const sort_changes = getChanges(array)
    const bars = document.getElementsByClassName('bar');
    for(let index = 0; index < sort_changes.length; index++){
        const isColorChange = index % 3 !== 2;
        if(isColorChange){
            const [one, two] = sort_changes[index];
            const color = index % 3 === 0 ? color_red : color_blue;

            //Change Color
            document.getElementById("bar_" + one).style.backgroundColor = color;
            document.getElementById("bar_" + two).style.backgroundColor = color;
            await sleep(50);
        }else{

            //Swap
            await sleep(50);
            const [barIndex, height] = sort_changes[index];
            bars[barIndex].style.height = height + "px";
            bars[barIndex].style.marginTop = (400 - height) +"px";
        }
    }
    console.log("timesMergeSortHelperCalled: " + timesMergeSortHelperCalled);
    console.log("timesMergeCalled: " + timesMergeCalled);
}

function getChanges(array) {
    const changes = [];
    const temp_array = array.slice();
    mergeSortHelper(array, 0, array.length - 1, temp_array , changes);
    return changes;
  }
  
  var timesMergeSortHelperCalled = 0;
  function mergeSortHelper(array, start, end, temp_array, changes){
    timesMergeSortHelperCalled++;
    if (start === end) return;
    const mid = Math.floor((start + end) / 2);
    mergeSortHelper(temp_array , start, mid, array, changes);
    mergeSortHelper(temp_array , mid + 1, end, array, changes);
    merge(array, start, mid, end, temp_array, changes);
  }
  
  var timesMergeCalled = 0;
  function merge(array, start, mid, end, temp_array, changes){
    
    timesMergeCalled++;

    let k = start;
    let i = start;
    let j = mid + 1;
    while (i <= mid && j <= end) {
        changes.push([i, j]);
        changes.push([i, j]);
      if (temp_array[i] <= temp_array[j]) {
        changes.push([k, temp_array[i]]);
        array[k++] = temp_array[i++];
      } else {
        changes.push([k, temp_array[j]]);
        array[k++] = temp_array[j++];
      }
    }
    while (i <= mid) {
        changes.push([i, i]);
        changes.push([i, i]);
        changes.push([k, temp_array[i]]);
        array[k++] = temp_array[i++];
    }
    while (j <= end) {
        changes.push([j, j]);
        changes.push([j, j]);
        changes.push([k, temp_array[j]]);
        array[k++] = temp_array[j++];
    }
  }
  