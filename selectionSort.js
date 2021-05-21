import { loadData } from "./main.js";
import { boolean_reset } from "./main.js";

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

//Color Palette
var color_red = "#96384b";
var color_blue = "#387a96";
var color_gold = "#baa347";
var color_green = "#4b9638";

export async function selectionSort(array){
    var prev_index = null;
    var match = false;

    for(var index = 0; index <= array.length - 1; index++){
        if(boolean_reset == true) { return; } //Stop if reset is called

        document.getElementById(index).style.fill = color_gold;
        await sleep(150);
            var temp_index = index;
            for(var i = index + 1; i < array.length; i++){
                if(boolean_reset == true) { return; } //Stop if reset is called

                //Cycle Through With Wait
                document.getElementById(i).style.fill = color_red;
                await sleep(150);

                if(array[i] < array[temp_index]){
                    temp_index = i;
                    match = true;
                }
                document.getElementById(i).style.fill = color_blue;
                if(match == true){
                    document.getElementById(index).style.fill = color_blue;
                    document.getElementById(temp_index).style.fill = color_gold;
                    if(prev_index != null){
                        document.getElementById(prev_index).style.fill = color_blue;
                    }
                    prev_index = temp_index;
                }
                match = false;
            }
            //Reset the Cycle Through
            if(prev_index != null)
                document.getElementById(prev_index).style.fill = color_blue;
            prev_index = null;

            //Swap Values
            var temp = array[index];
            array[index] = array[temp_index];
            array[temp_index] = temp;

            loadData(array);
            document.getElementById(index).style.fill = color_green;
    }
}
