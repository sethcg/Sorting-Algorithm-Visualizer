import { insertionSort } from "./sorts/insertionSort.js";
import { mergeSort } from "./sorts/mergeSort.js";
import { selectionSort } from "./sorts/selectionSort.js";
import { quickSort } from "./sorts/quickSort.js";
import { bubbleSort } from "./sorts/bubbleSort.js";

export var boolean_reset = false;

var array = [];
var sort_index = 0;
var sort_str = "InsertionSort";
var last_sort_str = "InsertionSort";
var button;

var color_gray = "#2b2b2b";
var color_red = "#ff3232";

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

//Contols the Play button
document.getElementById("Play").onclick = function() {
    if(button == null){ return; }
    switch(sort_str) {
        case "BubbleSort":
            bubbleSort(array);
            break;
        case "InsertionSort":
            insertionSort(array);
            break;
        case "SelectionSort":
            selectionSort(array);
            break;
        case "MergeSort":
            mergeSort(array);
            break;
        case "QuickSort":
            quickSort(array);
            break;
        case "CountingSort":
            break;
        case "RadixSort":
            break;
        default:
            break;
    }

};

//Contols the Reset button
document.getElementById("Reset").onclick = function() {
    reset();
};

//Contols the BubbleSort button
document.getElementById("BubbleSort").onclick = function() {
    //Updating last button appearance
    button = document.getElementById(last_sort_str);
    button.classList.remove("top-button-no-hover");
    button.classList.add("top-button");
    button.disabled = false;

    reset();
    sort_str = "BubbleSort";
    last_sort_str = "BubbleSort";
    
    //Updating this button appearance
    button = document.getElementById(sort_str);
    button.disabled = true;
    button.classList.remove("top-button");
    button.classList.add("top-button-no-hover");  
};

//Contols the InsertionSort button
document.getElementById("InsertionSort").onclick = function() {
    //Updating last button appearance
    button = document.getElementById(last_sort_str);
    button.classList.remove("top-button-no-hover");
    button.classList.add("top-button");
    button.disabled = false;

    reset();
    sort_str = "InsertionSort";
    last_sort_str = "InsertionSort";

    //Updating this button appearance
    button = document.getElementById(sort_str);
    button.disabled = true;
    button.classList.remove("top-button");
    button.classList.add("top-button-no-hover");  
};

//Contols the SelectionSort button
document.getElementById("SelectionSort").onclick = function() {
    //Updating last button appearance
    button = document.getElementById(last_sort_str);
    button.classList.remove("top-button-no-hover");
    button.classList.add("top-button");
    button.disabled = false;

    reset();
    sort_str = "SelectionSort";
    last_sort_str = "SelectionSort";

    //Updating this button appearance
    button = document.getElementById(sort_str);
    button.disabled = true;
    button.classList.remove("top-button");
    button.classList.add("top-button-no-hover");  
};

//Contols the MergeSort button
document.getElementById("MergeSort").onclick = function() {
    //Updating last button appearance
    button = document.getElementById(last_sort_str);
    button.classList.remove("top-button-no-hover");
    button.classList.add("top-button");
    button.disabled = false;

    reset();
    sort_str = "MergeSort";
    last_sort_str = "MergeSort";
    
    //Updating this button appearance
    button = document.getElementById(sort_str);
    button.disabled = true;
    button.classList.remove("top-button");
    button.classList.add("top-button-no-hover");  
};

//Contols the QuickSort button
document.getElementById("QuickSort").onclick = function() {
    //Updating last button appearance
    button = document.getElementById(last_sort_str);
    button.classList.remove("top-button-no-hover");
    button.classList.add("top-button");
    button.disabled = false;

    reset();
    sort_str = "QuickSort";
    last_sort_str = "QuickSort";
    
    //Updating this button appearance
    button = document.getElementById(sort_str);
    button.disabled = true;
    button.classList.remove("top-button");
    button.classList.add("top-button-no-hover");  
};

/*
//Contols the CountingSort button
document.getElementById("CountingSort").onclick = function() {
    //Updating last button appearance
    button = document.getElementById(last_sort_str);
    button.classList.remove("top-button-no-hover");
    button.classList.add("top-button");
    button.disabled = false;

    reset();
    sort_str = "CountingSort";
    last_sort_str = "CountingSort";
    
    //Updating this button appearance
    button = document.getElementById(sort_str);
    button.disabled = true;
    button.classList.remove("top-button");
    button.classList.add("top-button-no-hover");  
};

//Contols the RadixSort button
document.getElementById("RadixSort").onclick = function() {
    //Updating last button appearance
    button = document.getElementById(last_sort_str);
    button.classList.remove("top-button-no-hover");
    button.classList.add("top-button");
    button.disabled = false;

    reset();
    sort_str = "RadixSort";
    last_sort_str = "RadixSort";
    
    //Updating this button appearance
    button = document.getElementById(sort_str);
    button.disabled = true;
    button.classList.remove("top-button");
    button.classList.add("top-button-no-hover");  
};
*/

export function loadData(array){
    var bar_container = document.getElementById("bar-container");
        bar_container.querySelectorAll('*').forEach(n => n.remove());
    for(let index = 0; index < array.length; index++){
        var bar = document.createElement("bar");
        bar.setAttribute("class", "bar");
        bar.style.height =  array[index] + "px";
        bar.style.marginTop =  (400 - array[index]) + "px";
        bar.id = "bar_" + index;
        bar_container.appendChild(bar);
    }
}

async function reset(){
    boolean_reset = true;
    await sleep(500);
    boolean_reset = false;

    var bar_container = document.getElementById("bar-container");
    bar_container.querySelectorAll('*').forEach(n => n.remove());
    const array_size = 50;
    const min_value = 5;
    const max_value = 390;
    array = [];
    for(var i = 0; i < array_size; i++){
        array.push(Math.floor((Math.random() * max_value) + min_value));
    }
    loadData(array);
}

reset();
//window.addEventListener("resize", draw);