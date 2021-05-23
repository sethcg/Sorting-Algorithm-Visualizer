import { boolean_reset } from "../main.js";

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

//Color Palette
var color_red = "#96384b";
var color_blue = "#387a96";
var color_gold = "#c0ac59";
var color_green = "#4b9638";
var color_purple = "#a04b87";
var color_pink = "#bc81ab";

var mergecounter = 0;

export async function mergeSort(array){
    mergecounter = 0;
    var sort_changes = getChanges(array)

    const half = Math.floor(array.length / 2) - 1;
    const quarter = Math.floor(half / 2);
    const eighth = Math.floor(quarter / 2);

    const firsthalf = half;
    const secondhalf = half * 2;

    const firstquarter = quarter;
    const secondquarter = firsthalf - 1;
    const thirdquarter = quarter * 3;
    const fourthquarter = secondhalf - 1;

    const eighth_one = eighth;
    const eighth_two = firstquarter - 1;
    const eighth_three = eighth * 3 - 1;
    const eighth_four = secondquarter - 1;
    const eighth_five = eighth * 5;
    const eighth_six = thirdquarter - 1;
    const eighth_seven = eighth * 7 - 1;
    const eighth_eight = fourthquarter - 1;

    const whole = array.length - 1;
    const halfArray = [firsthalf, secondhalf];
    const quarterArray = [firstquarter, secondquarter, thirdquarter, fourthquarter];
    const eighthArray = [eighth_one, eighth_two, eighth_three, eighth_four, eighth_five, eighth_six, eighth_seven, eighth_eight];

    for(let index = 0; index < sort_changes.length; index++){
        if(boolean_reset == true) { return; } //Stop if reset is called

        const isColorChange = index % 2 == 0;
        if(isColorChange){
            const [one, two, merge_count] = sort_changes[index];
            var bar_one = document.getElementById("bar_" + one).style;
            var bar_two = document.getElementById("bar_" + two).style;

            //Change Color Of Selected Bars
            bar_one.backgroundColor = color_red;
            bar_two.backgroundColor = color_red;
            await sleep(50);

            //Change Color Back, depending on whether it is an eighth, quarter, half, or whole
            if(eighthArray.includes(merge_count)){ 
                bar_one.backgroundColor = color_gold;
                bar_two.backgroundColor = color_gold;
                //console.log("EIGHTH");
            }else if(quarterArray.includes(merge_count)){ 
                bar_one.backgroundColor = color_purple;
                bar_two.backgroundColor = color_purple;
                //console.log("QUARTER");
            }else if(halfArray.includes(merge_count)){ 
                bar_one.backgroundColor = color_pink;
                bar_two.backgroundColor = color_pink;
                //console.log("HALF");
            }else if(merge_count == whole){ 
                bar_one.backgroundColor = color_green;
                bar_two.backgroundColor = color_green;
                //console.log("WHOLE");
            }else{
                bar_one.backgroundColor = color_blue;
                bar_two.backgroundColor = color_blue;
            }
            await sleep(50);

        }else{

            //Swap Heights
            const [barIndex, height, merge_count] = sort_changes[index];
            swapHelper(barIndex, height);
            //console.log(merge_count);
        }
    }
}

function getChanges(array) {
    const changes = [];
    const temp_array = array.slice();
    mergeSortHelper(array, 0, array.length - 1, temp_array , changes);
    return changes;
}

function mergeSortHelper(array, start, end, temp_array, changes){
    if (start === end) return;
    const mid = Math.floor((start + end) / 2);
    mergeSortHelper(temp_array , start, mid, array, changes);
    mergeSortHelper(temp_array , mid + 1, end, array, changes);
    merge(array, start, mid, end, temp_array, changes);
}

function merge(array, start, mid, end, temp_array, changes){
    mergecounter++;

    let k = start;
    let i = start;
    let j = mid + 1;
    while (i <= mid && j <= end) {
        if(boolean_reset == true) { return; } //Stop if reset is called
        changes.push([i, j, mergecounter]); //Color Push
      if (temp_array[i] <= temp_array[j]) {
        changes.push([k, temp_array[i], mergecounter]); //Swap Push
        array[k++] = temp_array[i++];
      } else {
        changes.push([k, temp_array[j], mergecounter]); //Swap Push
        array[k++] = temp_array[j++];
      }
    }
    while (i <= mid) {
        if(boolean_reset == true) { return; } //Stop if reset is called
        changes.push([i, i, mergecounter]); //Color Push
        changes.push([k, temp_array[i], mergecounter]); //Swap Push
        array[k++] = temp_array[i++];
    }
    while (j <= end) {
        if(boolean_reset == true) { return; } //Stop if reset is called
        changes.push([j, j, mergecounter]); //Color Push
        changes.push([k, temp_array[j], mergecounter]); //Swap Push
        array[k++] = temp_array[j++];
    }
}

function swapHelper(one, height){
    var bar = document.getElementById("bar_" + one).style;
    bar.height = height + "px";
    bar.marginTop = (400 - height) +"px";
}
  