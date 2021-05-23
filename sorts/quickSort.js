import { boolean_reset } from "../main.js";

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

var lastPivot = "";

//Color Palette
var color_red = "#96384b";
var color_blue = "#387a96";
var color_gold = "#c0ac59";
var color_green = "#4b9638";

//Callable function
export async function quickSort(array){
    const temp_array = array.slice();
    var sort_changes = getChanges(temp_array);
    
    for(let index = 0; index < sort_changes.length; index++){
        if(boolean_reset == true) { return; } //Stop if reset is called

        const [one, two, str_flag] = sort_changes[index];
        if(str_flag == "Pivot"){
            if(lastPivot == ""){
                lastPivot = one;
            }else{
                var temp_lastPivot = document.getElementById("bar_" + lastPivot).style;
                temp_lastPivot.backgroundColor = color_blue;
            }
            var pivot = document.getElementById("bar_" + one).style;
            pivot.backgroundColor = color_gold;
            lastPivot = one;
        }else if(str_flag === "Color"){
            var bar_one = document.getElementById("bar_" + one).style;
            var bar_two = document.getElementById("bar_" + two).style;

            //Change Color Of Selected Bars
            bar_one.backgroundColor = color_red;
            await sleep(30);

            //Change Color Back, depending on whether it is an eighth, quarter, half, or whole
            bar_one.backgroundColor = color_blue;
            await sleep(10);
        }else{
            //Swap
            await sleep(20);
            swapHelper(array, one, two);
        }
    }
    document.getElementById("bar_" + lastPivot).style.backgroundColor = color_blue; //Update final pivot
    for(let x = 0; x < array.length; x++){
        await sleep(5);
        document.getElementById("bar_" + x).style.backgroundColor = color_green; //Update final pivot
    }
}

function getChanges(array) {
    const changes = [];
    quickSortHelper(array, 0, array.length - 1, changes);
    return changes;
}

//Recursive Call of Quick Sort
function quickSortHelper(array, leftIndex, rightIndex,changes){
    if (leftIndex < rightIndex)
    {      
        var partitionIndex = partition(array, leftIndex, rightIndex, changes);
        quickSortHelper(array, leftIndex, partitionIndex - 1, changes);
        quickSortHelper(array, partitionIndex + 1, rightIndex,changes);
    }
}


function partition(array, leftIndex, rightIndex, changes){
    //Set Pivot Point
    var pivot = array[rightIndex];
    changes.push([rightIndex, 1, "Pivot"]) //Pivot Push

    var i = (leftIndex - 1);
    for(let j = leftIndex; j <= rightIndex - 1; j++)
    {
        if(i > 0){
            changes.push([i, j, "Color"]); //Color Push
        }
        if (array[j] < pivot)
        {
            i++;
            changes.push([i, j, "Swap"]); //Swap Push
            //Swap the array values
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    changes.push([i + 1, rightIndex, "Swap"]); //Swap Push
    //Swap the array values
    var temp = array[i + 1];
    array[i + 1] = array[rightIndex];
    array[rightIndex] = temp;
    return (i + 1);
}

async function swapHelper(array, indexOne, indexTwo){
    var barOne = document.getElementById("bar_" + indexOne).style;
    var barTwo = document.getElementById("bar_" + indexTwo).style;

    //Swap Height
    var temp_height = barOne.height;
    barOne.height = barTwo.height;
    barTwo.height = temp_height;

    //Swap marginTop
    var temp_margin = barOne.marginTop;
    barOne.marginTop = barTwo.marginTop;
    barTwo.marginTop = temp_margin;

    //Swap index
    var temp = array[indexOne];
    array[indexOne] = array[indexTwo];
    array[indexTwo] = temp;
}