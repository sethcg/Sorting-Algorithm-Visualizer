import { boolean_reset } from "./main.js";

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

//Color Palette
var color_red = "#96384b";
var color_gold = "#baa347";
var color_green = "#4b9638";

export async function insertionSort(array){
    document.getElementById("bar_" + 0).style.backgroundColor = color_green;

    for(var index = 1; index < array.length; index++){
        if(boolean_reset == true) { return; } //Stop if reset is called

        document.getElementById("bar_" + index).style.backgroundColor = color_gold;
        await sleep(50);
        var value = array[index];
        var i = index;
        while (i > 0 && array[i - 1] > value)
        {
            if(boolean_reset == true) { return; } //Stop if reset is called
            document.getElementById("bar_" + i).style.backgroundColor = color_red;
            await sleep(50);
            if(i == index){ 
                document.getElementById("bar_" + i).style.backgroundColor = color_gold; 
            }else{
                document.getElementById("bar_" + i).style.backgroundColor = color_green;
            }
            array[i] = array[i - 1];
            i--;
        }
        array[i] = value;
        document.getElementById("bar_" + index).style.backgroundColor = color_green;
        var bar_container = document.getElementById("bar-container");
        bar_container.querySelectorAll('*').forEach(n => n.remove());
        
        var bar_container = document.getElementById("bar-container");
        for(let j = 0; j < array.length; j++){
            var bar = document.createElement("div");
            bar.setAttribute("class", "bar");
            bar.style.height =  array[j] + "px";
            bar.style.marginTop =  (400 - array[j]) + "px";
            if(j <= index){ 
                bar.style.backgroundColor = color_green;
            }
            bar.id = "bar_" + j;
            bar_container.appendChild(bar);
        }
    }
}