import { boolean_reset } from "../main.js";

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

//Color Palette
var color_red = "#96384b";
var color_blue = "#387a96";
var color_gold = "#c0ac59";
var color_green = "#4b9638";

export async function bubbleSort(array){
    for (var i = 0; i < array.length - 1; i++){
        if(boolean_reset == true) { return; } //Stop if reset is called
        for (var j = 0; j < array.length - i - 1; j++){
            if(boolean_reset == true) { return; } //Stop if reset is called
            var indexOne = j;
            var indexTwo = j + 1;

            var barOne = document.getElementById("bar_" + indexOne).style;
            var barTwo = document.getElementById("bar_" + indexTwo).style;

            //Change Color Of Selected Bars
            barOne.backgroundColor = color_red;
            barTwo.backgroundColor = color_red;
            await sleep(10);

            barOne.backgroundColor = color_blue;
            barTwo.backgroundColor = color_blue;

            if(array[j] > array[j + 1]){
                await sleep(10);
                
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
        }
    }
    for(let x = 0; x < array.length; x++){
        await sleep(5);
        document.getElementById("bar_" + x).style.backgroundColor = color_green;
    }
}