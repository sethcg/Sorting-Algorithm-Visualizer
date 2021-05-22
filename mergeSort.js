import { loadData } from "./main.js";

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

//Color Palette
var color_red = "#96384b";
var color_blue = "#387a96";
var color_gold = "#baa347";
var color_green = "#4b9638";

export async function mergeSort(array_to_sort){
    const sort_changes = getMergeSortChanges(array_to_sort);
    for(let index = 0; index < sort_changes.length; index++){
        const isColorChange = index % 3 !== 2;
        if(isColorChange){
            const [one, two] = sort_changes[index];
            //await sleep(20);
            const color = index % 3 === 0 ? color_red : color_blue;
            document.getElementById("bar_" + one).style.backgroundColor = color;
            document.getElementById("bar_" + two).style.backgroundColor = color;
        }else{
            //await sleep(20);
            const [one, height] = sort_changes[index];

            document.getElementById("bar_" + one).style.height = height +"px";
            document.getElementById("bar_" + one).style.marginTop = (400 - height) +"px";
        }
    }
}

function getMergeSortChanges(arr) {
    const changes = [];
    const temp_array = arr.slice();
    mergeSortHelper(arr, 0, arr.length - 1, temp_array, changes);
    return changes;
  }

//Recursive function
function mergeSortHelper(array, start, end, temp_array, changes){
    if(start === end) { return; }
	const mid = Math.floor((start + end) / 2);
	mergeSortHelper(array, start, mid, temp_array, changes);
	mergeSortHelper(array, mid + 1, end, temp_array, changes);
	merge(array, start, mid, end, temp_array, changes);
}

function merge(array, start, mid, end, temp_array, changes){
    let k = start;
    let i = start;
    let j = mid + 1;
    while (i <= mid && j <= end) {
        changes.push([i, j]);
        changes.push([i, j]);
        if (temp_array[i] <= temp_array[j]) {
            changes.push([k, temp_array[i]]);
            array[k++] = temp_array[i++];
        }else{
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