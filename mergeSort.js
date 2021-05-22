import { loadData } from "./main.js";
import { boolean_reset } from "./main.js";

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

//Color Palette
var color_red = "#96384b";
var color_blue = "#387a96";
var color_gold = "#baa347";
var color_green = "#4b9638";

export async function mergeSort(array){
    var oldArray = [];
    for(var i = 0; i < array.length; i++){
        oldArray.push(array[i]);
    }
    console.log(oldArray);
    console.log(array);
    const changes = [];
    mergeSortHelper(array, 0, array.length - 1, changes);

    const newChanges = [];
    for(const change of changes){
        newChanges.push(change.compare);
        newChanges.push(change.compare);
        newChanges.push(change.swap);
    }
    for(var index = 0; index < newChanges.length; index++){
        const [one_id, two_id] = newChanges[index];
        const isColorChange = index % 3 !== 2;
        if(isColorChange){
            await sleep(100);
            const color = index % 3 === 0 ? color_red : color_blue;
            console.log(one_id + " " + two_id);
            document.getElementById(one_id).style.fill = color;
            document.getElementById(two_id).style.fill = color;
        }else{
            await sleep(100);
            var temp = oldArray[one_id];
            oldArray[one_id] = oldArray[two_id];
            oldArray[two_id] = temp;
            console.log(oldArray);
            loadData(oldArray);
        }
    }

    /*for(var index = 0; index < changes.length; index++){
        console.log(changes[index]);
        const {compare, swap} = changes[index];
        await sleep(50);
        document.getElementById(compare[0]).style.fill = color_red;
        document.getElementById(compare[1]).style.fill = color_red;
        await sleep(50);
        document.getElementById(swap[0]).style.fill = color_blue;
        document.getElementById(swap[1]).style.fill = color_blue;
        await sleep(100);
        var temp = oldArray[swap[0]];
        oldArray[swap[0]] = oldArray[swap[1]];
        oldArray[swap[1]] = temp;
        loadData(oldArray);
    }*/
}

//Recursive function
function mergeSortHelper(array, start, end, changes){
    if(start < end) {
		var mid = start + parseInt((end - start) / 2);
		mergeSortHelper(array, start, mid, changes);
		mergeSortHelper(array, mid + 1, end, changes);
		merge(array, start, mid, end, changes);
	}
}

function merge(array, start, mid, end, changes){
    var size_left = mid - start + 1;
    var size_right = end - mid;

    var left_arr = new Array(size_left);
    var right_arr = new Array(size_right);

    for (var i = 0; i < size_left; ++i){
        left_arr[i] = array[start + i];
    }
    for (var j = 0; j < size_right; ++j){
        right_arr[j] = array[mid + 1 + j];
    }

    var i = 0;
    var j = 0;
    var k = start;
        while (i < size_left && j < size_right) {
            const change = {};
            change.compare = [i, j];
            if (left_arr[i] <= right_arr[j]) {
                change.swap = [k, i];
                array[k] = left_arr[i];
                i++;
            }
            else {
                change.swap = [k, j];
                array[k] = right_arr[j];
                j++;
            }
            k++;
            changes.push(change);
        }
 
        while (i < size_left) {
            changes.push({
                compare: [i, i],
                swap: [k, i],
            });
            array[k] = left_arr[i];
            i++;
            k++;
        }

        while (j < size_right) {
            changes.push({
                compare: [j, j],
                swap: [k, j],
            });
            array[k] = right_arr[j];
            j++;
            k++;
        }
}