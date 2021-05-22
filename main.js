import { insertionSort } from "./insertionSort.js";
import { mergeSort } from "./mergeSort.js";
import { selectionSort } from "./selectionSort.js";

export var boolean_reset = false;

var data = [];
var sort_index = 0;
var sort_str = "InsertionSort";
var last_sort_str = "InsertionSort";
var num_bars = 20;
var button;

var color_gray = "#2b2b2b";
var color_red = "#ff3232";

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

//Contols the Play button
document.getElementById("Play").onclick = function() {
    if(button == null){ return; }
    switch(sort_str) {
        case "InsertionSort":
            insertionSort(data);
            break;
        case "SelectionSort":
            selectionSort(data);
            break;
        case "MergeSort":
            mergeSort(data);
            break;
        case "QuickSort":
            break;
        case "CountingSort":
            break;
        case "HeapSort":
            break;
        default:
            break;
    }

};

//Contols the Reset button
document.getElementById("Reset").onclick = function() {
    reset();
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

//Contols the HeapSort button
document.getElementById("HeapSort").onclick = function() {
    //Updating last button appearance
    button = document.getElementById(last_sort_str);
    button.classList.remove("top-button-no-hover");
    button.classList.add("top-button");
    button.disabled = false;

    reset();
    sort_str = "HeapSort";
    last_sort_str = "HeapSort";
    
    //Updating this button appearance
    button = document.getElementById(sort_str);
    button.disabled = true;
    button.classList.remove("top-button");
    button.classList.add("top-button-no-hover");  
};

// SETUP
var svg = d3.select("svg")
    .attr("width", "calc(80% - 10px)") //Calc(100% - Border of left/right in CSS)
    .attr("height", "400px")
    .attr("display", "block"),
    margin = { top: 5, right: 5, bottom: 5, left: 5},
    x = d3.scaleBand().padding(0.1),
    y = d3.scaleLinear(),
    theData = undefined;

var g = svg.append("g");
		
//DRAWING GRAPH
function draw() {
    var bounds = svg.node().getBoundingClientRect(),
        width = bounds.width + (0.1 * num_bars) - margin.left - margin.right, //(0.1 * num_bars) calculates the .padding(0.1)
        height = bounds.height - margin.top - margin.bottom;

        x.rangeRound([0, width]);
        y.rangeRound([height, 5]);

    var bars = g.selectAll(".bar")
        .data(theData);

    // ENTER
     bars
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d, i) { return x(i); })
        .attr("y", function (d) { return y(d); })
        .attr("width", x.bandwidth())
        .attr("height", function (d) { return height - y(d); })
        .attr("id", function (d, i) { return i; })

    // UPDATE
    bars.attr("x", function (d, i) { return x(i); })
        .attr("y", function (d) { return y(d); })
        .attr("width", x.bandwidth())
        .attr("height", function (d) { return height - y(d); })
        .attr("id", function (d, i) { return i; });

    // EXIT
    bars.exit()
        .remove();
}

// LOADING DATA
export function loadData(data) {
    theData = data;

    x.domain(theData.map(function (d, i) { return i; }));
    y.domain([0, d3.max(theData, function (d) { return d; })]);
                
    draw();
}

function setRandomData(size){
    var min_value = 1;
    var max_value = 1000;
    var array = [];

    for(var i = 0; i < size; i++){
        array.push(Math.floor((Math.random() * max_value) + min_value));
    }
    data = array;
}

async function reset(){
    d3.selectAll("svg > *").remove(); //Deletes the entire <g>...

    boolean_reset = true;
    await sleep(1000);

    svg = d3.select("svg")
    .attr("width", "calc(80% - 10px)") //Calc(100% - Border of left/right in CSS)
    .attr("height", "400px")
    .attr("display", "block"),
    margin = { top: 5, right: 5, bottom: 5, left: 5},
    x = d3.scaleBand().padding(0.1),
    y = d3.scaleLinear(),
    theData = undefined;

    g = svg.append("g");

    setRandomData(num_bars);
    loadData(data);
    document.querySelectorAll("rect").forEach(function(node) {
        node.style.fill = "#387a96";
    });
    boolean_reset = false;
}

window.addEventListener("resize", draw);
setRandomData(num_bars);
loadData(data);