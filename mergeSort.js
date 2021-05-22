import { loadData } from "./main.js";

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

//Color Palette
var color_red = "#96384b";
var color_blue = "#387a96";
var color_gold = "#baa347";
var color_green = "#4b9638";

var mergecounter = 0;

export async function mergeSort(array){
    var sort_changes = getChanges(array)

    const half = Math.floor(array.length / 2) - 1;
    const quarter = Math.floor(half / 2);
    const eighth = Math.floor(quarter / 2);

    const firsthalf = half;
    const secondhalf = half * 2;

    const firstquarter = quarter;
    const secondquarter = quarter * 2 - 1;
    const thirdquarter = quarter * 3;
    const fourthquarter = quarter * 4 - 1;

    const whole = array.length - 1;
    const halfArray = [firsthalf, secondhalf];
    const quarterArray = [firstquarter, secondquarter, thirdquarter, fourthquarter];
    const eighthArray = [];

    for(let index = 0; index < sort_changes.length; index++){
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
            if(quarterArray.indexOf(merge_count) >= 0){ 
                bar_one.backgroundColor = "purple";
                bar_two.backgroundColor = "purple";
                console.log("QUARTER");
            }else if(halfArray.indexOf(merge_count) >= 0){ 
                bar_one.backgroundColor = "pink";
                bar_two.backgroundColor = "pink";
                console.log("HALF");
            }else if(merge_count == whole){ 
                bar_one.backgroundColor = color_green;
                bar_two.backgroundColor = color_green;
                console.log("WHOLE");
            }else{
                bar_one.backgroundColor = color_blue;
                bar_two.backgroundColor = color_blue;
            }
            await sleep(50);

        }else{

            //Swap Heights
            const [barIndex, height, merge_count] = sort_changes[index];
            swapHelper(barIndex, height);
            console.log(merge_count);
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
        changes.push([i, j, timesMergeCalled]); //Color Push
        //changes.push([i, j]);
      if (temp_array[i] <= temp_array[j]) {
        changes.push([k, temp_array[i], timesMergeCalled]); //Swap Push
        array[k++] = temp_array[i++];
      } else {
        changes.push([k, temp_array[j], timesMergeCalled]); //Swap Push
        array[k++] = temp_array[j++];
      }
    }
    while (i <= mid) {
        changes.push([i, i, timesMergeCalled]); //Color Push
        //changes.push([i, i]);
        changes.push([k, temp_array[i], timesMergeCalled]); //Swap Push
        array[k++] = temp_array[i++];
    }
    while (j <= end) {
        changes.push([j, j, timesMergeCalled]); //Color Push
        //changes.push([j, j]);
        changes.push([k, temp_array[j], timesMergeCalled]); //Swap Push
        array[k++] = temp_array[j++];
    }
}

function swapHelper(one, height){
    var bar = document.getElementById("bar_" + one).style;
    bar.height = height + "px";
    bar.marginTop = (400 - height) +"px";
}
  