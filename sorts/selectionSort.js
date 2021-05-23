import { boolean_reset } from "../main.js";

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

        document.getElementById("bar_" + index).style.backgroundColor = color_gold;
        await sleep(50);
            var temp_index = index;
            for(var i = index + 1; i < array.length; i++){
                if(boolean_reset == true) { return; } //Stop if reset is called

                //Cycle Through With Wait
                document.getElementById("bar_" + i).style.backgroundColor = color_red;
                await sleep(50);

                if(array[i] < array[temp_index]){
                    temp_index = i;
                    match = true;
                }
                document.getElementById("bar_" + i).style.backgroundColor = color_blue;
                if(match == true){
                    document.getElementById("bar_" + index).style.backgroundColor = color_blue;
                    document.getElementById("bar_" + temp_index).style.backgroundColor = color_gold;
                    if(prev_index != null){
                        document.getElementById("bar_" + prev_index).style.backgroundColor = color_blue;
                    }
                    prev_index = temp_index;
                }
                match = false;
            }
            //Reset the Cycle Through
            if(prev_index != null)
                document.getElementById("bar_" + prev_index).style.backgroundColor = color_blue;
            prev_index = null;

            //Swap Values
            var heightOne = document.getElementById("bar_" + index).style.height;
            var heightTwo = document.getElementById("bar_" + temp_index).style.height;
            //console.log(heightOne + " " + heightTwo);
            var MarginTopOne = document.getElementById("bar_" + index).style.marginTop;
            var MarginTopTwo = document.getElementById("bar_" + temp_index).style.marginTop;
            //console.log(MarginTopOne + " " + MarginTopTwo);
            document.getElementById("bar_" + index).style.height = heightTwo;
            document.getElementById("bar_" + temp_index).style.height = heightOne;

            document.getElementById("bar_" + index).style.marginTop = MarginTopTwo;
            document.getElementById("bar_" + temp_index).style.marginTop = MarginTopOne;

            await sleep(50);

            var temp = array[index];
            array[index] = array[temp_index];
            array[temp_index] = temp;

            document.getElementById("bar_" + index).style.backgroundColor = color_green;
    }
}
