import { loadData } from "./main.js";
import { boolean_reset } from "./main.js";

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

//Color Palette
var color_red = "#96384b";
var color_gold = "#baa347";
var color_green = "#4b9638";

export async function insertionSort(array){
    document.getElementById(0).style.fill = color_green;

    for(var index = 1; index < array.length; index++){
        if(boolean_reset == true) { return; } //Stop if reset is called

        document.getElementById(index).style.fill = color_gold;
        await sleep(250);
        var value = array[index];
        var i = index;
        while (i > 0 && array[i - 1] > value)
        {
            if(boolean_reset == true) { return; } //Stop if reset is called
            document.getElementById(i).style.fill = color_red;
            await sleep(250);
            if(i == index){ 
                document.getElementById(i).style.fill = color_gold; 
            }else{
                document.getElementById(i).style.fill = color_green;
            }
            array[i] = array[i - 1];
            i--;
        }
        array[i] = value;
        //document.getElementById(i).style.fill = color_gold;
        //await sleep(250);
        document.getElementById(index).style.fill = color_green;
        //document.getElementById(i).style.fill = color_green;
        loadData(array);
    }
}